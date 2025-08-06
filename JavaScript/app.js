// console.log("Roar Of Success")
// console.log("Lets Practice Js")
// let a = 10;
// let b = 20;
// let sum = a + b;
// console.log("Sum of two numbers :", sum)

// let pencilPrice = 15;
// let eraserPrice = 5;
// // console.log("The total cost is",pencilPrice + eraserPrice ,"Rupees...")
// // let totalCost = "The total cost is " + (pencilPrice + eraserPrice) + " Rupees...";
// let totalCost = `The Total Price is ${pencilPrice + eraserPrice} Rupees..`;
// console.log(totalCost)

// let string = "ampl";

// let n = string.length;

// if(string[0] === 'a' && n > 3){
//     console.log("Good String");
// }else{
//     console.log("Bad String");
// }

// alert("Something is wrong")

// let firstNmame = prompt("Enter your firstName :");
// let lastname = prompt("Enter your lastName :");
// console.log("welcome" ,firstNmame,"",lastname,"...");

// let msg = "     hello       ";
// let msgTrimmed = msg.trim();
// console.log(msgTrimmed)
// console.log("Forward");
// let n = 15;
// for(let i=1; i<=n; i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }
// console.log("Backward");
// for(let i=n; i>=1; i--){
//     if(i%2!=0){
//         console.log(i);
//     }
// }



// let n = prompt("Enter any number");

// for(let i = 1; i<=10; i++){
//     let mulval = n * i;
//     console.log(`${n} x ${i} = ${mulval}`);
// }


// To do App

// let todo = [];

// let req = prompt("Please enter your request ");

// while(true){

//     if(req == "add"){
//         let task = prompt("Enter task you want to add ");
//         todo.push(task);
//         console.log("Task is added")
//     }
//     else if(req == "list"){
//         console.log("-----------");
//         for(let i = 0; i<todo.length; i++){
//             console.log(i,todo[i]);
//         }
//         console.log("-----------");
//     }else if(req == "delete"){
//         let index = prompt("Enter the index of task you want to delete");
//         todo.splice(index,1);
//         console.log("Task is Deleted");
//     }else if(req == "quit"){
//         console.log("Quitting the app");
//         break;
//     }

//     req = prompt("Please enter your request ");

// }

// let arr = [1,2,3,4,5,6,2,3];
// let arr2 = [];

// let num = prompt("Enter number ");

// for(let i=0; i<arr.length; i++){
//     if(arr[i] != num){
//         arr2.push(arr[i]);
//     }
// }

// console.log(arr2)

// let num = 287152;
// let count = 0;

// let max = prompt("Enter max number");

// let random = Math.floor( Math.random() * max ) + 1;
// let guess = prompt("Guess a Number");

// while(true){
//     if(guess == "quit"){
//         console.log("User Quitted");
//         break;
//     }else if(guess == random){

//         console.log("Congrats!! You guessed correct number", random);
//         break;
//     }else if(guess < random){
//         guess = prompt("Your guess was too small Please try Again!!")
//     }else if(guess > random){
//         guess = prompt("Your guess was too large Please try Again!!")
//     }
// }


// function printName(){
//     console.log("G Venkata Chalapathi");
// }
// printName();

// function printNumbers(){
//     let n = 5;
//     for(let i=1; i<=n; i++)
//     {
//         console.log(i)
//     }
// }
// printNumbers();

// function rollDice(){
//     let value = Math.floor(Math.random() * 6) + 1;
//     console.log(value);
// }

// rollDice(); 

// functions with arguments

// function sum(a,b){
//      console.log(a+b);
// }
// sum(5,9);

// function average(a,b,c){
//     let avg = (a + b + c)/3;
//     console.log(avg)
// }
// average(1,2,3);

// function multplicationTable(n){
//     for(let i=1; i<=10; i++)
//     {
//         let mul = n * i;
//         console.log(`${n} x ${i} = ${mul}`)
//     }
// }
// multplicationTable(5)

// function sum(a,b){
//     return a + b;
// }

// let sol = sum(sum(3,4),3);
// console.log(sol)

// function sumNatural(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++)
//     {
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log(sumNatural(5));

// arr = ["Hello","world"];

// function stringsConcat(arr){
//     let n = arr.length;
//     let concatstring = "";
//     for(let i=0; i<n; i++){
//         concatstring += arr[i];
//     }
//     return concatstring;        
// }
// console.log(stringsConcat(arr));

// let sum = 54; // Gl0bal scope

// function calcSum(a,b){
//     let sum = a + b; // Functi0n scope
//     console.log(sum);
// }
// calcSum(1,7);
// console.log(sum)


// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         // let a = 10;
//         console.log(x);
//         console.log(y);
//     }
//     // console.log(a)
//     innerFunc();
// }
// outerFunc();

// let greet = "hello"; // Global Scope

// function changeGreet(){
//     let greet = "namaste"; // Functional scope
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet); // lexical scope
//     }
//     innerGreet();
// }
// console.log(greet);
// changeGreet();

// Function Expressions

