
// function savetodb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }
// savetodb("G Venkata Chalapathi", () =>{
//     console.log("Success : Your Data Was Saved");
//     savetodb("G Subhashini", () => {
//         console.log("Succes2 : Dta2 saved");
//     }, () => {
//         console.log("Failure2 : Data isn't saved");
//     })
// }, () => {
//     console.log("Failure : Weak Connection.. your data isn't saved ");
// });



// function savetodb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("Data is saved");
//         } else {
//             reject("Weak connection");
//         }
//     });
// }                
                                                           // PROMISES THEN AND CATCH
// let req = savetodb("Chalapathy"); // req = promise
// req.then( () => {
//     console.log("Promise was resolved");
//     console.log(req);
// })
// .catch(() => {
//     console.log("Problem was rejected");
//     console.log(req);
// })




// function savetodb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("Data is saved");
//         } else {
//             reject("Weak connection");
//         }
//     });
// }                
//                                                                // PROMISE CHAINING
// savetodb("Chalapathy") // req = promise
// .then( (result) => {
//     console.log("Data1 saved");
//     console.log(result);
//      return savetodb("Bot");
// })
// .then((result) => {
//     console.log("Data2 saved");
//     console.log(result);
//     return savetodb("Chal");
// })
// .then((result) => {
//     console.log("Data3  saved");
//     console.log(result);
// })
// .catch((error) => {
//     console.log("Problem was rejected");
//     console.log(error);
// })



// CALLBACK HELL TO PROMISES EXAMPLE

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color; 
            resolve("Color has Changed");      // CALL BACK NESTING => CALL BACK HELL
        }, delay);
    })
}

changeColor("red", 1000)
.then(() => {
    console.log("Red completed");
    return changeColor("orange", 1000);
})
.then(()=>{
    console.log("orange completed");
    return changeColor("pink", 1000);
})
.then(()=>{
    console.log("pink completed");
})
.catch(()=>{
    console.log("Rejected");
})