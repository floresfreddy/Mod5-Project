import React from 'react'

class EditAccounts extends React.Component {
  
    

    add = (e) => {

        e.preventDefault()

        
        fetch(`http://localhost:3000/api/v1/accounts/${e.target[0].value}`,
        {
            method: "PATCH",
            headers: {
            "Authorization": `Bearer ${localStorage.token}`,
            "Content-Type" : "application/json"
            },
            body: JSON.stringify({
            first_name: e.target[1].value,
            last_name: e.target[2].value,
            phone: e.target[3].value,
            address: e.target[4].value,
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
                <label>
                    Choose Account
                    <select className="ui floating search dropdown button">
                        {this.props.user.accounts.map(account => {
                            return <option value={account.id} key={account.id}>{`${account.first_name} ${account.last_name}`}</option>
                        })}
                    </select>
                </label>
                
                <input className="ui label input" type='text' placeholder='First Name'/>
                <input className="ui label input" type='text' placeholder='Last Name'/>
                <input className="ui label input" type='text' placeholder='Phone'/>
                <input className="ui label input" type='text' placeholder='Address'/>
                <input className="ui button" type='submit' value='Edit Account'/>
            </form>
            <br/>
            <br/>
            <p onClick={()=>this.goHome()} className="ui massive button">
                BACK
            </p>
        </div>
    )}
}

  
  export default EditAccounts;