// let name = "chalapathy";
// let sum = function(a,b){
//     return a + b;
// }
// console.log(sum(2,9))

// function multipleGreet(func, count) {  // Higher order function
//     for(let i=1; i<=count; i++) {
//         func();
//     }
// }

// let greet = function() {
//     console.log("Hello");
// }

// multipleGreet(greet , 10);

// let request = "even";

// function oddEvenRequest(request) {
//     if(request == "odd"){
//         return function(n) {
//             console.log(!(n%2 == 0));
//         }
//     }else if(request == "even"){
//         return function(n)  {
//             console.log(n%2 == 0);
//         } 
//     }else{
//         console.log("Wrong request");
//     } 
// }

// const calc = {
//     num: 55,
//     add: function(a,b) {
//         return a + b; 
//     },
//     sub: function(a,b) {
//         return a - b; 
//     }, 
//     mul: function(a,b) {
//         return a * b; 
//     }
// }


// function extractUniqueCharacters(str){
//     let n = str.length;
//     let ans = "";
//     for(let i=0; i<n; i++){
//         let currentChar = str[i];
//         if(ans.indexOf(currentChar) == -1){
//             ans += str[i];
//         }
//     }
    

//     console.log(ans);
// }

// extractUniqueCharacters("abcdabcdefgggh");


// Write a JavaScript function that accepts a listof countrynames as input and returns the 
// longest country name as output.
// Example:country=["Australia","Germany","UnitedStatesofAmerica"]
// output:"UnitedStatesofAmerica

// function longest_country(arr){
//     let n = arr.length;
//     let max = arr[0];
//     for(let i=1; i<n; i++){
//         if(max.length < arr[i].length){
//             max = arr[i];
//         }

//     }
//     console.log(max);
// }

// longest_country(["Australia","Germany","UnitedStatesofAmerica","goodserde","poetebklsjghebdmksjdbdndj","pool"]);

// function countVowelsinString(str){
//     let n = str.length;
//     str.toLowerCase();
//     let count = 0;
//     for(let i=0; i<n; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o'|| str[i] == 'u'){
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowelsinString("apnacollege");

// function generateRandomNum(start,end){
//     let diff = end - start;
//     let rand = Math.floor(Math.random() * diff) + start;
//     return rand;
// }
// console.log(generateRandomNum(100,200));

// Write a JavaScript function that returns arrayelements larger than a number ?

// function arrayelementslargerThanNum(arr,num){
//     let max = num;
//     let n = arr.length;
//     let ans = [];
//     for(let i=0; i<n ;i++){
//         if(max < arr[i]){
//             ans.push(arr[i]);
//         }
//     }
//     console.log(ans);
// }
// arrayelementslargerThanNum([8,9,10,1,2,3,4,5,6,7],5);

// This keywords 

// const student = {
//     name: "Chalapathy",
//     age: 20,
//     eng: 89,
//     math: 96,
//     soc: 92,
//     getAvg(){
//         console.log(this)
//         let avg = (this.eng + this.math + this.soc)/3;
//         console.log(avg);
//     }
// }

// try and catch

// try{
//     console.log(a)
// }catch(err){
//     console.log("Variable is not defined!!!");
//     console.log(err);
// }

// Miscellanneous Topics
// 1 Arrow functions

// const pow = (a,b) => {
//     console.log(a**b);
// };

// Implicit return in Arrow Function

// const mul = (a,b) => (
//     a*b
// );

// set time out

// console.log("Hi There");

// setTimeout( () =>{
//     console.log("Apna College");
// } , 4000)

// console.log("Welcome to");

// set Interval

// console.log("Hi There");

// let id = setInterval(() =>{
//         console.log("Apna College");
//      } , 2000);

// console.log(id);

// this with arrow function 

