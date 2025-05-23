// let btn1 = document.querySelector('#btn1');
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a)
// }

// let Box = document.querySelector("#Box");
// Box.onmouseover =  () => {
//     console.log('You are inside div');
// }

// Element Object
// let btn1 = document.querySelector('#btn1');
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX)
//     console.log(e.clientY);
// }

// Event Listener

// Add Event Listener
// let btn1 = document.querySelector('#btn1');
// btn1.addEventListener("click", () => {
//     console.log("Button Was Clicked");
// });

// let btn1 = document.querySelector('#btn1');
// btn1.addEventListener("click", (evt) => {
//     console.log("Button Was Clicked");
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// });

// Defining The Function First Then Calling It
// let btn1 = document.querySelector('#btn1');
// let myFunction = (evt) => {
//     console.log("Button Was Clicked");
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
// }
// btn1.addEventListener("click", myFunction);

// Remove Event Listener
// let btn1 = document.querySelector('#btn1');
// btn1.addEventListener("click", () => {
//     console.log("Button was clicked - Handler 01")
// });

// btn1.addEventListener("click", () => {
//     console.log("Button was clicked - Handler 02")
// });
// const myFunction = () => {
//     console.log("Button was clicked - Handler 03")
// };

// btn1.addEventListener("click", myFunction) ;

// btn1.addEventListener("click", () => {
//     console.log("Button was clicked - Handler 04")
// });

// btn1.removeEventListener("click", myFunction); // The Callback Reference Should be same to Remove

// let btn = document.querySelector('#btn');
// let body = document.querySelector("body");

// let mode = () => {
//     body.style.backgroundColor = "black"
// }
// btn.addEventListener("click", mode);

// Qs. Create a toggle button that change the screen to dark-mode when clicked and light-mode when clicked again.
// let modeBtn = document.querySelector("#mode");
// let currMode = "light";
// modeBtn.addEventListener("click", () => {
//     if (currMode === "light"){
//     currMode = "dark";
//     document.querySelector("body").style.backgroundColor = "black"
//     }
//     else{
//         currMode = "light";
//     document.querySelector("body").style.backgroundColor = "white"
//     }
//     console.log(currMode)
// });

// OR

// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body")
// let currMode = "light";
// modeBtn.addEventListener("click", () => {
//     if (currMode === "light"){
//     currMode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");

//     }
//     else{
//         currMode = "light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//     }
//     console.log(currMode)
// });

// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light";
// modeBtn.addEventListener("click", () =>
// {
//     if (currMode === "light"){
//         currMode = "dark";
//         body.style.backgroundColor = "black";
//     }
//     else{
//         currMode = "light";
//         body.style.backgroundColor = "white";

//     }
// }) 

// let box = document.querySelector(".box");
// let body = document.querySelector("body");
// let currMode = "light"
// box.addEventListener("mouseover", () => {
//     if (currMode === "light"){
//         currMode = "dark";
//         body.style.backgroundColor = "black";
//     }
//     else{
//         currMode = "light";
//         body.style.backgroundColor = "white";
//     }
// })

