import React,{Component} from 'react';
//connect
// Class/stateful component
// export default class ClassComponent extends Component{

export default class ClassComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"ABC",
            mobile:"89797979797"
        }
    }

    onClickHandler(val){
        this.setState({
            name:val
        })
    }

    onChangeHandler(evt){
        // const abc={name:"ABC",mob:"94975397"}
        // const {name,mob}=abc;
        const {value,name,type,checked}=evt.target;
        if(type==="checkbox"){
            this.setState({
                [name]:checked
            })
        }else{
            this.setState({
                [name]:value
            })
        }
    }

    render(){
        return <div style={{padding:'10px',border:'1px'}}>
        <h2>{this.props.appName}</h2>
        <h2>ClassComponent</h2>
            Name: {this.state.name}
            <br/>
            Mobile: {this.state.mobile}
        <br/>
        <input name="fristname" type="text" onChange={(e)=>this.onChangeHandler(e)}  />
        <input name="lastname" type="text" onChange={(e)=>this.onChangeHandler(e)}  />
        <p>Please select your gender:</p>
        <input type="radio" id="male" name="gender" value="male" onChange={(e)=>this.onChangeHandler(e)}/>
        <label for="male">Male</label><br/>
        <input type="radio" id="female" name="gender" value="female" onChange={(e)=>this.onChangeHandler(e)}/>
        <label for="female">Female</label><br/>
        <input type="radio" id="other" name="gender" value="other" onChange={(e)=>this.onChangeHandler(e)}/>
        <label for="other">Other</label>
        <br/>

        <button onClick={()=>this.onClickHandler("Mayank")}>Click</button>

        <p>State:  {JSON.stringify(this.state)}</p>
        </div>
    }
}

// export default ClassComponent;

