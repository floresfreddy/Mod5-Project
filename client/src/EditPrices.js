import React from 'react'

class EditPrices extends React.Component {
  
    
  updatePrices = (e) => {

    e.preventDefault()
   
    let target   = e.target;
    let formData = {};

    for (let i = 0; i < target.length-1; i++) {
        formData[parseInt(target.elements[i].id)] = parseFloat(target.elements[i].value);
    }
    
    for (const item in formData) {
      if(!Number.isFinite(formData[item])){
        return alert(`Invalid Input`)
      }
    }
    
    fetch(`http://localhost:3000/api/v1/items`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        price: formData,
        id: localStorage.user_id
        })
    })
    .then(res => res.json())
    .then(user => this.props.updateUser(user))

  }


  goHome = () => {
      this.props.selectedLink("main")
  }



  render(){
  return(
      <div class='prices-div'>
          <form onSubmit={(e) => {
              this.updatePrices(e)
              }}>
              {this.props.user.items.sort((a, b) => a.id - b.id).map(item => 
                <div>
                    <label>{item.item_type} - {item.name}</label>
                    <input className="" type='number' step='0.01' id={item.id} defaultValue={item.price} required/>
                </div> 
              )} 
              <input className="ui button" type='submit' value='Update Prices'/>  
          </form>

          <br/>
          <br/>
          <button onClick={()=>this.goHome()} className="ui massive button back-button" style={{float:"right"}}>
              HOME
          </button>
      </div>
  )}

}
  
  export default EditPrices;