// const student = {
//     name: "Chalapathy",
//     marks: 95,
//     prop: this,
//     getName: function () {
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1: function () {
//         setTimeout(() => {
//             console.log(this); // student
//         },2000);
//     },
//     getInfo2: function () {
//         setTimeout(function() {
//             console.log(this); // window
//         },2000);
//     },
// }

// practice QS

// const square = (n) => (
//     n**2
// );

// let id = setInterval( () => {
//     console.log("Hello world");
// } ,2000);
// console.log(id);

// setTimeout( () => {
//     clearInterval(id);
//     console.log("Interval is stopped!!")
// } ,10000);

// Assignment 
// 1 Write an arrowfunction named arrayAverage that accepts an array of numbers and returns the average of those numbers ?

// let arr = [1,2,3,4,5]

// const arrayAverage = (arr) => {
//     let n = arr.length;
//     let sum = 0;
//     for(let i=0; i<n; i++){
//         sum += arr[i];
//     }
//     let avg = sum / n;
//     console.log(avg)
// };

// 2 Write an arrowfunction named isEven() that takes a singlenumber as argument and returns if it is even or not ?

// const isEven = (num) => {
//     if(num%2 == 0){
//         console.log("Even number");
//     } else if(num%2 != 0){
//         console.log("Odd number");
//     }else {
//         console.log("Not Valid");
//     }
// };

// What is the Output for this ?

// const object = {
//     message:'Hello,World!',
    
//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000);

// letlength = 4;
// function callback(){
//     console.log(this.length);
    
// }constobject={
//     length:5,
//     method(callback){
//         callback();
//     },
// };
// object.method(callback,1,2);

 // Array Methods

 // 1 forEach method

//  let arr = [1,2,3,4,5];

//  let print = function(el) {
//     console.log(el);
//  };

//  arr.forEach(print);

// arr.forEach((el) =>{
//     console.log(el);
// })

//  arr.forEach(function(el) {
//     console.log(el);
//  }); 

// let arr = [
//     {
//         name: "Chala",
//         marks: 87
//     },
//     {
//         name: "pavan",
//         marks: 95
//     },
//     {
//         name: "pitti",
//         marks: 92
//     }
// ];

// arr.forEach((student) => {
//     console .log(student.marks);
// });

// 2 Map

// let num = [1,2,3,4];

// let double = num.map((el) => {
//     return el * el;
// });

// let students = [
//     {
//         name: "Chala",
//         marks: 87
//     },
//     {
//         name: "pavan",
//         marks: 95
//     },
//     {
//         name: "pitti",
//         marks: 92
//     }
// ];

// let gpa =students.map((el) => {
//     return el.marks / 10;
// });

// 3 Filter

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// let even = array.filter((el) => {
//     return el % 2 == 0;
// });

// 4 Every

// [2,4,6].every((el) =>
//     el%2 == 0
// );

// 5 Some

// [2,4,6,3].some((el) =>
//     el%2 == 0
// );

// 6 Reduce

// let arr = [1,2,3,4,5];

// let finVal = arr.reduce((res,el) => {
//     console.log(res);
//     return res + el
// });
// console.log(finVal);

// practice Qs = Max in an array

// let arr = [1,2,31,4,5];

// let maxNum = arr.reduce((max , el) => {
//     if(max < el){
//         return el;
//     }else{
//         return max;
//     }
// });

// console.log(maxNum);

// practice Qs 2
// check if any num in array are multiples of 10 or not ?

// let ans = [10,20,30,90].every((el) => (el % 10 == 0));

// console.log(ans);

// Prac Qs 3
// Min num in an array

// let arr = [1,2,3.5,8,-3,6];

// let minNum = arr.reduce((min , el) => {
//     if(el < min){
//         return el;
//     }else{
//         return min;
//     }
// });
// console.log(minNum);

// default Parameters

// function sum(a,b = 4) {
//     return a + b;
// }
// console.log(sum(1));  // sum(1,9)

//  SPREAD

// let arr = [1,3,6,9,7,-9,5,14,1,2,4,1,22,4,1,1,2,4,4];
// let min = Math.min(...arr);
// console.log(min);

// let str = "apnacollege";
// console.log(...str);.

//  SPREAD WITH ARRAY LITERALS

// let  arr = [1,2,3,4,5];
// let newArray = [...arr];
// console.log(newArray);

// let str = "apnacollege";
// console.log(...str);

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let newList = [...odd, ...even];
// console.log(newList);

// PREAD WITH OBJECT LITERALS

// const data = {
//     email: "chala@gmail.com",
//     password: "pool"
// };

// const dataCpy = {...data , id : 7};
// console.log(dataCpy);


// let arr = [1,2,3,4,5]; // val
// let obj1 = {...arr};
// let obj2 = {..."hello"};
// console.log(obj1);
// console.log(obj2);

// REST

// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
// }

// function sum(...args){
//     return args.reduce((add,el) => add+el);
// };

// function min(msg,...args){
//     console.log(msg);
//     return args.reduce((minEl,el) => {
//         if(minEl>el){
//             return el;
//         }else{
//             return minEl;
//         }
//     });
// };

// DESTRUCTURING

// let names = ["chala","nani","yash","arif","subhan"];
// let winner = names[0];
// let runnerUp = names[1];
// let Others = names[2];

// let [winner, runnerUp, ...others] = names;

// DESTRUCTURING FOR OBJECTS

// const student= {
//     name: "chala",
//     class: 12,
//     age: 18,
//     subjets: ["maths","phy","chem"],
//     username: "chala2003",
//     password: "chalapathy123",
//     city: "Anantapur"
// };

// const { username: user, password: secret,city = "chennai"} = student; // username not work || user



// const student = {
//     chala : {
//         name: "chalapathi",
//         marks: 94
//     },
//     ram : {
//         name: "rama",
//         marks: 94
//     }
// };


// const student = [
//     {
//         name: "chalapathi",
//         marks: 94
//     },
//     {
//         name: "rama",
//         marks: 94
//     }
// ];

// function print(){
//     for(let i = 1; i <= 5; i++){
//         console.log(i);
//     }
// }

// function printSUm(a){
//     for(let i = 1; i <= 10; i++){
//         let mulVal = a * i;
//         console.log(`${a} x ${i} = ${mulVal}`);
//     }
// }

// printSUm(8)
