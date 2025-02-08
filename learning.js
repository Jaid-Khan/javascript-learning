// CHAPTER 01 - Variables And Data Types

//Print Hello World in javascript
// console.log("Hello World!"); //console.log is used to print the console output to the screen

// Variables in Javascript || In javascript there are three types of Variables- let, const and var.

// var - can be redeclared and updated. A global scope Variable.
// var number = 49;

// let - can not be redeclared but can be updated. A Block scope Variable.
// let name = "Rock"; //Example

// const - can not be redeclared or updated. A Block scope Variable.
// const pi = 3.14; //Example

// Data types in Javascript- Primitive and Non-Primitive
// Primitive Data Types- number, string, boolean, undefined, null, Bigint, Symbol.
// No-Primitive Data Types- objects, arrays, functions etc.

// PRIMITIVE DATA TYPE 

// Number Data Type
/*let age = 24;
console.log(age);
console.log("The data type is",(typeof age)); */ //To Print The Type Of Data Type.

//String Data Type
/*let fullName ="Tony Stark";
console.log(fullName);
console.log("The data type is",(typeof fullName));*/

//Booolean Data Type
/*let isFollow = true;
console.log(isFollow);
console.log("The data type is",(typeof isFollow));*/

//Undefined Data Type
/*let x; //by default every variables are undefined until we assign them a Value. 
console.log(x);
console.log("The data type is",(typeof x));*/

//null Data Type
/*let y = null;  //null means absense of an object.
console.log(y);
console.log("The data type is",(typeof y));*/

//Bigint Data Type
/*let a = BigInt("123"); // In the Bigint Data Type There Should Be Always an "n" in The Last Of the Output at console. To Show Us That this is a Bigint Data Type.
console.log(a);
console.log("The data type is",(typeof a));*/

//Symbol Data Type
/*let b = Symbol("Hello !");
console.log(b);
console.log("The data type is",(typeof b));*/

// NON-PRIMITIVE DATA TYEPE 

// objects Data Type - Object data type is the collection of values.
// Inside the objects the data stores in the format of Keys and Their respective Values.
/*const student = {  
    fullname : "Rahul Kumar", //key and values
    age : 32, //key and values
    cgpa : 8.2, //key and values
    ispass : true //key and values
};
console.log(student); // To Print The Keys and Their Valus inside the Object
console.log("The data type is",typeof student); // To Print the specific value of a 
console.log(student["fullname"]); //To Print The Sepcific Key Value.
console.log(student["age"]);*/ // or console.log(student.age) //To Print The Sepcific Key Value.

//Practice Question No.- 01
/*const product = {  //object
    title : "ballpen", //key and values
    rating : 4, //key and values
    isdeal : true, //key and values
    offer : 5, //key and values
    price : 270, //key and values
};
console.log(product); //To Print Object
console.log(product.isdeal); //To print a specific keys value.
console.log(product.price);*/ //To print a specific keys value.

//Practice Question No.- 02
/*const profile = {
    userName : "@Jaidkhan",
    isFollow : false,
    followers : 5499,
    folloing : 94,
};
console.log(profile); //To Print Profile 
console.log(typeof profile); // To Print Data Type Of Profile
console.log(profile.followers);// To Print Specific Keys Value From The object.
console.log(profile[typeof isFollow])*/ // To print Data Type of Specific Key from an object.

//Example Of Object Data Type 
/*const data = { 
    name : "Tony Stark",
    age : 32,
    gender : "Male",
    bloodGroup : "B+" ,
    phoneNumber : 9876543210 ,
};
console.log(data); // To Print All, Inside The Object Name Data
console.log(data ["age"]); // To Print Specific Value of a key inside an object. 
console.log(data ["phoneNumber"]); */ // To Print Specific Value of a key inside an object.

// CHAPTER 02 - Operators and Conditional Statements

//Comments In Javascript
//This is a single line comment
/* This is a multiple
line comment */

//Operators in Javascript
// Operators are used to perform some operations on data.
// Arithmetic Operators +, -, *, /

// + Addition
/*let num1 = 74;
let num2 = 89;
console.log(num1 + num2);*/

// Addition Example
/*num1 = 86;
num2 = 108;
total = num1 + num2;
console.log(total);*/

// Addition Example
/*let num1 = 186;
let num2 = 174;
console.log("Your Total is", num1 + num2);*/

// Addition Example
/*let num1 = 154;
let num2 = 198;
total = num1 + num2 ;
console.log("Your Total is",total);*/

// - Substraction
/*let num1 = 156;
let num2 = 84;
console.log(num1-num2);*/

// Substraction Example
/*let num1 = 564;
let num2 = 186;
substraction = num1 - num2;
console.log(substraction);*/

// Substraction Example
/*let num1 = 187;
let num2 = 145;
console.log("Your Substraction is",num1 - num2);*/

// Substraction Example
/*let num1 = 6578;
let num2 = 4781;
substraction = num1 - num2;
console.log("Your Substraction is",substraction);*/

