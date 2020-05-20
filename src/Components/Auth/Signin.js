
import React,{useEffect,useState} from 'react';
import * as utility from './../../Utility';

import * as service from './../../Services';

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
    service.API_POST("auth",payload).then((res)=>{
        debugger;
        history.push('/home');
    console.log("res : ",res)
    }).catch((err)=>{

        console.log("Err",err)
    })
}

const hasError=(field)=>{
    return field && formState.touch[field]==true && formState.errors[field];

}


return <div style={{padding:20,margin:0,border:'1px',borderColor:'#ddd'}}>
<div style={{paddingTop:"10px",paddingLeft:"10px"}}>
<label style={{paddingRight:'10px'}}>Username</label>
<input type="text" name="username" onChange={(evt)=>onChangeHandler(evt)}></input>
<div>
{hasError("username")?<label style={{color:'red'}}>{formState.errors && formState.errors['username']}</label>:null}
</div>
</div>
<div style={{paddingTop:"10px",paddingLeft:"10px"}}>
<label style={{paddingRight:'10px'}}>Password</label>
<input type="password" name="password" onChange={(evt)=>onChangeHandler(evt)}></input>
<div>
{hasError("password")?<label style={{color:'red'}}>{formState.errors && formState.errors['password']}</label>:null}
</div>
</div>
<div style={{paddingTop:"10px",paddingLeft:"10px"}}>
<button disabled={!formState.valid} onClick={()=>onSubmit()}>Sign In</button>
</div>
</div>
}