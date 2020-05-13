import React,{useState} from 'react';

// export default props=><div>Functional component</div>;

// export default (props)=><div>Functional component</div>;

export default (props)=>{
    
    const [formState,setFormState]=useState({
        name:"ABC"
    });
    return <div style={{padding:'10px',border:'1px'}}>   
    <h2>{props.appName}</h2>
    <div>Functional component</div>
    <h2>Name : {formState.name}</h2>
    <button onClick={()=>setFormState({name:"Mayank"})}>Click</button>

    </div>
}