// * Multiplication
/*let num1 = 8;
let num2 = 12;
console.log(num1*num2);*/

// Multiplication Example
/*let num1 = 47;
let num2 = 96;
multiply = num1 * num2;
console.log(multiply);*/

// Multiplication Example
/*let num1 = 185;
let num2 = 69;
console.log("Your Multiplication is",num1*num2);*/

// Multiplication Example
/*let num1 = 154;
let num2 = 46;
multiply = num1 * num2;
console.log("Your Multiplication is",multiply)*/

// / Dividation
/*let num1 = 72;
let num2  = 8;
console.log(num1/num2);*/

// Dividation Example
/*let num1 = 169;
let num2 = 4;
result = num1 / num2;
console.log(result);*/

// Dividation Example
/*let num1 = 149;
let num2 = 8;
console.log("Your Result is",num1/num2);*/

// Dividation Example
/*let num1 = 255;
let num2 = 5;
result = num1 / num2 ;
console.log("Your Result is", result);*/

// Other Arithmetic Operators : %(Modulus), **(Exponentiation), ++(Increment), --(Decrement).
// %(modulus) operator gives remainder (after division leftover value)
/*let num1 = 50;
let num2 =  7;
console.log(num1%num2);*/

//  Modulus Examples
/*let num1 = 100;
let num2 = 2;
remainder = num1 % num2;
console.log(remainder);*/

//  Modulus Examples
/*let num1 = 169;
let num2 = 49;
console.log("Your Remainder is",num1%num2);*/

//  Modulus Examples
/*let num1 = 485;
let num2 = 54;
remainder = num1 % num2;
console.log("Your Remainder is",remainder);*/

// **(Exponentiation) operator - The Exponentiation operator (**) used to raise a number to the power of another number. 
/*let base = 5;
let exponent = 3;
// console.log(5**3);*/  //it means 5x5x5 = 125

// Exponentiation Example
/*let base = 45;
let exponent = 6;
result = 45 ** 6; //45x45x45x45x45x45
console.log(result);*/

// Exponentiation Example
/*let base = 12;
let exponent = 8;
console.log("Your Result is",12**8);*/ // 12x12x12x12x12x12x12x12

// Exponentiation Example
/*let base = 15;
let exponent = 4;
result = 15 ** 4; //15x15x15x15
console.log("Your Result is",result); */

// Arithmetic Operators in Short 
/*let a = 5;
let b = 2;
console.log("a =",a); //To print the value of a 
console.log("b =",b);//To print the value of b
console.log("a + b =", a+b); //For Addition
console.log("a - b =", a-b); //For Substraction
console.log("a * b =", a*b); //For Multiplication
console.log("a / b =", a/b); //For Dividation
console.log("a % b =", a%b); //For Remainder
console.log("a ** b =", a**b); */ // For Exponentiation

// ++ (Increment) Operator - Used to increase the value of a variable by 1.
// Types of Increment - Post-Increment , Pre-Increment

//Post-Increment
/*let x = 45;
console.log(x++); // Output: 45 || The x++ is a post-increment operation. This means that the value of x is used first in the expression, and then x is incremented. 
console.log(x++); */ // Output: 46 || after the incrementation the incremented value printed in second console.log 

//Post-Increment Example  
/*let num1 = 56;
console.log(num1++); // Output- 56 (Prints Current Value Then Increment)
console.log(num1); */ // Output- 57 (Value After Increment)

//Post-Increment Example
/*let x = 64;
let y = x++;
console.log(x); //Output- 65 || The Value of x is incremented by one, then used in expression.
console.log(y); */ //Output- 64 || x++ is the post-increment operator it means that the current value of x is assigned to y first, then it is incremented

// Pre-Increment
/*let x =10;
console.log(++x); // Output: 11 || In the pre-increment the value of x is incremented before it is used in expression. 
console.log(++x); */ //Output: 12 || Again the pre-increment changes the value of x and then prints the new value.

//Pre-Increment Example
/*let x = 74;
console.log(++x); //Output - 75 || In the pre-increment the value of x is incremented before it is used in expression.
console.log(x); */ //Output - 75 || The Incrementd Value Of x in printed

//Pre-Increment Example
/*let p = 89;
let q = p++;
console.log(p); //Output - 90 ||  The Value of x is incremented by one, then used in expression.
console.log(q); */ //Output - 89 ||  p++ is the pre-increment operator it means that the current value of p is assigned to q first, then it is incremented.

// Post-Decrement
/*let x = 32;
console.log(x--); // Output: 32 || The x-- is a Post-Decrement operation. This means that the value of x is used first in the expression, and then x is decremented.
console.log(x--); */ // Output: 31 || after the decrementation the decremented value printed in second line.

// Post-Decrement Example
/*let x = 59;
console.log(x--); // Output: 59 || The x-- is a Post-Decrement operation. This means that the value of x is used first in the expression, and then x is decremented.
console.log(x); */ // Output: 58 || after the decrementation the decremented value printed in second line.

