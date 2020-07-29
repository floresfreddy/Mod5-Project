import React from 'react'
import AccountSelect from './ticket/AccountSelect'
import CreateTicket from './ticket/CreateTicket'

class NewTicket extends React.Component {
  
    
  state={
    selected: 'ticketAccount',
    selectedAccount: {}
  }

  selectedAccount = (account) => {

    this.setState({
      selectedAccount: account
    })

  }
  
  selected=(value)=>{
    this.setState({
    selected: value
    })
  }


  renderSwitch(param) {
    switch(param) {
        case 'ticketAccount':
            return (
            <div>
                <AccountSelect user= {this.props.user} selected={this.selected} mainMenu={this.props.selectedLink} selectedAccount={this.selectedAccount} />
            </div>
            )
        case 'createTicket':
            return <CreateTicket user={this.props.user} account={this.state.selectedAccount} selected={this.selected} mainMenu={this.props.selectedLink} updateUser={this.props.updateUser}/>
        default: 
            return null; 
    }
  }


  render() {
    return(
      <div style={{}}>
        {  
            
                this.renderSwitch(this.state.selected)
          
        
        }  
      </div>
    )
  }



  }
  
  export default NewTicket;