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
}/*