import React from 'react'
// import {Link} from 'react-router-dom'


class EditProfile extends React.Component{


    add = (e) => {

        e.preventDefault()
      
        
        fetch(`http://localhost:3000/api/v1/users/${localStorage.user_id}`,
        {
          method: "PATCH",
          headers: {
            "Authorization": `Bearer ${localStorage.token}`,
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            username: e.target[0].value,
            company: e.target[1].value,
            phone: e.target[2].value,
            address: e.target[3].value 
            })
        })
        .then(res => res.json())
        .then(user => this.props.updateUser(user))


    }
    
    goHome = () => {
        this.props.selectedLink("main")
    }

    

    render(){
    return(
        <div class='form-div'>
            <form onSubmit={(e) => {
                this.add(e)
                this.goHome()
                }}>
                <input className="" type='text' placeholder='Username'/>
                <input className="" type='text' placeholder='Company'/>
                <input className="" type='text' placeholder='Phone'/>
                <input className="" type='text' placeholder='Address'/>
                <input className="ui button" type='submit' value='Edit Profile'/>
            </form>
            <br/>
            <br/>
            <button onClick={()=>this.goHome()} className="ui massive button back-button" style={{float:"right"}}>
                HOME
            </button>
        </div>
    )}
}

export default EditProfile