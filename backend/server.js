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
const app=expres();

const {singIn} =require('./Controller/Auth');

app.use('/auth',singIn);
app.use('/',(req,res)=>{
    res.end("Hello world");
});

app.listen(8082);
console.log("Server is running on : 8082");

//node filename // for server run.
