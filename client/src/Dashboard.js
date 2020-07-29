import React from 'react'
import NavBar from './NavBar.js'
import Login from './Login.js'
import EditProfile from './EditProfile.js'
import MainMenu from './MainMenu.js'
import Accounts from './Accounts.js'
import NewTicket from './NewTicket.js'
import EditPrices from './EditPrices.js'
import Orders from './Orders.js'


class Dash extends React.Component{


    state={
        selected: 'main',
        user: {}
    }

  

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/users/${localStorage.user_id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      } 
    })
    .then(res => res.json())
    .then(user => {
      this.setState({
        user: user 
      })
  })
    .then(this.selectedLink("main"))
  }

  updateUser = (user)=>{
    this.setState({
      user: user
    })
  }

  selectedLink=(value)=>{
      this.setState({
      selected: value
      })
  }

  renderSwitch(param) {
        switch(param) {
            case 'main':
                return (
                <div>
                    <NavBar selectedLink={this.selectedLink}/>
                    <MainMenu selectedLink={this.selectedLink}/>   
                </div>
                )
            case 'editProfile':
                return <EditProfile user={this.state.user} updateUser={this.updateUser} selectedLink={this.selectedLink}/>
            case 'accounts': 
                return <Accounts user={this.state.user} updateUser={this.updateUser} selectedLink={this.selectedLink}/>
            case 'newTicket': 
                return <NewTicket user={this.state.user} updateUser={this.updateUser} selectedLink={this.selectedLink}/>
            case 'prices': 
                return <EditPrices user={this.state.user} updateUser={this.updateUser} selectedLink={this.selectedLink}/>
            case 'orders': 
                return <Orders user={this.state.user} updateUser={this.updateUser} selectedLink={this.selectedLink}/>
            default: 
                return null; 
        }
    }



  render() {
    return(
      <div>
         { localStorage.token !== 'undefined'
         ? 
            <div>
                {this.renderSwitch(this.state.selected)}  
           </div>
         : <Login/>
         }  
      </div>
    )
  }
    
}

export default Dash 