import React from 'react'

class ItemList extends React.Component {

  getTotal = () => {
    var tot = 0

    for (var i = 0; i < this.props.itemList.length; i++) {
        tot += (parseInt(this.props.itemList[i].price))
    }
    return tot;
  }

  renderList = () => {

    if(this.props.itemList.lenght == 0) return <p>"NO ITEMS"</p>

    return(
      <div class="ticket-grid">
        <div class="ticket-grid-top">
          <h1>{`${this.props.account.first_name} ${this.props.account.last_name} `}</h1>
          <br/>
          {this.props.itemList.map(item=>{
            return (
              <div>
                <ul><h2>{item.name}: <span style={{float:'right'}}>{item.price}.00</span></h2>
                  <li>
                    {item.description.map(des => <li><h4>{des}</h4></li>)}
                  </li>
                </ul>
                <br></br>
              </div>
            )
          })}
        </div>
        <div class='ticket-grid-bottom'>
          <div>
            <h3>Pieces: {this.props.itemList.length}<span style={{float:'right'}}>Discount: 0.00</span></h3>

            <h2>Total: <span style={{float:'right'}}>{this.getTotal()}.00</span></h2>
          </div>

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