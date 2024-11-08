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
//     i++
// }while(i<=10);

// Printing Table of 2 Using do-while loop
// let i =1;
// let num = 2;
// do{  
//     console.log(num,"x",i,"=",num*i);
//     i++;
// }while(i<=10);






