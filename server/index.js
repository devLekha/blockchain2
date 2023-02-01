const express = require("express");
const cors = require('cors')
const app = express();

var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io/v3/1000bb39892247e68f442cbb06005948');
app.use(cors())
app.use(express.json())
 app.get("/block", async (req, res)=>{
    const blockDetails =await web3.eth.getBlockNumber();
    res.json(blockDetails)
})
app.post("/information", async (req, res)=>{
    const blockDetails =await web3.eth.getTransactionReceipt(req.body.txhash)
    res.json(blockDetails)
})
app.listen(5000, console.log("listening to port 5000"))
