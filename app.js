const express=require('express');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('node api');
})

const port=process.env.PORT || 5000;

app.listen(5000,console.log(`server is listening on port ${port}...`));