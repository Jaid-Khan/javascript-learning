// HELLO WORLD PROGRAM 
// console.log("Hello world!");

// PROMPT INPUT 
// let num1 = Number(prompt("Enter First Number"));
// let num2 = Number(prompt("Enter Second Number"));
// console.log(num1 + num2);

// JAVASCRIPT DATA TYPES [PRIMITIVE DATA TYPES]

// var name = "Black Panther";
// console.log(name)

// let Name = "Tony Stark";
// console.log(Name);

// let age = 56;
// console.log(age);

// let age = 67;
// console.log("Your age is", age)

// const age = 56;
// console.log(age)

// let name = prompt("Enter Your Name");
// console.log("HEY !",name,"Good Morning");

// JAVASCRIPT DATA TYPES 

// let name = "Captain America";
// console.log (typeof name);

// let age = 56;
// console.log(typeof age);

// let isFollow = true;
// console.log(typeof isFollow);

// let x;
// console.log(typeof x);

// let y = null;
// console.log(typeof y)

// let z = BigInt("123456789");
// console.log(typeof z);

// let w = Symbol("Hello Tony");
// console.log(typeof w)

// JAVASCRIPT DATA TYPES [NON-PRIMITIVE]

// let student = {
//     name : "Tony",
//     age : 17,
//     cgpa : 7.61,
//     isFolllow : true
// };

// student["age"] = student["age"]+1; // To add a number in age

// console.log(student);
// console.log(typeof student);
// console.log(student["name"]);
// console.log(student["age"]);

// let student = {
//     name : "Tony Stark",
//     age : 25,
//     cgpa : 9.3,
//     isPass : true,
// };

// student["age"] = student["age"]+1;

// console.log(student);
// console.log(typeof cgpa);
// console.log(typeof name);
// console.log(student["name"]);
// console.log(student["age"]);

// ARITHMETIC OPERATORS 

// Addition 
// let x = 45;
// let y = 43;
// console.log(x+y);

// let x = 76;
// let y = 43;
// z = x + y;
// console.log("The Sum is",z);

// Substracton
// let x = 76;
// let y = 54;
// console.log(x-y);

// let x = 189;
// let y = 143;
// z = x -y;
// console.log("The                           "z);

// Multiplication 
// let x = 45;
// let y = 3;
// console.log(x*y);

// let x = 453;
// let y = 34;
// z = x * y; 
// console.log("The Multiplication is",z);

// Division
// let x = 45;
// let y = 7;
// console.log(x/y);

// let x = 765;
// let y = 65;
// z = x / y
// console.log("The Dividation answer is",z)

// Remainder
// let x = 687;
// let y = 5;
// console.log(x % y);

// let x = 98;
// let y = 6;
// z = x % y
// console.log("Your Remainder is",z)

// Exponentiation
// let x = 45;
// let y = 3;
// console.log(x ** y);

// let x = 987;
// let y = 6;
// z = x ** y
// console.log("Your Exponentiation is",z)

// Post Increment
// let x = 154;
// console.log(x++); //Output- 154 
// console.log(x++)  //Output- 155

// let x = 34;
// let y = x++
// console.log(x);  //Output- 35
// console.log(y); //Output- 34

// Pre Increment
// let x = 89;
// console.log(++x); //Output- 89
// console.log(x) //Output- 90

// let x = 665;
// let y = x++;
// console.log(x); //Output- 666
// console.log(y); //Output- 665

// let x = 56;
// console.log(++x) //Output- 57
// console.log(++x) //Output- 58

// let x = 110;
// let y = ++x;
// console.log(x);  //Output- 111
// console.log(y); //Output- 111
// console.log(++x); //Output- 112
// console.log(x++); //Output- 112
// console.log(x) //Output- 113

// Post Decrement 
// let x = 98;
// console.log(x--); //Output- 98
// console.log(x) //Output- 97

// let x = 765;
// console.log(x--); //Output- 765
// console.log(x--); //Output- 764

