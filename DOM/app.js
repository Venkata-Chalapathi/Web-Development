// let smallImgs = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImgs.length; i++){
//     smallImgs[i].src = "assets/spiderman_img.png";
//     console.log(`img of ${i} is changed`);
// }

// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelectorAll(".oldImg"));

// console.dir(document.querySelectorAll("div a"));

// let para = document.querySelector('p');
// console.dir(para); 

// let para = document.querySelector("p");
// para.innerHTML = "Html";
// para.innerHTML = "<u>Html</u>";

// let img = document.querySelector('img');
// console.log(img);
// console.log(img.getAttribute('id'));
// console.log(img.setAttribute('id','spiderman'));

// let heading = document.querySelector('h1')
// heading.style
// heading.style.color = 'purple'
// heading.style.backgroundColor = 'black'

// let links = document.querySelectorAll(".box a");
// for(let i=0; i<links.length; i++){
//     links[i].style.color = "green";
// }

// let para1 = document.createElement('para1');
// para1.innerText = "I am Red";
// document.querySelector('body').append(para1);

// para1.classList.add('red');

// let h3 = document.createElement('h3');
// h3.innerText = "I am Heading";
// document.querySelector('body').append(h3);

// h3.classList.add('blue');

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para2 = document.createElement('para2');

// h1.innerText = "I'm in a DIV";
// para2.innerText = "Me Tooooo...";

// div.append(h1);
// div.append(para2);
// div.classList.add('box');
// document.querySelector('body').append(div);

// let btn = document.querySelector("button");

// btn.onclick = function() {
//     console.log("Button is Clicked..");
// }

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function() {
//         console.log("Button is Hovered..");
//     }
// }   

// function sayHello() {
//     alert("Hello Button is clicked");
// }

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     btn.addEventListener("click" , sayHello);
//     btn.addEventListener("click" , sayName);
//     btn.addEventListener("dblclick" , function(){
//         console.log("You Double Clicked");
//     });
// }

// function sayHello() {
//     alert("Hello Button is clicked");
// }

// function sayName() {
//     alert("Hello G Venkata chalapathi");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomcol = genRandoncol();
//     h3.innerText = randomcol;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomcol;
// })

// function genRandoncol() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }


// let para = document.querySelector("p");

// para.addEventListener("click", function() {
//     console.log("Parah is Clicked..");
// });

// let box = document.querySelector(".box");

// box.addEventListener("mouseenter", function() {
//     console.log("Box is hovered..");
// });

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btn = document.querySelector("button");

// function changeColor() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "violet";
// }

// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// btn.addEventListener("click", changeColor);

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//     console.log(event.key);
//     console.log(event.code);
//     console.log("Key was Pressed..");
// })

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//     console.log("Code = ",event.code);
//     if(event.code == "ArrowUp"){
//         console.log("Moves Forward");
//     }else if(event.code == "ArrowDown"){
//         console.log("Moves Downward");
//     }else if(event.code == "ArrowLeft"){
//         console.log("Moves Left");
//     }else if(event.code == "ArrowRight"){
//         console.log("Moves Right");
//     }
// })

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("Form is submited");
// })


// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log("Username U Entered :",user.value);
//     console.log("Password U Entered :",pass.value);
    
// })


// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();        
// })

// let user = document.querySelector("#user");

// user.addEventListener("change", function() {
//     console.log("Change Event");
//     console.log(user.value);
// })

// user.addEventListener("input", function() {
//     console.log("Input Event");
//     console.log(user.value);
// })


// let inp = document.querySelector("input");
// let p = document.querySelector("p");

// inp.addEventListener("input", function() {
//     console.log(inp.value);
//     p.innerText = inp.value;
// })

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event) {
//     this.style.backgroundColor = "blue";
//     console.log("Color is changed to blue");
// })

// let inp = document.querySelector("input");
// let h2 = document.querySelector("h2");

// inp.addEventListener("input", function() {
//     let value = this.value.replace(/[^a-zA-Z ]/g, '');
//     this.value = value;
//     h2.innerText = this.value;
// })


// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lists = document.querySelectorAll("li");

// div.addEventListener("click", function() {
//     console.log("DIV WAS CLICKED")
// })

// ul.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("UL WAS CLICKED")
// })

// for(list of lists){
//     list.addEventListener("click", function(event) {
//         event.stopPropagation();
//         console.log("LIST WAS CLICKED")
//     })
// }

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Task is Deleted");
    }
})