// Post-Decrement Example
/*let p = 23;
let q = p--;
console.log(p--);//Output- 22 || The Value of p is decremented in second line, then used in expression.
console.log(q); */ //Output- 23 || p-- is the post-increment operator it means that the current value of p is assigned to q first, then it is decremented.

// Pre-Decrement
/*let x = 54;
console.log(--x); // Output: 53 || In the pre-decrement the value of x is decremented before it is used in expression. 
console.log(--x); */ //Output: 52 || Again the pre-decrement changes the value of x and then prints the new value.

//Pre Decrement Examplpe
/*let x = 19;
console.log(--x); // Output - 18 || In Pre-Decrement the value of x is decremented first, then the expression executed. 
console.log(x); */ // Output - 18 || In This Line the Decremented Expression or New Value Of Expresion, Is Printed.

//Pre Decrement Examplpe
/*let p = 56;
let q = --p;
console.log(p); // Output - 55 || In This Pre-Decrement the Decrementation done first the the value is aasigned or executed.
console.log(q); */ // Output - 55 || In This Pre- Decrement The Decremented Value Is Assigned To The q.

//Assignment Operators in JavaScript (Assign Values)
// Types of assignment Operators - ( =, +=, -=, *=, /=, %=, **=, ====, !==)

// Assignment "=" Operator Examples 
/*let a = 85;  //Example of "=" Operator
console.log(a);*/

// Assignment "+=" Operator Examples 
/*let a = 52;
a += 4; //Example of "+=" Operator 
console.log(a);*/ //Output - 56

// Assignment "-=" Operator Examples 
/*let a = 68;
a -= 3; //Example of "-=" Operator 
console.log(a); */ //Output - 65

// Assignment "*=" Operator Examples 
/*let a = 16;
a *= 4; //Example of "*=" Operator 
console.log(a);*/ //Output - 64

// Assignment "/=" Operator Examples 
/*let a = 52;
a /= 4; //Example of "/=" Operator 
console.log(a);*/ //Output - 13

// Assignment "%=" Operator Examples 
/*let a = 14;
a %= 4; //Example of "%=" Operator 
console.log(a);*/ //Output - 2

// Assignment "**=" Operator Examples 
/*let a = 3;
a **= 4; //Example of "**=" Operator 
console.log(a);*/ //Output - 81

//Comparison Operator 
// "=="Equal To Comparison Operator
/*let a = 5;
let b = 6;
console.log(a == b); */ //Output - false

// Equal "==" To Comparison Operator 
/*let a = 9;
let b = 9;
console.log(a==b); */ //Output - true

//Equal "==" To Comparison Operator
/*let a = 59;
let b = 59;
c = (a == b);
console.log(c); //Output - true
console.log(typeof c); */ //Output - boolean

//Not Equal "!==" To Comparison Operator
/*let p = 15;
let q = 16;
console.log(p != q); */ //Output - true 

//Not Equal "!==" To Comparison Operator
/*let p = 23;
let q = 23;
console.log(p != q); */ //Output - false

//Not Equal "!=" To Comparison Operator
/* let p = 63;
let q = 64;
z = p != q;
console.log(z); // Output - true
console.log(typeof z) */ //Output - boolean 

//Equal to & type "===" Comaparison Operator
// Compares values and types (strict equality).
/*let a = 5;
let b = 5; //Strictly Checks the vale and there Data Type.if any condition are false then the output will be false/ 
console.log(a === b); */ //Output - true

//Equal to & type "===" Comaparison Operator
// Compares values and types (strict equality).
/*let a = 5;
let b = 4; //Strictly Checks the vale and there Data Type.if any condition are false then the output will be false/ 
console.log(a === b); */ //Output - false

//Equal to & type "===" Comaparison Operator
// Compares values and types (strict equality).
/*let a = 5;
let b = "4"; //Strictly Checks the value and there Data Type.if any condition are false then the output will be false 
console.log(a === b); */ //Output - false

//Equal to & type "===" Comaparison Operator
// Compares values and types (strict equality).
/*let a = "4";
let b = "4"; //Strictly Checks the value and there Data Type.if any condition are false then the output will be false/ 
console.log(a === b); */ //Output - true

//Equal to & type "===" Comaparison Operator
// Compares values and types (strict equality).
/*let a = "8";
let b = 4; //Strictly Checks the value and there Data Type.if any condition are false then the output will be false/ 
console.log(a === b); */ //Output - false

//Not Equal to & type "!==" Comaparison Operator
// Checks inequality including type (strict inequality).
/*let a = 4;
let b = 4; //Strictly Checks the value and there Data Type.if any condition are false then the output will be false/ 
console.log(a !== b); */ //Output - false

//Not Equal to & type "!==" Comaparison Operator
// Checks inequality including type (strict inequality).
/*let a = 21;
let b = "21"; //Strictly Checks the value and there Data Type.if any condition are false then the output will be false/ 
console.log(a !== b); */ //Output - true

