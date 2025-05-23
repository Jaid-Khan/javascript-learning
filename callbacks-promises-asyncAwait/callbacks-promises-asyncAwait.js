// Synchronous javacsript - means the code runs in particular sequence of instructons given in program. 
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");
// console.log("five");

// Asynchronous javacsript - Due to Synchronous programming sometimes important instructions get blocked due to previous instruction, which cause a de;au in UI. Asynchronaus code execution allows to execute next instruction immediately and doesn't block the flow.
// console.log("one");
// console.log("two");
// console.log("three");
// setTimeout(function hello(){
//     console.log("Hello");
// }, 2000);
// console.log("four");
// console.log("five");
// console.log("six");

// Callbacks 
// function sum (a, b){
//     console.log(a + b);
// }

// function subs(a, b){
//     console.log(a - b);
// }

// function calculator(a, b, sumCallBack){
//     sumCallBack (a, b);
// };

// calculator(5, 3, sum);
// calculator(5, 3, subs);

// Callback Hell 

// function getData(dataID, getNextData){
//     setTimeout(() =>{
//         console.log("Data ",dataID);
//         if(getNextData){ 
//             getNextData();  //it checks if the argument has nextdata passd then it calls getNextData Function
//         }
//     }, 2000)
// };

// getData(1, () =>{
//     console.log("getting data2");
//     getData(2, () =>{
//         console.log("getting data3");
//         getData(3, () =>{
//             console.log("getting data4");
//             getData(4);
//         })
//     })
// })

// Example 
// function getData(dataID,  getNextData){
//     setTimeout(() =>{
//         console.log("Data ", dataID);
//         if(getNextData){
//             getNextData(); //it checks if the argument has nextdata passd then it calls getNextData Function
//         }
//     }, 2000)
// }

// getData(1, () =>{
//     getData(2, () =>{
//         getData(3, () =>{
//             getData(4)
//         })
//     })
// });

// Promises - promises is for "Eventual" completion of task is an biject in JS. it is a solution to callback hell.
// let promise = new Promise((resolve, reject) => {.....}); //function with 2 Handlers
//resolve and reject are callbacks provided by js
//A Javascript Promise Object can be:- pending, resolved, rejected
//Pending : the result is undefined.
// Resolved: the result is a value (fulfilled).   resolve(result)
// Rejected: the result is an error object.       reject(error)
//Promises has state(pending, fulfilled)

// let promise = new Promise((resolve, reject) =>{
//     console.log("I am a Promise");
//     resolve("success");
// })

// let promise = new Promise((resolve, reject) =>{
//     console.log("I am a Promise");
//     reject("Some error occured");
// })

// function getData(dataTd, getNextdata){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("Data =", dataTd);
//             resolve("Success")
//             if (getNextdata){
//                 getNextdata();
//             }
//         }, 5000)
//     })
// };
// let p1 = getData(1);
// console.log(p1)

// const getPromise = () =>{
//     return new Promise((resolve, reject) =>{
//         console.log("I am a Promise");
//         resolve("success")
//     })
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise Fulfilled");
// });

// function getData(dataID){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("Data ", dataID);
//             resolve("Success")
//         }, 3000);
//     })
// }

// getData(1).then((result) => {
//     console.log(result)
//     getData(2).then((result)=>{
//         console.log(result);
//         getData(3).then((result)=>{
//             console.log(result);
//         })
//     })
// })

// OR 

// function getData(dataID) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data ", dataID);
//             resolve("Success")
//         }, 3000);
//     })
// }

// getData(1)
//     .then((result) => {
//         return getData(2);
//     })
//     .then((result) => {
//         console.log(result)
//     })


// Async-Await
// async function always returns a promise
// async function myFunc(){..........}

// await pauses the execution of its surrounding async function until the promise is settled.

// function api(condition){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("Wheather Condition ", condition);
//             resolve(200);
//         }, 3000)
//     })
// }

// async function WheatherData() {
//     await api("Good");
//     await api("Bad");
// };

// WheatherData() //Calling Wheather Data

// Example 
// function getData(dataId){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("Data = ", dataId);
//             resolve(200);
//         }, 3000);
//     })
// }

// async function totalData() {
//     console.log("Getting Data 1");
//     await getData(1);
//     console.log("Getting Data 2");
//     await getData(2);
//     console.log("Getting Data 3");
//     await getData(3);
// }

// totalData() //Calling totalData

// IIFE [Immediately Invoked Function Expression] 
// IIFE is a function that is called immediately as soon as it is defined/

// Syntaxs: 01 
// (function(){
//     //Code Here 
// })();

// Syntaxs: 02
// (() =>{
//     //Code Here
// })();

// Syntaxs: 03 
// (async function(){
//     //Code Here
// })();

// Exaample 
// function getData(dataId){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("Data = ", dataId);
//             resolve(200);
//         }, 3000);
//     })
// }

// (async function () {
//     console.log("Getting Data 1");
//     await getData(1);
//     console.log("Getting Data 2");
//     await getData(2);
//     console.log("Getting Data 3");
//     await getData(3);
// })();

// Fetch API 