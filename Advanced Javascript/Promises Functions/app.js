// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color; 
//             resolve("Color has Changed");      // CALL BACK NESTING => CALL BACK HELL
//         }, delay);
//     })
// }

// changeColor("red", 1000)
// .then(() => {
//     console.log("Red completed");
//     return changeColor("orange", 1000);
// })
// .then(()=>{
//     console.log("orange completed");
//     return changeColor("pink", 1000);
// })
// .then(()=>{
//     console.log("pink completed");
// })
// .catch(()=>{
//     console.log("Rejected");
// })



// async function greet() {
//     // throw "weak connection";
//     return "connected";  
// }

// greet()
// .then((result) => {                                      // ASYNC FUNCTION
//     console.log("Promise was resolved");
//     console.log("Result was :",result);
// })
// .catch((err) => {
//     console.log("Promise was Rejected");
// })


// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }
                                                            // AWAIT FUNCTION
// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }
// demo();



let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if(num > 3){
                reject("Promise Rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("Color has Changed");               // AWAIT AND ASYNC FUNC
        }, delay);
    })
}

async function demo() {
    try{
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("pink", 1000);
        await changeColor("yellow", 1000);
        changeColor("blue", 1000);
    } catch (err){
        console.log("Error Caught");
        console.log(err);
    }

    let a = 2;
    console.log(a);
    console.log("New Number :", a + 8);
}
demo();

// changeColor("red", 1000)
// .then(() => {
//     console.log("Red completed");
//     return changeColor("orange", 1000);
// })
// .then(()=>{
//     console.log("orange completed");
//     return changeColor("pink", 1000);
// })
// .then(()=>{
//     console.log("pink completed");
// })
// .catch(()=>{
//     console.log("Rejected");
// })