// let x = 186;
// let y = x--;
// console.log(x); //Output- 185
// console.log(y); //Output- 186

// let x = 321;
// console.log(x--); //Output- 321
// console.log(x--); //Output- 320
// console.log(x--); //Output- 319
// console.log(x); //Output- 318

// Pre Decrement 
// let x = 765;
// let y = --x;
// console.log(x); //Output- 764
// console.log(y); //Output- 764

// let x = 876;
// console.log(--x);
// console.log(x);

// let x = 865;
// console.log(--x); //Output- 864
// console.log(--x); //Output- 863
// console.log(--x); //Output-862

// ASSIGNMET OPERATOR 
// let p = 65;
// p +=4;
// console.log(p);

// let a = 54;
// let b = 89;
// console.log(a+=b);

// let p = 89;
// p -= 6;
// console.log(p);

// let a = 67;
// let b = 23;
// console.log(a-=b);

// let p = 54;
// p *= 2;
// console.log(p);

// let a = 24;
// let b = 4;
// console.log(a *= b); 

// let p = 64;
// p /= 3;
// console.log(p);

// let a = 98;
// let b = 65;
// console.log(a /= b);

// let p = 64;
// p %= 3;
// console.log(p);

// let a = 54;
// let b = 5;
// console.log(a %= b);

// let p = 96;
// p **= 2;
// console.log(p);

// let a = 22;
// let b = 3;
// console.log(a **= b);

// Comparison Operator

//Eqauls to comaprison
// let a = 5;
// let b = 4;
// console.log(a==b); //Output - false

// let a = 98;
// let b = 98;
// console.log(a==b); //Output - true

// Not Equals to comparison 
// let a = 64;
// let b = 64;
// console.log(a!=b); //Output - false

// let a = 7;
// let b = 9;
// console.log(a!=b); //Output - true

// Greater Than Comparison 
// let a = 87;
// let b = 54;
// console.log(a > b); // Outpur - true

// let a = 134;
// let b = 145;
// console.log(a > b); // Outpur - false

// Less Than Comparison
// let a = 45;
// let b = 75;
// console.log(a < b);// Outpur - true

// let a = 78;
// let b = 54;
// console.log(a < b); // Outpur - false

// Greater Than Or Equals To Comparison
// let a = 976;
// let b = 874;
// console.log(a >= b); // Outpur - true

// let a = 2876;
// let b = 8645;
// console.log(a >= b); // Outpur - false

// let a = 785;
// let b = 785;
// console.log(a >= b); // Outpur - true

// Less Than Or Equal To Comparison
// let a = 654;
// let b = 987;
// console.log(a <= b); // Outpur - true

// let a = 621;
// let b = 154;
// console.log(a <= b); // Outpur - false

// let a = 456;
// let b = 456;
// console.log(a <= b); // Outpur - true

// Strictly Comparison Operator
// let a = 56;
// let b = 56;
// console.log(a === b); // Outpur - true

// let a = 543;
// let b = 321;
// console.log(a === b) // Outpur - false

// let a = "789";
// let b = "789";
// console.log(a === b); //Outpur - true

// let a = 87;
// let b = "87";
// console.log(a === b); // Outpur - false

// let a = 456;
// let b = 456;
// console.log(a !== b); //Outpur - false

// let a = 786;
// let b = 975;
// console.log(a !== b); //Outpur - true

// let a = 654;
// let b = "654";
// console.log(a !== b); //Outpur - true

// let a = "123";
// let b = "123";
// console.log(a !== b); //Outpur - false

// Logical Operators

// let a = 789;
// let b = 457;
// cond1 = a > b;;
// cond2 = a === b;

// console.log(cond1, cond2); // Output - true false
// console.log(cond1 && cond2); //Output - false [Logical AND Operator]
// console.log(cond1 || cond2); //Output - true [Logical OR Operator]
// console.log(!cond1); // Output - false [Logical NOT Operator]
// console.log(!cond2); // Output - ture [Logical NOT Operator]

