import React from 'react'

class AccountMenu extends React.Component {

    // logout = () => {
    //     localStorage.clear()
    //     this.setState({
    //         login: false 
    //     })
    // }
  
    editAccount=()=>{
        this.props.selected("editAccount")
     }
    
     addAccount=()=>{
        this.props.selected("addAccount")
     }
    
     mainMenu=()=>{
        this.props.selectedLink("main")
     }
    


    render(){
  
      return (
    
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
        <p onClick={this.editAccount} className="ui massive button">
            Edit Account
        </p>

        <p onClick={this.addAccount} className="ui massive button">
            Add Account
        </p>

        <p onClick={this.mainMenu} className="ui massive button blue">
             Main Menu 
        </p>

        {/* <p className="ui massive button" onClick={this.logout}>
            Logout
        </p> */}
      </div>
      
         
      )
    }
  }
  
  export default AccountMenu;