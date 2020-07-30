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
        <button onClick={this.editProfile} className="ui massive button menu-button">
            Edit Profile
        </button>

        <button onClick={this.accounts} className="ui massive button menu-button">
            Accounts
        </button>
        
        <button onClick={this.prices} className="ui massive button menu-button">
             Prices
        </button>
        
        <button onClick={this.orders} className="ui massive button menu-button">
             Orders 
        </button>
        
        <button onClick={this.newTicket} className="ui massive button blue menu-button">
             New Ticket 
        </button>

        {/* <p className="ui massive button" onClick={this.logout}>
            Logout
        </p> */}
      </div>
      
  
         
      )
    }
  }
  
  export default MainMenu;
  