//AND Logical Operator
// let x = 8675;
// let y = 8675;
// console.log(x === y && x >= y); //Output - true 

// let x = 8675;
// let y = 2456;
// console.log(x === y && x >= y); // Output - false

// let x = 8675;
// let y = "8675";
// console.log(x === y && x >= y); //Output - false

// let x = "987";
// let y = "987";
// console.log(x === y && x >= y); //Output - true

//OR Logical Operator
// let x = 456;
// let y = 456;
// console.log(x === y || x <= y); Output -  true

// let x = 478;
// let y = 234;
// console.log( x === y || x > y ); Output -  true

// let x = 987;
// let y = "987";
// console.log(x === y || x > y ); //Output - false

// let x = 546;
// let y = "879";
// console.log(x === y || x > y ); //Output - false

//NOT Logical Operator
// let x = 10;
// let y = 46;
// console.log(!(x>y)); //Output - true

// let x = 874;
// let y = 547;
// console.log(!(x > y)); //Output - false

// if else statements

// let age = 7;
// if (age>=18){
//     console.log("You are an Adult");
// }
// else{
//     console.log("You are a Minor")
// }

// let score = 69;
// if (score >= 90 && score <=100){
//     console.log("Grade: A");
// }
// else if (score >= 80 && score <=89){
//     console.log("Grade: B");
// }
// else if (score >= 70 && score <=79){
//     console.log("Grade: C");
// }
// else if (score >= 60 && score <=69){
//     console.log("Grade: D");
// }
// else{
//     console.log("You are Failed")
// }

// let tempreture = 20;
// if (tempreture >= 30){
//     console.log("Its a Hot Day");
// }
// else if(tempreture <= 10){
//     console.log("Its a Cold Day");
// }
// else{
//     console.log("Its a Pleasant Day")
// }

// let number = 11;
// if (number % 2 === 0){
//     console.log("Number is Even");
// }
// else{
//     console.log("Number is Odd");
// }

// let number = 5;
// if (number % 2 !== 0){
//     console.log("Number is Odd");
// }
// else{
//     console.log("Number is Even")
// }

// Guess the number game
// let num = 25;
// let userNum = prompt('Enter Your Number');
// if (userNum != num){
//     console.log("You Entered Wrong Number");
// }
// else{
//     console.log("You Entered Correct Number");
// }

// Loops 

//For Loop
// for (let i = 1; i<= 10; i++){
//     console.log("i =",i)
// }

// for (let n = 1; n <= 100; n++){
//     console.log("n =", n)
// }

// for (let x = 1; x <= 20; x++){
//     console.log("x =", x)
// }

// for(let i = 0; i<=100; i++){
//     if(i % 2 == 0)
//     console.log( i ,"Is Even");
// else{
//     console.log( i ,"is odd")
// }
// }

// for loop practice 
// for (i = 1; i<=10; i++){
//     console.log(i);
// }

// let sum = 0;
// let n = 5;
// for(let i = 0; i<=n; i++){
//     sum = sum+i
// }
// console.log("Total is", sum);

// Print Table of 2 Using For Loop
// for (let i = 1; i<=10; i++){
//     console.log("2 x", i,"=",i*2)
// }

// Printing odd & Even Number From 1 to 20
// for (let i = 1; i<=20;i++){
//     if(i % 2 === 0){
//         console.log(i,"Number Is Even");
//     }
//     else{
//         console.log(i,"Number is Odd");
//     }
// }

// let num = prompt("Enter Your Nuber");
// for (let i = 1; i<=10; i++){
//     console.log(num, "x =",num*i);
// }

// while loop
// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// while loop practice 
// let i = 1;
// while (i <= 10){
//     console.log(i);
//     i++
// }

// let i = 1;
// while(i<=20){
//     if(i % 2 === 0){
//         console.log(i,"is Even");
//     }
//     else{
//         console.log(i,"Is Odd");
//     }
//     i++;
// }

