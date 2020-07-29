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
            default: 
                return null; 
        }
    }
    
    
      render() {
        return(
          <div class="">
            {  
                <div class=''>
                    {this.renderSwitch(this.state.buttonMenu)}  
                </div>
            
            } 
          </div>
        )
      }

    
  

  }
  
  export default Buttons;