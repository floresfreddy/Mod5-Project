import React from 'react'
import AccountMenu from './account/AccountMenu.js'
import AddAccount from './account/AddAccount.js'
import EditAccount from './account/EditAccount.js'
import NavBar from './NavBar.js'


class Accounts extends React.Component {
  
  state={
    selected: 'accountMain',
  }

  selected=(value)=>{
    this.setState({
    selected: value
    })
  }

  renderSwitch(param) {
    switch(param) {
        case 'accountMain':
            return (
            <div>
                <NavBar selectedLink={this.props.selectedLink}/>
                <AccountMenu selected={this.selected} selectedLink={this.props.selectedLink}/>   
            </div>
            )
        case 'addAccount':
            return <AddAccount user={this.props.user} updateUser={this.props.updateUser} selected={this.selected}/>
        case 'editAccount': 
            return <EditAccount user={this.props.user} updateUser={this.props.updateUser} selected={this.selected}/>
        // case 'newTicket': 
        //     return <NewTicket user={this.state.user} selectedLink={this.selectedLink}/>
        default: 
            return null; 
    }
  }


  render() {
    return(
      <div>
        {  
            <div>
                {this.renderSwitch(this.state.selected)}  
          </div>
        
        }  
      </div>
    )
  }

}
  
export default Accounts;