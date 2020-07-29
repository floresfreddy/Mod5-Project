import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import LandingPage from './LandingPage'




class App extends React.Component{

  constructor(){
    super()
    this.state = {
      testNew: "testnew",
      test: "test",
      form: false,
      user: {}
    }
  }

  render(){

    return (
    <div>
      <LandingPage/>
    </div>
        
  )};

}

export default App;
