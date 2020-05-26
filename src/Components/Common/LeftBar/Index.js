import React from 'react';
import {Link} from "react-router-dom";

export default props=>{

  const {permissions}=props;
  // ["Home","Create","List"]
  // side bar code
  return <div class="w3-sidebar w3-light-grey w3-bar-block" style={{width:"25%"}}>
    <h3 class="w3-bar-item">Menu</h3>
  {permissions && permissions.includes('Home') && <Link to="home" >Home</Link>}
  {permissions && permissions.includes('Create') && <Link to="create" >Create</Link>}
  </div>
}