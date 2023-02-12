const dotenv=require('dotenv')

const express = require('express');
const app = express();

dotenv.config({path:'./config.env'})

require('./db/conn.js')

const PORT=process.env.PORT




const middleware=(req,res,next)=>{
    console.log("middleware fuction");
    next();
}



app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about',middleware , (req, res) => {
  res.send('My about page!');
});
app.get('/contact', (req, res) => {
  res.send('My contact page');
});
app.get('/signin', (req, res) => {
  res.send('My signin page');
});

app.listen(PORT, () => {
  console.log(`Server listening  on port ${PORT}`);
}) 