// let n = 6;
// let sum = 0;
// let i = 1;
// while(i<=n){
//     sum = sum + i;
//     console.log(sum);
//     i++ ;
// }

//Printing table using while loop
// let num = 2;
// let i = 1;
// while(i<=10){
//     console.log(num,'x =',num*i);
//     i++;
// }

//Printing table from user input
// let num = prompt("Enter Your Number");
// let i = 1;
// while(i<=10){
//     console.log(num,'x =',num*i);
//     i++;
// } 

// do-while loop
// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);


// let i = 1;
// do {
//     console.log(i);
//     i++;
// }while(i<= 10);

// Printing Table of 2 Using do-while loop
// let i =1;
// let num = 2;
// do{  
//     console.log(num,"x",i,"=",num*i);
//     i++;
// }while(i<=10);

//For - OF Loop
// let str = "Javascript";
// let size = 0;
// for (i of str){
//     console.log(i);
//     size++;
// }
// console.log(size);

// let str = "Jaid Khan";
// let size = 0;
// for (i of str){
//     console.log("i =",i);
//     size++;
// }
// console.log("size of", size);

// let name = "LEARNING JAVASCRIPT";
// let size = 0;
// for (i of name){
//     console.log(i);
//     size++;
// }
// console.log(size);

//for of loop 
// let marks = [54, 65, 78, 58, 98];
// for(mark of marks){
//     console.log("The Mark is", mark);
// }

// let nameUser = "TonyStark";
// for(char of nameUser){
//     console.log(char);
// }

// for in loop
// let person = {
//     name: "Tony",
//     age: 24,
//     isPass: true
// };
// for (user in person){
//     console.log(`${user} is: ${person[user]}`);
// }

//Strings
// let lang = "javascript";
// console.log(lang);
// console.log(lang.length);
// console.log(lang.toLowerCase());
// console.log(lang.toUpperCase());
// console.log(lang[4]);
// console.log(lang.slice(2, 6));

// let str1 = "Java";
// let str2 = "Script";
// console.log(str1.concat(str2));

// let str = "hello";
// console.log(str.replace("h", "m"));

// let userInput = prompt("Enter Your Full Name Without Space");
// console.log(`@${userInput}${userInput.length}`);

//String Escape Character
// console.log("Tony\nStark");
// console.log("Tony\tStark");

//Array
// let marks = [56, 54, 87, 96, 78];
// console.log(marks);

// let marks = [56, 54, 87, 96, 78];
// console.log(marks[4]);

// let marks = [56, 54, 87, 96, 78];
// console.log(marks);
// marks[0] = 97;
// console.log(marks);

// let marks = [56, 54, 87, 96, 78];
// console.log(marks.length);

// let cities = ["Pune", "Delhi","Chandigarh", "Mumbai", "Bhopal"];
// for (let city of cities){
//     console.log(city);
//     console.log(city.length);
//     console.log(city.toUpperCase());
//     console.log(city.toLowerCase());
// }

// let marks = [56, 54, 87, 96, 78];
// for (i = 0; i < marks.length; i++){
//     console.log(`Index = ${i} and Value = ${marks[i]} `)
// }

// let marks = [56, 54, 87, 96, 78];
// for (mark of marks){
//     console.log(mark)
// }

// let marks = [56, 54, 87, 96, 78];
// let sum = 0;
// for (let mark of marks){
//     sum += mark;
//     sum++;
// }
// console.log(sum);
// avg = sum / marks.length;
// console.log(`The Average Marks of the Class is ${avg}`);


// let marks = [56, 54, 87, 96, 78];
// let sum = 0;
// for (let i = 0; i < marks.length ; i++){
//     sum += marks[i];
// }
// console.log(sum);
// avg = sum / marks.length;
// console.log(`The Average Marks of the Class is ${avg}`);

