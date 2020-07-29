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
      <div>
        <h1>{`${this.props.account.first_name} ${this.props.account.last_name} `}</h1>
        <br/>
        {this.props.itemList.map(item=>{
          return (
          <ul><h2>{item.name}: {item.price}</h2>
            <li>
              {item.description.map(des => <li><h4>{des}</h4></li>)}
            </li>
          </ul>
          )
        })}
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