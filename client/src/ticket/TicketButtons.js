import React from 'react'

class Buttons extends React.Component {
  
    state={
        items: this.props.user.items,
        
        buttonMenu: 'category',

        colorDescriptions : ["white", "black", "blue", 'red', 'tan', 'brown', 'gray', 'pink'],

        fabricDescriptions : ['silk', 'linen', 'rayon', 'wool']

    }

    buttonMenuSelect=(value)=>{
        this.setState({
        buttonMenu: value
        })
    }
    
    categorySelect = (select) => {
        this.setState({
            category: select
        })
        this.buttonMenuSelect(select)
    }
    
    typeSelect=(item)=>{
        this.props.setCurrentItem(item)
        this.buttonMenuSelect('description')
    }

    newItem = () => {
        this.props.newItem()
        this.buttonMenuSelect(this.state.category)
    }


    placeOrder = () => {
        this.props.placeOrder()
        this.buttonMenuSelect('new order?')
        
    }
    
    renderSwitch(param) {
        switch(param) {
            case 'category':
                return (
                    <div>
                        <button className="ui massive button ticket-button" onClick={()=>this.categorySelect('laundry')}>Laundry</button>
                        <button className={"ui massive button ticket-button"} onClick={()=>this.categorySelect('dryclean')}>DryClean</button>
                    </div>
                )
            case 'laundry':
                return this.state.items.filter(item => item.item_type === "laundry").sort((a, b) => a.id - b.id).map(item => <button className={"ui massive button ticket-button"} onClick={()=>{ this.typeSelect(item)}} >{item.name}</button>)
            case 'dryclean':
                return this.state.items.filter(item => item.item_type === "dry clean").sort((a, b) => a.id - b.id).map(item => <button className="ui massive button ticket-button" onClick={()=>{ this.typeSelect(item)}} >{item.name}</button>)
            case 'description':
                return (
                    <div class="description-grid">
                        <div class="colors">
                            {this.state.colorDescriptions.map(color => <button className={color + ' ui massive button ticket-button'} onClick={()=>{ this.props.addDescription(color)}} >{color}</button>)}
                        </div>
                        <div class='fabrics'>
                            {this.state.fabricDescriptions.map(fabric => <button className="ui massive button ticket-button" onClick={()=>{ this.props.addDescription(fabric)}} >{fabric}</button>)}
                        </div>
                        <div class= 'new-item'>
                            <button className="ui massive button ticket-button" onClick={()=> this.newItem()}>NEW ITEM</button>
                        </div>
                    </div>
                )
            case 'new order?':
                    return (
                        <div>
                            <h1>New Item?</h1>
                            <button className= "ui massive button" onClick={()=> this.buttonMenuSelect('category')}>Yes</button>
                            <button className= "ui massive button" onClick={()=> this.props.selected("ticketAccount")}>No</button>
                        </div>
                    )
            default: 
                return null; 
        }
    }
    
    
      render() {
        return(
          <div class="button-grid">
            {  
                <div class='row-topB'>
                    {this.renderSwitch(this.state.buttonMenu)}  
                </div>
            
            } 
            <div class='row-bottomB'>
            <button style={{}} className="ui blue massive button ticket-button" onClick={()=>this.placeOrder()}>PLACE ORDER</button>
            <button style={{}} className="ui massive button ticket-button" onClick={()=>this.props.mainMenu('main')}>HOME</button> 

            </div>
          </div>
        )
      }

    
  

  }
  
  export default Buttons;