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

        if(this.state.itemList.length == 0) return alert("There are no items yet!")


        let items = this.state.itemList;
        let formData = {};

        for (let i = 0; i < items.length; i++) {
            formData[parseInt(items[i].id)] = items[i];
        }


        fetch(`http://localhost:3000/api/v1/orders`,
        {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${localStorage.token}`,
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            orders: formData,
            id: localStorage.user_id
            })
        })
        .then(res => res.json())
        .then(user => this.props.updateUser(user))
        .then(this.newItem())
        .then(this.setState({
            itemList: []
        }))

    }

    
    render(){
        
      return (
        <div  class="lt-grid-container" style={{}}>
            
            <div class='column-ticket' style={{}}> 

                <ItemList user={this.props.user} itemList={this.state.itemList} account={this.props.account}/>
            </div>
            <div class='column-buttons'style={{}}>
                <Buttons user={this.props.user} setCurrentItem={this.setCurrentItem} addDescription={this.addDescription} newItem={this.newItem} mainMenu={this.props.mainMenu} placeOrder={this.placeOrder} selected={this.props.selected}/>
            </div>
            
        </div>
                
      )
    }
  }
  
  export default CreateTicket;