//Not Equal to & type "!==" Comaparison Operator
// Checks inequality including type (strict inequality).
/*let a = "65";
let b = "65"; //Strictly Checks the value and there Data Type.if any condition are false then the output will be false/ 
console.log(a !== b); */ //Output - false

//Not Equal to & type "!==" Comaparison Operator
// Checks inequality including type (strict inequality).
/*let a = "25";
let b = 25; //Strictly Checks the value and there Data Type.if any condition are false then the output will be false/ 
console.log(a !== b); */ //Output - true

//Other Comparison Operators - ( >, >=, <, <= )
// Greater Than ">" Comparison Operator
/*let num1 = 167;
let num2 = 159;
console.log(num1 > num2);*/ // Output - true

// Greater Than ">=" Comparison Operator
/*let num1 = 167;
let num2 = 159;
console.log(num1 >= num2); */ //Outpur - true

// Greater Than "<" Comparison Operator
/*let num1 = 167;
let num2 = 159;
console.log(num1 < num2); */ // Output - false

// Greater Than "<=" Comparison Operator
/*let num1 = 167;
let num2 = 159;
console.log(num1 <= num2); */ //Outpur - false

// Logical Comparison Operator - (Logical AND "&&"), (Logical OR "||"), (Logical NOT "!")
//Logical AND "&&" Comparison Operator
/*let a = 6;
let b = 5;
let cond1 = a > b;
let cond2 = a === b; //Strictly comparison operator
cond = cond1 && cond2; //The && (AND) operator returns true only if both operands are true. In this case, cond1 is true and cond2 is false, so cond will be false.
console.log(cond);*/ //Output - false

//Logical AND "&&" Comparison Operator
/*let a = 56;
let b = 56;
cond1 = a >= b;
cond2 = a === b;  //Strictly comparison operator
cond = cond1 && cond2 ; //The && (AND) operator returns true only if both operands are true. In this case, cond1 is true and cond2 is also true, so cond will be true.
console.log(cond); */ //Output - true

//Logical OR "||" Comparison Operator
/*let a = 6;
let b = 5;
console.log;
let cond1 = a > b ;
let cond2 = a === b; //Strictly comparison operator
cond = cond1 || cond2; //The || (OR) operator returns false only if both operands are false. In this case, cond1 is true and cond2 is false, so cond will be true.
console.log(cond); */ //Output - true

//Logical OR "||" Comparison Operator
/*let a = 89;
let b = "56";
cond1 = a < b;
cond2 = a === b; //Strictly comparison operator
cond = cond1 || cond2; //The || (OR) operator returns false only if both operands are false. In this case, cond1 is false and cond2 is also false, so cond will be false.
console.log(cond);  */ //Output - true

//Logical Not "!" Comparison Operator
/*let a = 6;
let b = 5;
cond1 = a > b; //Output - true
console.log(cond1)
cond = ! a >b; // The ! (NOT) operator returns false if the statemet is true and there is NOT Operator then the output will be false. The NOT Operators Output Will be Always Just Opposite.
console.log(cond); */ //Output - false

//Logical Not "!" Comparison Operator
/*let a = 56;
let b = 59;
console.log(a > b); // Output - false | Output without NOT "!" Comparison Operator
console.log( !(a > b)); */ // Output - true | Output With NOT "!" Comparison Operator |The NOT "!" operator converts the true value into false and false value into true.

//Conditional Statement - To Improve some conditions in the CODE.
// if Conditional Statement
/*let mode = "light-mode"; //let mode = "dark-mode"
let color ;
if (mode ==="dark-mode"){
    color="black";
} 
if (mode ==="light-mode"){
    color="light";
}
console.log(color); */ //Output - light || To Print The Color

// if Conditional Statement
/*let age = 16; 
if (age >= 18){
    console.log("You are Eligible to Vote");
}
if (age < 18){
    console.log("You are not Eligible to Vote");
}; */

// if Conditional Statement with user input
/*let age = prompt("Enter Your Age"); //To get the input from the user.
if (age >= 18){
    console.log("You are Eligible to Vote");
}
if (age < 18){
    console.log("You are not Eligible to Vote");
}; */

// if Conditional Statement 
/*let age = 75;
if (age >= 70){
    console.log("You are Eligible for Pension");
}
if (age < 70){
    console.log("You are not Eligible for Pension");
}; */

// if Conditional Statement with user input
/*let age = prompt("Enter Your Age");  //To get the input from the user.
if (age >= 70){
    console.log("You are Eligible for Pension");
}
if (age < 70){
    console.log("You are not Eligible for Pension");
}; */

// if else Conditional Statement
/*let score = 32;
if (score >= 33) {
    console.log("Congrats! You have passed the exam.");
}else{
    console.log("Sorry! You have failed the exam.");
} */ //Sorry! You have failed the exam.

// if else Conditional Statement
/*let score = prompt("Enter Your Score");
if (score >= 33) {
    console.log("Congrats! You have passed the exam.");
}else{
    console.log("Sorry! You have failed the exam.");
}*/

