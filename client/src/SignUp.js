import React, {Component} from 'react'
import { withRouter, NavLink } from 'react-router-dom'

class SignUp extends Component{

    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                company: this.state.company,
                phone: this.state.phone,
                address: this.state.address
            })
        })
        .then(res => res.json())
        .then(console.log)
        .then(() => {
            alert("Signing up")
            setTimeout(function(){ this.props.history.push("/"); }, 3000)
        })
    }
   
    render(){
        return(
        <div>
            <h2>Signup</h2>
            <form onSubmit={(e) => this.signUp(e)}>
            <label>UserName</label>
            <input name="username" type="text" onChange={(e) => this.handleChange(e)}/>
            <label>Password</label>
            <input name="password" type="password" onChange={(e) => this.handleChange(e)}/>
            <label>Company</label>
            <input name="company" type="text" onChange={(e) => this.handleChange(e)}/>
            <label>Phone</label>
            <input name="phone" type="text" onChange={(e) => this.handleChange(e)}/>
            <label>Address</label>
            <input name="address" type="text" onChange={(e) => this.handleChange(e)}/>
            <input type="submit"/>
            </form>
            <br></br>
            <NavLink
                to="/"
                exact
                
                activeStyle={{
                    background: 'darkblue'
                }}
                > Back
            </NavLink>
        </div>
        )
    }
}

export default withRouter(SignUp)


