
import { useState} from 'react';
import './App.css';
// import {res} from './utils/services'
import axios from "axios"

function App() {
const [resp, setresp] = useState('')
const [hash, sethash] = useState('')
const [tx, setTx] = useState({})
const apiURL = "http://localhost:5000"
 function getBlock(){
   axios.get(`${apiURL}/block`).then((response) => {setresp(response.data)})
} 
function getTransactions(){
  axios.post(`${apiURL}/information`,{
    txhash: hash,
  }).then((response) => {setTx(response.data)})
} 
 
  return (
    <div className="App">
      <header className="App-header">
      To get the current block height: <button onClick={()=>{getBlock()}}>Click</button><h1>{resp}</h1>
      <label>
    Enter the transaction Hash:
      <input type="text"  onChange={(evt) => { sethash(evt.target.value); }} name="transactionHash" />
      </label>
      <button onClick={()=>{getTransactions()}}>Click here to get the Transaction details</button>
      <p>BlockHash: {tx.blockHash}</p>
      <p>BlockNumber: {tx.blockNumber}</p>
      <p>CumulativeGasUsed: {tx.cumulativeGasUsed}</p>
      <p>From: {tx.from}</p>
      <p>To: {tx.to}</p>
      <p>TransactionIndex: {tx.transactionIndex}</p>
      </header> 
    </div>
  );
}

export default App;
