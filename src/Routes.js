import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import SignInComponent from './Components/Auth/Signin';
import HomeComponent from './Components/Home';
import Layout from './Components/Common/Layout';

export default props=>{
    const {permissions}=props;
    return <BrowserRouter><Switch>
        <Route path="/" component={SignInComponent} exact></Route>
        {/* <Route path="/home" component={HomeComponent} exact></Route> */}
        <Route path="/home" render={(childprops)=><Layout {...childprops} permissions={permissions}><HomeComponent {...props}/></Layout>} exact></Route>
        {/* <Route path="/home" render={(props)=><Layout {...props}><HomeComponent {...props}/></Layout>} exact></Route> */}
        {/* <Route path="/home" render={(props)=><Layout {...props}><HomeComponent {...props}/></Layout>} exact></Route> */}

    </Switch>
    </BrowserRouter>
}