//Qs. For a Given Array with price of 5 items [250, 645, 300, 900, 50]. Al item have an offer of 10% of on them.
//Change the array to store the final price after applying offer
// let items = [250, 645, 300, 900, 50];
// for (i = 0; i < items.length; i++){
//     console.log(`Original Price is ${items[i]} `)
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer; 
//     console.log(`Price After The Discount is ${items[i]}  `);
// }

// using for of loop
// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items){
//     console.log(`Value of the item is ${val}`);
//     offer = items[i] / 10;
//     items[i] = items[i] - offer;
//     console.log(`Value After The Discount is ${items[i]}  `)
//     i++;
// }

//Array Methods
// let vegetables = ["Tomato", "Potato", "Onion", "Cabbage", "Cauliflower"];
// vegetables.unshift("Ladiesfinger"); //unshift() 
// console.log(vegetables); 

// let vegetables = ["Tomato", "Potato", "Onion", "Cabbage", "Cauliflower"];
// vegetables.shift(); //shift
// console.log(vegetables);

// let veg1 = ["Tomato", "Potato", "Ginger"];
// let veg2 = ["Garlic", "Ladiesfinger", ];
// console.log(veg1.concat(veg2)); //concat()

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.push(8); //push()
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.pop(); //pop()
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.toString()); //toString()

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.slice(2, 5)); //slice()

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 1, 9); //splice
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 0 ,8); //splice
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3,1); //splice
// console.log(arr);

// Qs. Create an array to store companies ["Bloomberg", "Microsft", "Uber", "Google", "IBM", "Netflix"]
// a) Remove the first company from the array
// b) Remove Uber and add Ola in its place
// c) add Amazon at the End

// let companies = ["Bloomberg", "Microsft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies)
// companies.shift();
// console.log(companies);
// companies.splice(1, 1, "Ola");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);

// Function 
// function myfunction(msg){
//     console.log(msg);
// }
// myfunction("Hello JS");

// function myFunction(){
//     console.log("Hello JavaScript");
// }
// myFunction();

// function myFunction(msg, n){
//     console.log(msg * n);
// }
// myFunction(); // output - NaN (can't multiply a number with string)

//add function
// function addFunc(x, y){
//     console.log(x + y);
// }
// addFunc(23, 5);

// function mulFunction(a, b){
//     console.log(a * b);
// }
// mulFunction(12, 6);

// function mulFunction(a, b){
//     return a * b;
// }
// let total = mulFunction(2, 5);
// console.log(total);

// function countVowels(str){
//     let count = 0;
//     for (char of str){
//         if (char === "a"
//             || char === "e"
//             || char === "i"
//             || char === "o"
//             || char === "u"
//         ){
//             count++;
//         }
//     }
//     return count;
// }
// countVowels("Hello Javascript");

// Arrow Function 
// const addNum = (a, b) => {
//     console.log(a + b);
// }
// addNum(5, 19);

// let countVowels = (str) =>{
//     let count = 0;
//     for (char of str){
//         if(char === "a" || char === "e" || char === "o" || char === "i" || char === "u"){
//             count++;
//         }
//     }
//     return count;
// };
// let vowels = countVowels("Javascript");
// console.log(vowels);

// forEach loop in array 
// let marks = [23, 65, 76, 87, 34];
// marks.forEach(function printMark(mark){
//     console.log(mark);
// })

// let names = ["tony", "spider", "captain", "thor", "hulk"];
// names.forEach(function namePrint(name){
//     console.log(name)
// })

// Using Arrow function 
//  let names = ["tony", "spider", "captain", "thor", "hulk"];
// names.forEach((name) => {
//     console.log(name);
// })

// let names = ["tony", "spider", "captain", "thor", "hulk"];
// names.forEach((name, idx, names) => {
//     console.log(name, idx, names);
// })

// let cars = ["alto", "nano", "thar", "scorpio"];
// cars.forEach((cars, idx, arr) =>{
//     console.log(`name of the car is ${cars}, the idex value of the car is ${idx} and the array is ${arr} `)
// })

