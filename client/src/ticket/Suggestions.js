import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(account => (
    <button className="ui button" style={{display:'block', minWidth: '230px'}} type='button' key={account.id} onClick={() => props.submit(account)}>
      {`${account.first_name} ${account.last_name}`}
    </button>
  ))
  return <div>{options}</div>
//   return <form style={{display:'block'}} >{options}</form>
}

export default Suggestions