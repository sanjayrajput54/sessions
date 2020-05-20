//Login Page
//Validation
//Server API (Nodejs/Express);//express
//API Integration 
//Routing () //react-router-dom

//npm install --save bootstrap
//import 'bootstrap/dist/css/bootstrap.css';
//npm install --save node-sass
//// Override default variables before the import
// $body-bg: #000;
// Import Bootstrap and its default variables
// @import '~bootstrap/scss/bootstrap.scss';
// import './custom.scss';














/*const schema = {
    email: {
      presence: { allowEmpty: false, message: 'is required' },
      email: false,
      length: {
        maximum: 64
      }
    },
    password: {
      presence: { allowEmpty: false, message: 'is required' },
      length: {
        maximum: 128
      }
    }
  };
    const [formState, setFormState] = useState({
      isValid: false,
      values: {},
      touched: {},
      errors: {}
    });
    const handleChange = event => {
      //event.persist();
      //event.preventDefault();
  
      setFormState(formState => ({
        ...formState,
        values: {
          ...formState.values,
          [event.target.name]:
            event.target.type === 'checkbox'
              ? event.target.checked
              : event.target.value
        },
        touched: {
          ...formState.touched,
          [event.target.name]: true
        }
      }));
    };
  
      useEffect(() => {
      const errors = validate(formState.values, schema);
  
      setFormState(formState => ({
        ...formState,
        isValid: errors ? false : true,
        errors: errors || {}
      }));
    }, [formState.values]);
  
   const hasError = field =>
      formState.touched[field] && formState.errors[field] ? true : false;
  
  hasError('email') ? formState.errors.email[0] : null
*/  


/*
Basic Javascript
    1. function
    2. datatypes
    3. inheritance
    4. prototypes
ReactJS
    1. Component
    2. State & Props
    3. Functional/Class Component 
    4. HOC
    5. Routing
    6. Data flow (One way bindind)
    7. Valiadtion
    8. Event Handilng
Store (Redux,Flux);
      Actions
      Action Creator.
      Dispatch
      Connect
Middleware (Thunk/Saga)

let user ={};
let userOb=new Object();

//

// user.name="ABC";
//userOb.name="ABC";

// console.log(user)
// console.log("userOb",userOb)


let emp={
  name:"XYZ",
  mobile:"9569749674",
  getEmp:function(){
 
  return "Name : "+this.name+" Mobile"+this.mobile;
}
  
}

// emp.proto.getEmp=function(){
 
//   return "Name : "+this.name+" Mobile"+this.mobile;
// }

// console.log("Name ",emp);

// console.log("Name "+emp.getEmp());

function User(name,mobile){
  this.username=name;
  this.mobilenumber=mobile;
  
  
//   this.getEmp=function(){
//   return "Name : "+this.username+" Mobile  : "+this.mobilenumber;
// }
  
}


function Employee(name,mobile,salary){
  debugger;
  User.call(this,name,mobile);
  
  this.salary=salary;

  this.getSalary=function(){
  return "salary : "+this.salary;
}
  
    this.getEmp=function(){
      
    return "Name : "+this.username+" Mobile  : "+this.mobilenumber;
      
    }
}

// const user1= new User("Sanjay","475797459745");

const employee= new Employee("Sanjay","475797459745","1000000");



// console.log(employee.getEmp())

// console.log("Salary "+employee.getSalary())



// console.log("username",user1.username);


//call/apply



function TestCall(name,mobile,salary){

  console.log("Name"+name,"Mobile"+mobile,"Salary"+salary)
  
}

function TestApply(name,mobile,salary){
    console.log("Name"+name,"Mobile"+mobile,"Salary"+salary)

}


TestCall.call(null,"Abc","98977","090909097");

TestCall.apply(null,["Abc","98977","090909097"]);



//ES5


TestTwo();

function TestTwo(){
  
  
  
}

//ES6

Testthree()
const Testthree=()=>{
  
  
  
}


*/



















