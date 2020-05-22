import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent';

//
import SigninComponent from './Components/Auth/Signin';

import Routes from './Routes';

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

    return <Routes/>

    {/* <SigninComponent/> */}
    {/* <ClassComponent appName={this.state.appName} /> */}
    {/* <FunctionalComponent {...this.state}/> */}

  }
}

export default App;
