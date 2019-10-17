import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
      username: 'CRAEW'
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.changeUsernameHandler}
          currentName={this.state.username}
        />
        
        <div className="AppCards">
          <UserOutput userName={this.state.username}/>

          <UserOutput userName="CRAEW"/>
        </div>
        
 
      </div>
    );
  }
}

export default App;
