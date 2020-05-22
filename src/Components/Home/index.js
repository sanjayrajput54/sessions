import React,{useEffect,useState} from 'react';
import * as service from './../../Services';
import { stat } from 'fs';

export default props=>{

const [state,setState]=useState([]);

    const getDetails=()=>{

        service.API_GET('/home').then((res)=>{
        if(res && res.data && res.data.success){
            setState(res.data.data);
        }           

        }).catch((err)=>{


        })
    }

    useEffect(()=>{
    getDetails();
    },[])



    return <div class="container">
   {state && state.map((item)=> <div class="row">
      <div class="col">{item.name}</div>
      <div class="col">{item.mobile}</div>
   </div>)}
  </div>
}