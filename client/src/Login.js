import React, {Component} from 'react'
import { withRouter , NavLink } from 'react-router-dom'

class Login extends Component{
    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    logIn = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res =>  res.json())
        .then(userInfo => {
            console.log(userInfo)
            localStorage.token = userInfo.token
            localStorage.user_id = userInfo.id

            if(localStorage.token !== 'undefined'){
                this.props.history.push('/dashboard')  
            }
            else{
                alert('Invalid username or password')
            }  
             
        })
        e.target.reset()
        
    }
   
    render(){
        return(
        <div class='form-div'>
            <h2>LogIn</h2>
            <form onSubmit={(e) => this.logIn(e)}>
                <label>UserName</label>
                <input name="username" type="text" onChange={(e) => this.handleChange(e)} required/>
                <label>Password</label>
                <input name="password" type="password" onChange={(e) => this.handleChange(e)} required/>
                <input type="submit"/>
            </form>
            <br></br>
            <NavLink
                to="/signup"
                exact
                
                activeStyle={{
                    background: 'darkblue',
                    fontWeight: 'bold'
                }}
                > Signup
            </NavLink>
        </div>
        )
    }
}


export default withRouter(Login)


