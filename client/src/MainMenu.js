import React from 'react'

class MainMenu extends React.Component {

    // logout = () => {
    //     localStorage.clear()
    //     this.setState({
    //         login: false 
    //     })
    // }
  
    editProfile=()=>{
        this.props.selectedLink("editProfile")
     }
     accounts=()=>{
        this.props.selectedLink("accounts")
     }
    
     newTicket=()=>{
        this.props.selectedLink("newTicket")
     }
     prices=()=>{
        this.props.selectedLink("prices")
     }
     orders=()=>{
        this.props.selectedLink("orders")
     }
    


    render(){
  
      return (
    
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
        <p onClick={this.editProfile} className="ui massive button">
            Edit Profile
        </p>

        <p onClick={this.accounts} className="ui massive button">
            Accounts
        </p>
        
        <p onClick={this.prices} className="ui massive button">
             Prices
        </p>
        
        <p onClick={this.orders} className="ui massive button">
             Orders 
        </p>
        
        <p onClick={this.newTicket} className="ui massive button blue">
             New Ticket 
        </p>

        {/* <p className="ui massive button" onClick={this.logout}>
            Logout
        </p> */}
      </div>
      
  
         
      )
    }
  }
  
  export default MainMenu;
  