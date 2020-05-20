//Node
/*
const http=require('http');
const app=(req,res)=>{
    res.write("<h1>hello world</h2>");
    res.end();
}

const server=http.createServer(app);
server.listen('8081',()=>{
    console.log("Listen")
});

console.log("Server is running on : 8081");
*/

//Express

const expres=require('express');
const cors = require('cors')
const app=expres();
const {singIn} =require('./Controller/Auth');
const {details} =require('./Controller/Home');
const bodyParser =require('body-parser')


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
// app.use('/auth',singIn);
app.post('/auth',singIn);
app.get('/home',details);
app.use('/',(req,res)=>{
    res.json({
        success:true,
        name:"ABC",
        token:"875jrhhrhkknfnfnv87"
    });
});

app.listen(8082);
console.log("Server is running on : 8082");

//node filename // for server run.