//if - else if - else Conditional Statement 
/*let price = 1050;
if (price >= 500){
    console.log("You get a discount of 10%");
}
else if (price >= 200 && price < 500){
    console.log("You get a discount of 5%");
}
else{
    console.log("No discount");
}*/

//if - else if - else Conditional Statement 
/*let age = prompt("Enter Your Age ");
if (age >= 75) {
    console.log("You Are A Senior Citizen");
}
else if (age >= 16 && age <=74) {
    console.log("You Can vote");
}
else {
    console.log("You Can't Vote");
}*/

//if - else if - else Conditional Statement
/*let age = 6;
if (age < 18){
    console.log("You are a Child !!");
}
else if (age >= 18  && age <= 55){
    console.log("You are an Adult Person!!!");
} 
else {
    console.log("You are a Senior citizen!!!");
}*/

//if - else if - else Conditional Statement
// Qs. - Get User To input a number using prompt,Check if Number is multiple of 5 or Not.
/*let num = prompt("Enter Your Number ");
if (num % 5 === 0){
    console.log("The Number is multiply of 5");
}
else{
    console.log("Number is Not Multiply of 5");
}*/

//if - else if - else Conditional Statement
// Qs. - Get User To input a number using prompt,Check if Number is multiple of 3 or Not.
/*let num = prompt("Enter Your Number ");
if (num % 3 === 0){
    console.log("The Number is Multiply of 3");
}
else{
    console.log("Number is Not Multiply of 3");
}*/

//if - else if - else Conditional Statement
// Qs. - Write a Code Which can give grades to student according to their scores.
// Details are - [90 - 100, A], [70 - 89, B], [60 - 69, C], [50 - 59, D], [0 - 49, F].
/*let score = 96;
let grade;
if (score >= 90 && score <= 100 ){
    grade = "A";
}
else if (score >= 70 && score <= 89 ){
    grade = "B";
}
else if (score >= 60 && score <= 69 ){
    grade = "C";
}
else if (score >= 50 && score <= 59 ){
    grade = "D";
}
else if (score >= 0 && score <= 49 ){
    grade = "F";
}
console.log("Your Grade is ", grade);*/

// LOOPS 
// Loops are Used To Execute a piece of code gain & again
// Types Of Loops : for loop, while loop, do-while loop, for-of loop, for-in loop.

// FOR LOOP
// for (initialization; condition ; increment){
//Work here
// }

// for (let i = 1; i <= 5; i++){
//     console.log("Hello World")
// }

// let sum = 0;
// for(let i = 1; i <=5; i++){
//     sum = sum+i
// }
// console.log(sum)

// CLACULATE SUM OF 01 TO n
// let sum = 0;
// let  n = 6;
// for(let i = 1; i<=n; i++ ){
//     sum= sum+i;
// }
// console.log(sum);

// Print 1 to 5
// for (let i = 1; i <=5; i++ ){
//     console.log("i =", i)
// }

// INFINITE LOOP Using For Loop
// NOTICE: This loop is dangerous
// for (let i = 0; i >=0 ; i++){
//     console.log("i =", i);
// }

// while loop
// initilization;
// while(condition){
//     // code block to execute
//     increment;
// }

// Example
// let i = 0;
// while (i < 5){
//     console.log(i);
//     i++;
// }

// Print 1 to 5 Using while loop
// let i = 1;
// while(i<=5){
//     console.log("i =",i);
//     i++;
// }

// do-while loop
// initilation;
// do{
//     //Code Block To Execute;
//     increment;
// }while(condition);

// let i = 1;
//  do{
//     console.log("Apna College");
//     i++;
//  }while(i<=10);

// let i = 1;
// do{
//     console.log("i =", i)
//     i++;
// }while(i<=5);

// Example
// let i = 0;
// do {
//     console.log(i);
//     i++;
// }while(i<=5);

//for-of loop
// for(const element of iterable){
//     //Code Block To Execute;
// }

// let str = "Apna College";
// for (let i of str){
//     console.log("i =",i);
// }

// let str = "javascript";
// for (let i of str){
//     console.log("i =",i)
// }

// let str = "javascript";
// let size = 0;
// for (let i of str){
//     console.log("i =",i);
//     size++;
// }
// console.log(size);

// Example
// const fruits = ['apple', 'banana', 'cherry'];
// for (let fruit of fruits){
//     console.log(fruit);
// } 

// for-in loop
// for(const key in object){
//     //Code To Execute
// }

// let student = {
//     name:"Rahul Kumar",
//     age:20,
//     cgpa:7.8,
//     isPass:true
// };
// for (let key in student){
//     console.log(key); //To print key in object
//     console.log("key =", key,"value =",student[key]); //to print the value of an object
// }

//To Print All the numbers from 0 to 100 
// for (i = 0; i <= 100;  i++){
//     console.log("i =",i);
// }

