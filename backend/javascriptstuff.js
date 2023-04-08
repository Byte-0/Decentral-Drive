var fs = require('fs')
var Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

abi = JSON.parse(fs.readFileSync('deris_sol_Deris.abi'));

contract = new web3.eth.Contract(abi);
contract.options.address = "0x30F635e10cD5BCDb6774E57e363c206490446947";

contract.methods.driveRequest().estimateGas({from: '0xD01e67609fC9DC2bAf85c33F376E10189efAa788'}).then(function(gasAmount){
    console.log(gasAmount)
    contract.methods.driveRequest().send({from: "0xD01e67609fC9DC2bAf85c33F376E10189efAa788", gas: gasAmount}).then(function(value) {
        console.log(value)
        })
    })


contract.methods.rideRequest("10,-11","-11,10",10).estimateGas({from: '0xf00660Eec668cb99A8967fFE0c25729B5502D250'}).then(function(gasAmount){
    console.log(gasAmount)
    contract.methods.rideRequest("10,-11","-11,10",10).send({from: "0xf00660Eec668cb99A8967fFE0c25729B5502D250", gas: gasAmount}).then(function(value) {
        console.log(value)
        })
    })

contract.methods.getWaitingRiders().estimateGas({from: '0xD01e67609fC9DC2bAf85c33F376E10189efAa788'}).then(function(gasAmount){
    console.log(gasAmount)
    contract.methods.getWaitingRiders().send({from: "0xD01e67609fC9DC2bAf85c33F376E10189efAa788", gas: gasAmount}).then(function(value) {
        console.log(value.events.RiderDetails.returnValues)
        })
    })

contract.methods.users("0x35AEf9Bb347a4AceFfc54C639aa26DA81e57468f").call({from: '0x35AEf9Bb347a4AceFfc54C639aa26DA81e57468f'}).then(function(result){
    console.log(result)
    })

contract.methods.userList(0).call({from: '0xf00660Eec668cb99A8967fFE0c25729B5502D250'}).then(function(result){
    console.log(result)
    })

contract.methods.driveRequest().estimateGas({from: '0xf00660Eec668cb99A8967fFE0c25729B5502D250'}).then(function(gasAmount){
    console.log(gasAmount)
    })

contract.methods.getGas().call().then((f) => {
  console.log(f)
 })




web3.eth.getAccounts().then((f) => {
    for(var i=0; i< f.length;i++){
        web3.eth.getBalance(f[i]).then((g)=>{
            console.log(g,web3.utils.fromWei(g, 'ether'));
        });
    }
});

contract.RiderDetails().watch(function(error, result){
    if (!error)
    {
        console.log(result)
    } 
    else {
        console.log(error);
    }
}

)

