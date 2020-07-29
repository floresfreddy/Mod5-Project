import React from 'react'


class AddAccount extends React.Component {
  
    
    add = (e) => {

        e.preventDefault()
      
        fetch(`http://localhost:3000/api/v1/accounts`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${localStorage.token}`,
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            first_name: e.target[0].value,
            last_name: e.target[1].value,
            phone: e.target[2].value,
            address: e.target[3].value,
            user_id: localStorage.user_id
            })
        })
        .then(res => res.json())
        .then(user => this.props.updateUser(user))

    } 
    
    goHome = () => {
        this.props.selected("accountMain")
    }

    

    render(){
    return(
        <div>
            <form onSubmit={(e) => {
                this.add(e)
                this.goHome()
                }}>
                <input className="ui label input" type='text' placeholder='First Name'/>
                <input className="ui label input" type='text' placeholder='Last Name'/>
                <input className="ui label input" type='text' placeholder='Phone'/>
                <input className="ui label input" type='text' placeholder='Address'/>
                <input className="ui button" type='submit' value='Add Account'/>
            </form>
            <br/>
            <br/>
            <p onClick={()=>this.goHome()} className="ui massive button">
                BACK
            </p>
        </div>
    )}
}
  
  export default AddAccount;