// To Print Even Numbers From 0 to 100
// for (let i = 0; i<= 100; i++ ){
//     if(i % 2 ===0){
//         console.log("i =", i);
//     }
// } 

//To Print Odd Numbers From 0 to 100
// for (let i = 0; i <= 100; i++){
//     if (i % 2 !== 0){
//         console.log("i =", i);
//     }
// }

//Guess The Number Game
// let gameNum = 25;
// let userNum = prompt("Enter Your Number");
// while(userNum != gameNum){
//     userNum = prompt("You Entered Wrong Number Try Again a Different Number");
// }
// console.log("Congratulations ! You Entered The Right Number");

//Strings 
//String is a sequence of characters used to represent text

// let str = "javascript" //Declaring the string.
// console.log(str.length); // To print the length of a string.
// console.log(str[6]); // To Print The Specific Character of a string using their index values.

// Template Literals 
// let obj = {
//     item: "pen",
//     price: 10,
// };
// console.log(`the ${obj.item} price is ${obj.price}`);

// let info = `The price of the pen is ${5+3+2}`;
// console.log(info);

//String Escape Characters
// console.log("Tony\nStark") // New Line Escape Character
// console.log("Tony\tStark"); //Tab Space Escape Character

//String Methods in Javascript 
// These are built in functions to manipulate a string.
// str.toUpperCase, str.toLowercase, str.trim()[removes whitespaces], str.slice(start, end?)[Returns part of string], str.concat(str2)[Joins str2 with str1], str.replace(searchVal, newVal), str,charAt(idx.)

// let str = "Apna College";
// console.log(str.toUpperCase()); //Example of toUpercase 

// let str = "Apna COllege";
// let newStr = str.toUpperCase(); //Example of toUpercase 
// console.log(str);
// console.log(newStr);

// let str = "Apna College";
// str = str.toUpperCase(); //Example of toUpercase 
// console.log(str);

// let str = "Apna College";
// str = str.toLowerCase(); //Example of toLowercase
// console.log(str);

// let str = "     Apna College  js     "
// console.log(str.trim()); // Trim is used to remove extra spaces from start and end only.

// let str = "hello";
// console.log(str.slice(0, 3)); //Example of slice [slice uses index values]

// let str = "hello";
// console.log(str.slice(2));  //Example of slice [slice uses index values] if we don't provide ending value then it will go to last from start index value. 

// let str1 = "Apna";
// let str2 = "College";
// console.log(str1.concat(str2)); //adds to strings [joins str2 with str1]

// let str1 = "apna";
// let str2 = "college";
// result = str1.concat(str2); //Example of cancat string method
// console.log(result);

// let str = "hello";
// console.log(str.replace("h", "m")); //Example of replace string method

// let str = "hello";
// console.log(str.replace("llo", "lp")); //Example of replace string method

// let str = "iloveJS";
// console.log(str.charAt(5)); // To Fnd The Character inside the string using their index values.

// Qs. - Prompt the user to enter their full name. Generate a username from them based on the input. 
// Start username with @, followed by their fullname and ending with the fullname length.

// let fullName = prompt("Enter Your Full Name Without Spaces");
// let userName = "@" + fullName + fullName.length;
// console.log(userName); 

//Arrays
//Arrays In JS - Collection of items

// Exmaples of arrays
// let heroes = ["ironman", "hulk", "thor", "batman"];
// let marks = [96, 75, 48, 83, 66];
// let info = ["rahul", 86, "Delhi"];

// let marks = [76, 87, 54, 65, 90];
// console.log(marks);
// console.log(marks.length);

// let heros = ["ironman", "hulk", "thor", "batman", "Spiderman"];
// console.log(heros)

// let marks = [34, 78, 95, 80, 65];
// marks[0] = 43;
// console.log(marks);

//Loops Over An Array
// Printing An Array Using for loop
// let heros = ["ironman", "hulk", "thor", "batman", "Spiderman"];
// for (idx = 0; idx < heros.length; idx++){
//     console.log(heros[idx]);
// };

// // for of loop in array
// let heros = ["ironman", "hulk", "thor", "batman", "spiderman"];
// for (let hero of heros){
//     console.log(hero);
// };

// for of loop in array 
// let cities =  ["pune", "agra", "mumbai", "delhi", "Nagpur"];
// for (let city of cities){
//     console.log(city.toUpperCase());
// };

// Qs. For a Given Array wih Amrk fo students = [85, 97, 44, 37, 76, 60]
// Find the average marks of entire class.
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`Average Marks OF Entire Class = ${avg}`)

