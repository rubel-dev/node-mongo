const express = require('express');
const app = express();
//  const rootCall =(req,res)=>res.send('Thank you very much')
 

app.get('/',(req,res)=>{
    res.send('i know how to open node')
})
app.listen(7000,()=> console.log("Listioning to port 7000"))
