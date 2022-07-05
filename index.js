const https = require('http')

const hostname = '0.0.0.0';
const port = 61354;

const server = https.createServer((req,res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Zeet Node');;
})


const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/",(req,res) => {res.download("./v.png")})
app.listen(4000);
server.listen(port,hostname,() =>{
    console.log('Server running at https://${hostname}:${port}')
});