import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import SignInComponent from './Components/Auth/Signin';
import HomeComponent from './Components/Home';


export default props=>{
    return <BrowserRouter><Switch>
        <Route path="/" component={SignInComponent} exact></Route>
        <Route path="/home" component={HomeComponent} exact></Route>
    </Switch>
    </BrowserRouter>
}