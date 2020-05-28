import React from 'react';
import Header from '../Header';
import SideBar from '../LeftBar';

export default props=>{

    const {permissions}=props;
    return <div className="container">
             <Header/>
             <SideBar permissions={permissions} />
            {props.children}
        </div>

}