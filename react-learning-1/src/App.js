import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    userName: "SuperJovo"
   }

  inputChangeHandler = (event) => {
    this.setState({userName: event.target.value})
  }

   render(){
    return (
      <div className="App">
        <UserInput change = {this.inputChangeHandler} name = {this.state.userName}></UserInput>
        <UserOutput userName = {this.state.userName}></UserOutput>
        <UserOutput userName = {this.state.userName}></UserOutput>
        <UserOutput userName = "Jovo"></UserOutput>
      </div>
    );
   }
}

export default App;
