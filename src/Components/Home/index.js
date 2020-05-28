import React,{useEffect,useState} from 'react';
import * as service from './../../Services';

import {connect} from "react-redux"

// export default props=>{

const home=(props)=>{
const [state,setState]=useState([]);

    const getDetails=()=>{

        service.API_GET('/home/detail').then((res)=>{
        if(res && res.data && res.data.success){
            setState(res.data.data);
        }           

        }).catch((err)=>{


        })
    }

    useEffect(()=>{
    getDetails();
    },[])


    const setData=()=>{


    }

    return <div className="container">
   {state && state.map((item)=> <div className="row">
      <div className="col">{item.name}</div>
      <div className="col">{item.mobile}</div>
   </div>)}
  </div>
}


const mapStateToProps=state=>{
debugger
    return {
     state:state
    }
}

const mapDispatchToProps=dispatch=>{

    return {
    //  onToSetData:()=>dispatch()
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(home)