// Calculating Average Marks Using For Loop 
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (i = 0; i < marks.length; i++){
//     sum += marks[i];
// };
// console.log(sum);
// let avg = sum / marks.length;
// console.log(`The Average marks of entire class = ${avg}`);

//Qs. For a Given Array with price of 5 items [250, 645, 300, 900, 50]. Al item have an offer of 10% of on them.
//Change the array to store the final price after applying offer
//Used for of loop 
// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items){
//     console.log(`val at ${i} = ${val}`);
//     let offer = val / 10 ;
//     items[i] = items[i] - offer;
//     console.log(`The Proce after Discout is ${items[i]}`)
//     i++;
// };

//Previous Question Solved!
// Used For Loop
// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++){
//     console.log(`The Price at index value ${i} = ${items[i]}`);
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
//     console.log(`This final Price after the discount is ${items[i]}`)
// }

// ARRAY METHOD
//Array Mehtods - push(), pop(), toString, Concat(), unshift(), shift(), slice(), splice().

// let foodItems =  ["Potato", "Tomato", "Onion", "Litchi", "Apple"];
// foodItems.push("Ginger", "Strawberry"); // push() - aad to end
// console.log(foodItems);

//  let foodItems =  ["Potato", "Tomato", "Onion", "Litchi", "Apple"];
// foodItems.pop(); // pop() - Delete from end & Return
// console.log(foodItems);

// let foodItems =  ["Potato", "Tomato", "Onion", "Litchi", "Apple"];
// console.log(foodItems);
// let deletedItem = foodItems.pop(); // pop() - Delete from end & Return
// console.log(foodItems);
// console.log(`Deleted item = ${deletedItem}`);

// let foodItems =  ["Potato", "Tomato", "Onion", "Litchi", "Apple"];
// console.log(foodItems.toString()); //toString() - Convert Array to String

// let marks = [89, 87, 65, 95, 83];
// console.log(marks.toString()); //toString() - Convert Array to String

// let marvelHeroes = ["thor", 'spiderman', "ironman"];
// let dcHeroes = ["superman", "batman"];
// let heroes = marvelHeroes.concat(dcHeroes);  //concat() - Joins Multiple Arrays and Returns Result
// console.log(heroes);

// let marvelHeroes = ["thor", 'spiderman', "ironman"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes = ["shaktiman", "krish"];
// console.log(marvelHeroes.concat(dcHeroes, indianHeroes));  //concat() - Joins Multiple Arrays and Returns Result

// let marvelHeroes = ["thor", 'spiderman', "ironman"];
// marvelHeroes.unshift("Antman"); // unshift() - Add to Start
// console.log(marvelHeroes);

// let marvelHeroes = ["thor", 'spiderman', "ironman"];
// marvelHeroes.shift(); // shift() - Delete from start & Return
// console.log(marvelHeroes); 

// let marvelHeroes = ["thor", 'spiderman', "ironman", "antman", "hulk"];
// console.log(marvelHeroes.slice(1, 3)) // slice() - returns a piece of array using index values.

//  let arr = [1, 2, 3, 4, 5, 6, 7];
//  arr.splice(2, 2, 101, 102); //splice () - (indexvalue, items to be deleted from given index, added new items(replaced) from deleted items)
//  console.log(arr);

//Add an item using splice 
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 0, 101 ); //splice() - index number 2, dleted items 0, added 101(at index number 2)
// console.log(arr);

//Delete an item using splice
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 1); // splice() - at index 03 element 01 got deleted 
// console.log(arr);

// Replace an item using splice 
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 1, 101);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let del = arr.splice(4);
// console.log(`deleted item = ${del}`);
// console.log(`left item after splice from 4th index = ${arr}`);

// Qs. Create an array to store companies ["Bloomberg", "Microsft", "Uber", "Google", "IBM", "Netflix"]
// a) Remove the first company from the array
// b) Remove Uber and add Ola in its place
// c) add Amazon at the End

// a) 
// let companies = ["Bloomberg", "Microsft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// console.log(companies);

// b)
// let companies = ["Bloomberg", "Microsft", "Uber", "Google", "IBM", "Netflix"];
// companies.splice(2, 1, "Ola");
// console.log(companies);

// c)
// let companies = ["Bloomberg", "Microsft", "Uber", "Google", "IBM", "Netflix"];
// companies.push("Amazon");
// console.log(companies);

// Functions
// Block of code that performs a specific task, can be invoked whenever needed.

// function myFunction(){ //Declared a function
//     console.log("Welcome to apna college!");
//     console.log("We are learning JS");
// }
// myFunction(); //Calling the function or invoke

// function myFunction(msg){ //Where (msg) is a parameter
//     console.log(msg);
// }
// myFunction("I love JS"); //where i love js is an argument

// function myFunction(msg, n){
//     console.log(msg * n);
// }
// myFunction("i love JS", 100); //output - NaN (Not a Number) it means you can't muliply a number with string. 

// lets create a function to add two numbers 
// function sum(num1, num2){
//     console.log(num1+num2);
// }
// sum(230, 650);

// function sum(x, y){
//     s = x + y;
//     return s; // return statement
// }
// let val = sum(3, 4);
// console.log(val);

// function sum(x, y){
//     return x+y;
// }
// sum = sum(230, 450);
// console.log(sum);

// Arrow Functions     //MODERN JS
//Compact way of writing a function
// const functionName = (param1, param...) => {
//     //do some work
// }

