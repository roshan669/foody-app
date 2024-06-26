const express=require('express');
const mongoDB=require('./db');



mongoDB();

const app=express();
const port=5000;

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    next();
})

app.get('/',(req,res)=>{
    res.send('Hello Roshan')
});

app.use(express.json());
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));

app.listen(port,()=>{
    console.log(`app listning on port ${port}`)
});