// let cars = ["alto", "nano", "thar", "scorpio"];
// cars.forEach(function (car, idx, arr){
//     console.log(`name of the car is ${cars}, the idex value of the car is ${idx} and the array is ${arr} `);
// })

//Qs. For a given array of numbers, print the square of each value using the forEach loop.
// let nums = [2, 3, 4, 5, 6];
// nums.forEach((num) => {
//     console.log(num * num);
// })

// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function(val, n){
//     n = val;
//     console.log(val * n);
// })

// Using Arrow Function
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach((val, n) => {
//     n = val;
//     console.log(val * n);
// })

// let arr = [25, 78, 98, 64];
// arr.forEach(function(val){
//     console.log(val*val);
// })

// let arr = [25, 78, 98, 64];
// arr.forEach((val) => {
//     console.log(val * val);
// } )

// let arr = [1, 2, 3, 4, 5, 6];
// function squareFunc(val){
//     console.log(val * val);
// };
// arr.forEach(squareFunc);

// let arr = [1, 2, 3, 4, 5, 6];
// let squareFunc = (val) =>{
//     console.log(val * val);
// };
// arr.forEach(squareFunc);

// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach ((val) => {
//     console.log(val * val);
// });

// Some More Array Method 
// Map   

// let arr = [1, 2, 3, 4, 5];
// let newArr = ((val) =>{
//     console.log(val * 2);
// })
// arr.map(newArr);

// ________________

// let arr = [1, 2, 3, 4, 5];
// let NewArr = arr.forEach(function(val){
//     return val *2;
// });
// console.log(NewArr) 

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.forEach((val) => {
//     return val *2;
// })
// console.log(newArr)

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map(function(val){
//     return val * 2;
// });
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((val) =>{
//     return val * 2;
// });
// console.log(newArr)

// Filter 

//Printing Even Number Only From Array Using filter Mehtod 
// let arr = [23, 54, 65, 24, 97, 62, 33, 42, 90, 73, 88];
// let newArr = arr.filter(function(val){
//     return val % 2 === 0;
// })
// console.log(newArr);

//Printing Odd Number Only From Array Using filter Mehtod 
// let arr = [23, 54, 65, 24, 97, 62, 33, 42, 90, 73, 88];
// let newArr = arr.filter((val) =>{
//     return val % 2 !== 0;
// })
// console.log(newArr);

//Reduce
// let arr = [1,2, 3, 4, 5];
// const redOutput = arr.reduce((pre, curr) =>{
//     return pre + curr;
// })
// console.log(redOutput);

//To Print Highest Number of an array
// let arr = [32, 45, 101, 154, 65, 78, 12];
// const redOutput = arr.reduce((pre, curr) =>{
//     return pre > curr ? pre : curr;
// })
// console.log(redOutput)

//To Print Highest Number of an array
// let arr = [32, 45, 101, 154, 65, 78, 12];
// const redOutput = arr.reduce((pre, curr) =>{
//     if(pre > curr){
//         return pre;
//     }
//     else{
//         return(curr);
//     };
// })
// console.log(redOutput)

// Qs. take a number as an input from the user. Create an array of number from 1 to n.
// let n = prompt("Enter Your Number: ");
// arr = [];
// for (i= 1; i <= n; i++){
//     arr.push(i);
// }
// console.log(arr);

// Qs. take a number as an input from the user. Create an array of number from 1 to n.
// Use the reduce method to calculate sum of all numbers in the Array.
// Use the reduce method to calculate product(Factorial) of all numbers in the Array 
// let n = prompt("Enter Your Number: ");
// let arr = [];
// for (i=1; i<=n; i++){
//     arr.push(i);
// }
// console.log(arr);

//Calculating Sum Using Reduce
// let sum = arr.reduce((res, curr) =>{
//     return res + curr;
// })
// console.log(`The Sum of the array is ${sum}`);
// //Calculating Sum Using Reduce
// let factorial = arr.reduce((res, curr) =>{
//     return res * curr;
// })
// console.log(`The Product of the array is ${factorial}`);
