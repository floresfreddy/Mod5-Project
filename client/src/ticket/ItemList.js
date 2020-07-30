import React from 'react'

class ItemList extends React.Component {

  state = {
    account: this.props.account,
    itemList: this.props.itemList
  }

  // componentDidUpdate()

  renderList = () => {

    if(this.props.itemList.lenght == 0) return "NO ITEMS"

    return(
      <div class="ticket-grid">
        <div class="ticket-grid-top">
          <h1>{`${this.props.account.first_name} ${this.props.account.last_name} `}</h1>
          <br/>
          {this.props.itemList.map(item=>{
            return (
            <ul><h2>{item.name}: <span style={{float:'right'}}>{item.price}.00</span></h2>
              <li>
                {item.description.map(des => <li><h4>{des}</h4></li>)}
              </li>
            </ul>
            )
          })}
        </div>
        <div class='ticket-grid-bottom'>

        </div>
        
      </div>
    )
  }
    
    render(){
  
      return (
           <div>
             {this.renderList()}
           </div>
      )
    }
  }
  
  export default ItemList;