// const sum = (a, b) => {
//     return a + b;
// }

// const arrowSum = (a, b) => { 
//     console.log(a + b); //calclating the sum of the function
// }
// arrowSum(3, 4); //Calling the function using there name 

// const mulFunction = (x, y) => {
//     console.log(x * y);
// }
// mulFunction(23, 5); //Passing the arguments - 23, 5

//OR

// const mulFunction = (x, y) => {
//     return x * y; //Arrow function using return.
// }
// // calling in brouser using - mulFunction(4, 3)

// let printHello = () => {   // Arrow function without parameter
//     console.log("Hello");
// }
// printHello();

// Printing again in single line using arrow function 
// const printHello = () => console.log("hello");
// printHello();

// Qs- Create a function using the "fuction" keyword that takes a string as an argument & returns the number of vowels in the string.
// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//         {
//         count++;
//         }
//     }
//     return count;
// }

// Using Arrow function
// const countVowels = (str) =>{
//     count = 0;
//     for (char of str){
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     return count;
// }

// forEach loop in Array 
// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function printValue(val){
//     console.log(val);
// }) 

// for each using arrow function 
// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach((val) =>{
//     console.log(val);
// });

// let arr = ["pune", "delhi", "mumbai", "agra"];
// arr.forEach((city) => {
//     console.log(city);
// })

// let arr = ["pune", "delhi", "mumbai", "agra"];
// arr.forEach((city) => {
//     console.log(city.toUpperCase());
// });

// let arr = ["pune", "delhi", "mumbai", "agra"];
// arr.forEach((city, idx, arr) => {
//     console.log(city, idx, arr);
// });

//Qs. For a given array of numbers, print the square of each value using the forEach loop.
// let nums = [2, 3, 4, 5, 6];
// nums.forEach((num) => {
//     console.log(num * num);
// })

// let nums = [2, 3, 4, 5, 6];
// nums.forEach(function(num){
//     console.log(num * num);
// })

// let nums = [23, 12, 56, 45];
// let calcSquare = ((num) => {
//     console.log(num * num)
// });
// nums.forEach(calcSquare)

// let nums = [23, 12, 56, 45];
// function calcSquare(val){
//     console.log(val * val);
// };
// nums.forEach(calcSquare);

// Some More Array Methods
// Map 
// Creates a new array with the result of some operation. The value its callback returns are used to form new array.
// let nums = [67, 52, 39];
// nums.map((val) =>{
//     console.log(val);
// });

// let nums = [67, 52, 39];
// let newArr = nums.map((val) => {
//     return(val);
// })
// console.log(newArr)

// let nums = [67, 52, 39];
// let newArr = nums.map((val) => {
//     return(val * val);
// })
// console.log(newArr);
// console.log(nums);

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((val) => {
//     return val * 2;
// })
// console.log(newArr)

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map(function(val){
//     return val;
// })
// console.log(newArr);

// Some More Array Methods
// Filter 
// Creates a new Array of Elements that give true for a condition/filter. 

// To Filter Even Values From The Array 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenArr = arr.filter((val) =>{
//     return val % 2 === 0;
// })
// console.log(evenArr);

// To Filter Odd Values From The Array 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenArr = arr.filter((val) =>{
//     return val % 2 !== 0;
// })
// console.log(evenArr);

// Some More Array Methods
// Reduce
//Peroforms some operation & reduces the array to a single value. it returns that single value.

// let arr = [1,2, 3, 4];
// const output = arr.reduce((res, val) => {
//     return (res + val);
// })
// console.log(output);

//To print the largest number in the array
// let arr = [ 2, ,1, 6, 9, 3, 8];
// const output = arr.reduce((pre, curr) =>{
//     return pre > curr ? pre :curr;
// })
// console.log(output);

// To print the Smallest number in the array
// let arr = [ 2, ,1, 6, 9, 3, 8];
// const output = arr.reduce((pre, curr) =>{
//     return pre < curr ? pre :curr;
// })
// console.log(output);

// Qs. We are Given Array of marks of students. Filter out the marks of student that scored 90.
// let marks = [97, 64, 32, 49, 99, 96, 86];
// const toppers = marks.filter((val) =>{
//     return val > 90;
// })
// console.log(toppers);

// Qs. take a number as an input from the user. Create an array of number from 1 to n.
// let n = prompt("Enter a Number : ");
// arr = [];
// for (i=1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// Use the reduce method to calculate sum of all numbers in the Array.
// Use the reduce method to calculate product(Factorial) of all numbers in the Array 
// let n = prompt("Enter Your Number");
// let arr = [];
// for (i = 1; i <= n; i++){
//     arr[i-1] = i;
// }
// console.log("Array of n =", arr);
//Calculating Sum Using Reduce
// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// })
// console.log("Sum =", sum);
//Calculating Product(Factorial) Using Reduce
// let factorial = arr.reduce((res, curr) =>{
//     return res * curr; 
// })
// console.log("Factorial = ", factorial);

