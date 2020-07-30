import React, { Component } from 'react'
import Suggestions from './Suggestions.js'

class AccountSelect extends Component {
    state = {
      query: '',
      results: this.props.user.accounts,
      accounts: this.props.user.accounts,
    }
  
    getInfo = () => {

        let result = this.state.accounts.filter(a=> a.last_name.toLowerCase().includes(this.state.query.toLowerCase()))

        this.setState({
        results: result
        })
    }
  
    handleInputChange = () => {
    
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 0) {
            //   if (this.state.query.length % 2 === 0) {
                this.getInfo()
            //   }
            } else if (!this.state.query) {
            }
        })
    }

    submitAccount = (account) => {
        // e.preventDefault()
        console.log('submitting account')
        console.log(account)

        this.props.selectedAccount(account)
        this.props.selected('createTicket')

    }
  
    render() {
        let divstyle = {position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',}
      return (
        <div style={divstyle}> 
            <button className="ui massive button" onClick={()=>this.props.mainMenu('main')}>HOME</button>
            <h1>Select Account</h1>
            <div className='ui left transparent icon input' style={{ border:"1px solid gray", borderRadius:'4px'}} >
                <input style={{minWidth: '370px', minHeight: '30px'}}
                    placeholder="Search By Last Name..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
            </div>
            <br/>
            <br/>
                
            <Suggestions results={this.state.results} submit={this.submitAccount} />
            <br></br>
            
        </div>
      )
    }
  }
  
  export default AccountSelect