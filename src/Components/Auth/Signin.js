
import React,{useEffect,useState} from 'react';
import * as utility from './../../Utility';

import * as service from './../../Services';
import {setToken} from './../../Store';

const schema={
    username:{
     type:"string",
     regex:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
     message:"Invalid email format"
    },
    password:{
     type:"string",
     regex:/^([0-9]{6,12})$/,
     message:"Invalid password format"
    }
}

export default (props)=>{
    const {history}=props;
    const [formState,setFormState]=useState({
        valid:false,
        values:{},
        errors:{},
        touch:{}
    });

    useEffect(()=>{
        const error=utility.validator(schema,formState.values);
        setFormState(preState=>({
        ...preState,
        errors:error?error:{},
        valid:Object.keys(error).length>0?false:true,
        }))

    },[formState.values]);



    const onChangeHandler=(evt)=>{
        const {name,value}=evt.target;
        setFormState(preState=>({
            ...preState,
            values:{
                ...preState.values,
                [name]:value
            },
            touch:{
                ...preState.touch,
                [name]:true
            }      
        }))
    }

const onSubmit=()=>{
    const payload={
        ...formState.values
    }
    service.API_POST("auth/signin",payload).then((res)=>{
        if(res && res.data && res.data.success){
            setToken(res.data.token);
        }
        history.push('/home');
        // console.log("res : ",res)
    }).catch((err)=>{
        console.log("Err",err)
    })
}

const hasError=(field)=>{
    return field && formState.touch[field]==true && formState.errors[field];

}
return <><div class="container p-5">
<div className="form-group">
  <label htmlFor="exampleInputEmail1">Email address</label>
  <input type="email" name="username" onChange={(evt)=>onChangeHandler(evt)} className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
  {hasError("username")?<small id="emailHelp" className="form-text text-muted error">{formState.errors && formState.errors['username']}</small>:null}
</div>
<div className="form-group">
  <label htmlFor="exampleInputPassword1">Password</label>
  <input type="password" name="password" onChange={(evt)=>onChangeHandler(evt)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  {hasError("password")?<small className="form-text text-muted error">{formState.errors && formState.errors['password']}</small>:null}

</div>
<button disabled={!formState.valid} onClick={()=>onSubmit()} className="btn btn-primary">Submit</button>
</div>
</>
}