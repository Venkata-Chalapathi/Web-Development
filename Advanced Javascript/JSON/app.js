// let jsonRes = '{"fact":"A cat can jump up to five times its own height in a single bound.","length":65}';

// let validRes = JSON.parse(jsonRes);

// console.log(validRes);
// console.log(validRes.fact);

// let student = {
//     name : "Chalapathy",
//     dept : "CSE" 
// }
// let studentRes = JSON.stringify(student);
// console.log(studentRes);


// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response) => {
//     console.log(response);
//     return response.json()
// })
// .then((data) => {
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((response) => {
//     return response.json()
// })
// .then((data2) => {
//     console.log(data2.lengthff );
// })
// .catch((err) => {
//     console.log("ERROR - ",err);
// })



// let url = "https://catfact.ninja/fact";

// async function demo() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);
//     } catch(err) {
//         console.log("ERROR - ",err);
//     }
// }
// demo();


// let url = "https://catfact.ninja/fact";

// async function demo() {
//     try{
//         let res = await axios.get(url);                  // AXIOMS
//         console.log(res.data);
//     } catch(err) {
//         console.log("ERROR - ",err);
//     }
// }
// demo();


// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await demo();
//     console.log(fact);
//     let p = document.querySelector(".result");
//     p.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";                  // AXIOMS EXAMPLE

// async function demo() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(err) {
//         console.log("ERROR - ",err);
//     }
// }
// demo();



// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     console.log(link);
//     let img = document.querySelector("img");
//     img.setAttribute("src", link);
    
// })

// let url = "https://dog.ceo/api/breeds/image/random";             // AXIOMS EXAMPLE DOG

// async function getImage() {
//     try{
//         let res = await axios.get(url);
//         return res.data.message;
//     } catch(err) {
//         console.log("ERROR - ",err);
//     }
// }
// getImage();


// let url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try{
//         const config = { headers : { Accept: "application/json" }};
//         let res = await axios.get(url, config);                      // HEADERS IN API REQ
//         console.log(res.data);
//     } catch(err) {
//         console.log("ERROR - ",err);
//     }
// }
// getJokes();



// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);
//     let colArr = await getColleges(country);
//     show(colArr);
// });

// function show(colArr) {
//     let list = document.querySelector("#list");
//     list.innerHtml = ""; 
//     for(college of colArr){
//         console.log(college.name);

//         let li = document.createElement("li");
//         li.innerText = college.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country) {
//     try {
//         let res = await axios.get(url + country);
//         return res.data;
//     }catch (err) {
//         console.log("ERR - ",err);
//         return [];
//     }
// }



let url = "http://universities.hipolabs.com/search?country=India&state-province=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;
    console.log("State:", state);
    let colArr = await getColleges(state);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerHTML = ""; 
    for(let college of colArr){
        console.log(college.name);

        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
}

async function getColleges(state) {
    try {
        let res = await axios.get(url + state);
        return res.data;
    } catch (err) {
        console.log("ERR - ", err);
        return [];
    }
}
