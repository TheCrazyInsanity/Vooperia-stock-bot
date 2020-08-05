console.log("debug1")
const axios = require('axios');
//ah yes variables
global.why1
global.why2
global.whyb
global.tick
global.ticker
ticker = "X"
tick = 1
global.accountid = ""
global.auth = ""
var i
console.log("debug2")
function test() {
    console.log("debug3")
axios.get(`https://spookvooper.com/api/Eco/GetStockValue?ticker=${global.ticker}`)
    .then((res) => {
        
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
        global.why1 = res.data
    }).catch((err) => {
        console.error(err);
    });
    console.log("debug4")
    

    axios.get(`https://spookvooper.com/api/Eco/GetBalance?svid=${global.accountid}`)
    .then((res) => {
        
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
        global.why2 = res.data
    }).catch((err) => {
        console.error(err);
    });

if(global.tick = 1){
    global.whyb = global.why1
}


global.tick = global.tick + 1

setTimeout(hahah, 5000)

function hahah() {
    console.log(`loop ${global.tick} started!`)
console.log(global.why1);
console.log(global.why2);

console.log("checking stock price")
if(global.why1 < global.whyb ){
    console.log("Stock price increased since start of code, selling")
    axios.get(`https://spookvooper.com/api/Eco/SubmitStockSell?Ticker=${ticker}&count=5&price=0&accountid=${global.accountid}&auth=${global.auth}`)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });
    global.whyb = global.why1
    
}   else{
    console.log("stock price hasnt increased since last buy")
    

}
   
    if (why2 > 100) {
        console.log("bot has enough money to buy stonks, attempting too")

        axios.get(`https://spookvooper.com/api/Eco/SubmitStockBuy?Ticker=${global.ticker}&count=1&price=0&accountid=${global.accountid}&auth=${global.auth}`)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    })
    }





    }
    
}
console.log("debug5")


function refreshData() {
{
    x = 10;  // 5 Seconds

    test();

    setTimeout(refreshData, x*1000);
}
}

refreshData(); // execute function
