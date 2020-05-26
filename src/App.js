import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent';

//
import SigninComponent from './Components/Auth/Signin';

import Routes from './Routes';

import * as service from './Services';

class App extends Component {

constructor(props){
  super(props)
  this.state={
    appName:"React APP",
    permissions:[]
  }
}


config=()=>{

  service.API_GET('/config').then(res=>{

    if(res && res.data && res.data.success){
    // if(res && res.success){
      this.setState({
        permissions:res.data.data.screens
      })
    }

  }).catch(err=>console.log("Error",err));
}

componentDidMount(){

  this.config();
}

  render() {
    // return [<div>h2</div>,<div>3</div>]
    // return <><div>h2</div><div>3</div></>
    // return <React.Fragment><div>h2</div>,<div>3</div></React.Fragment>

    return <Routes permissions={this.state.permissions}/>

    {/* <SigninComponent/> */}
    {/* <ClassComponent appName={this.state.appName} /> */}
    {/* <FunctionalComponent {...this.state}/> */}

  }
}

export default App;
