import React from 'react'
import ItemList from './ItemList'
import Buttons from './TicketButtons'

class CreateTicket extends React.Component {

    state={

        ids:0,

        account : this.props.account,

        currentItem: {
            id: 0,
            name: '',
            item_type: '',
            price: 0,
            description: []
        },

        itemList:[],

    } 

    setCurrentItem = (item) => {

        // this.setState({
        //     ids: this.state.ids + 1
        // })

        this.setState((state)=>({

            ids: state.ids + 1,

            currentItem: {
                id: state.ids +1,
                name: item.name,
                item_type: item.item_type,
                price: item.price,
                description: []
            }
        }))

        this.setState((state) => ({
            itemList: [...state.itemList, state.currentItem]
        }))

    }

    addDescription = (description) => {

        // debugger
  
        let fullDescription = [...this.state.currentItem.description, description]

        
        this.setState((state)=>({
            currentItem: {...state.currentItem, description: fullDescription}
        }))

        let itemsArray = [...this.state.itemList]
        let itemID = itemsArray.findIndex(obj => obj.id === this.state.currentItem.id)
        
        itemsArray[itemID].description = fullDescription

        this.setState({
            itemList: itemsArray
        })

    }

    newItem = () => {
        
        this.setState((state)=>({
            currentItem: {
                id: state.ids,
                name: '',
                item_type: '',
                price: 0,
                description: []
            } 
        }))

    }

    placeOrder = () => {
        
        fetch(`http://localhost:3000/api/v1/orders`,
        {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${localStorage.token}`,
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            orders: this.state.itemList,
            id: localStorage.user_id
            })
        })
        .then(res => res.json())
        .then(user => this.props.updateUser(user))

    }

    
    render(){
        
      return (
        <div  class="lt-grid-container" style={{}}>
            
            <div class='column-ticket' style={{}}> 

                <ItemList user={this.props.user} itemList={this.state.itemList} account={this.props.account}/>
            </div>
            <div class="column-ticketB">

            </div>
            <div class='column-button'style={{}}>
                <Buttons user={this.props.user} setCurrentItem={this.setCurrentItem} addDescription={this.addDescription} newItem={this.newItem}/>
            </div>
            <div class="column-bottomB">
                <button style={{}} className="ui blue button" onClick={()=>this.placeOrder}>PLACE ORDER</button>
                <button style={{}} className="ui button" onClick={()=>this.props.mainMenu('main')}>HOME</button> 
            </div>
            
        </div>
                
      )
    //   return (
    //     <div  class="" style={{display: 'flex'}}>
            
    //         <div style={{order: '1'}}> 

    //             <ItemList user={this.props.user} itemList={this.state.itemList} account={this.props.account}/>
    //         </div>
    //         <div style={{order: '2'}}>
    //             <Buttons user={this.props.user} setCurrentItem={this.setCurrentItem} addDescription={this.addDescription} newItem={this.newItem}/>

    //             <button style={{order: '2', alignSelf: 'flex-end'}} className="ui blue button" onClick={()=>this.placeOrder}>PLACE ORDER</button>
    //             <button style={{order: '2', alignSelf: 'flex-end'}} className="ui button" onClick={()=>this.props.mainMenu('main')}>HOME</button> 
    //         </div>
            
    //     </div>
                
    //   )
    }
  }
  
  export default CreateTicket;