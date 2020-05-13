import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent';

class App extends Component {

constructor(props){
  super(props)
  this.state={
    appName:"React APP"
  }
}


  render() {
    // return [<div>h2</div>,<div>3</div>]
    // return <><div>h2</div><div>3</div></>
    // return <React.Fragment><div>h2</div>,<div>3</div></React.Fragment>

    return <div style={{padding:'10px'}} className="App-header">
    <ClassComponent appName={this.state.appName} />
    <FunctionalComponent {...this.state}/>
    </div>
  }
}

export default App;
