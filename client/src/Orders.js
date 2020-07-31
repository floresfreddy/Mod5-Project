import React from 'react'

class Orders extends React.Component {
  

  renderTableData() {
    return this.props.user.orders.map((order, index) => {
       const { id, item, item_type, description, cost, ticket_id, created_at, updated_at } = order //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{item}</td>
             <td>{cost}.00</td>
             <td>{item_type}</td>
             <td>{description}</td>
             <td>{ticket_id}</td>
             <td>{created_at}</td>
             <td>{updated_at}</td>
          </tr>
       )
    })
 }

 renderTableHeader() {
  let header = Object.keys(this.props.user.orders[0])
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
}
    

goHome = () => {
  this.props.selectedLink("main")
}


    render(){
  
      return (
    
      <div >
          <h1 id='title'>Orders</h1>
            <table id='orders'>
               <tbody>
               <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
            <button onClick={()=>this.goHome()} className="ui massive button back-button" style={{float:"right"}}>
              HOME
          </button>
      </div>
         
      )
    }
  }
  
  export default Orders;