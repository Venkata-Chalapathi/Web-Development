
const figlet = require("figlet");

figlet ("Wenktt_" , function (err, data) {
    if(err){
        console.log(err);

    }
    console.log(data);
})