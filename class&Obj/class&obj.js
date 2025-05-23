// Simple Object Containing Method or Function

// ProtoTypes In Javascript

// const student = {
//     fullName : "Tony Stark",
//     marks : 97.4,
//     printMarks: function () {
//         console.log("marks = ", this.marks)
//     }
// }
// console.log(student)

// let arr = ["apple", "banaanaa", "grapes"];
// console.log(arr);

// Creating an Employee Object  
// let employee = {
//     calcTax(){
//         return "Tax rate is 10%";
//     }
// };
// console.log(employee.calcTax());

// Creating a Tony Object
// let tony = {
//     salary: 500000,
// }
// console.log(tony)

//Assigning employee object to tony object (or inheriting employee object in tony)
// tony.__proto__ = employee; 

// console.log(tony.calcTax()) //Accessing Employee object properties from tony object.

// let employee = {
//     calcTax() {
//         return "Tax Rate is 10%";
//     },
// } ;
// let tony = {
//     salary: 50000,
//     calcTax(){
//         return "Tax Rate is 20%";
//     },
// };
// tony.__proto__ = employee 

// console.log(employee.calcTax())
// console.log(tony.calcTax())

// Classes in Javascript 

// how to create a class 
// class Myclass{      //MyClass - Class Name
//     constructor () {...........};
//     method() {............};
// }
// let myObj = new Myclass(); // creating varibale called myObj and stroing Myclass onjects into myObj Object Varibale.

// Class 
// class ToyotaCar {
//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("Stop");
//     }
//     setBrand(brand){
//         this.brandName = brand;
//     }
// }
// let fortuner = new ToyotaCar(); //Assigning ToyotaCar class To Fortuner.
// console.log(fortuner);
// console.log(fortuner.start());
// console.log(fortuner.stop());

// fortuner.setBrand("fortuner");
// console.log(fortuner);

// Assigning Same Class Again TO Lexus 
// let lexus = new ToyotaCar();
// lexus.setBrand("Harrier")
// console.log(lexus)
// console.log(lexus.start());
// console.log(lexus.stop());

// Class Constructer 


// class ToyotaCar{
//     constructor(brand, mileage){            //CONSTRUCTOR
//         console.log("Creating New OBject");
//         this.brand = brand;                
//         this,mileage = mileage;
//     }

//     start(){
//         console.log("Start"); //METHOD
//     }
    
//     stop(){
//         console.log("Stop"); //METHOD
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10); //CREATING OBJECT AND PASSING ARGUMENTS 
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 20); //CREATING OBJECT AND PASSING ARGUMENTS
// console.log(lexus);


// Inheritance in JavaScript 

// class Parent {              //Parent Class
//     hello(){
//         console.log("Hello");
//     }
// };

// class Child extends Parent{ //Child Class With Inherited Parent Class Methods
//     //This Child Class is Empty but it have Parent class methods.
// }

// let TestObj = new Child(); //Created object using child class which inherited parent class method.
// console.log(TestObj); // printing created Object
// console.log(TestObj.hello()); // Running object method which child class inherited from parent class.

// Example
// class Person{
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("Solve Problems, build Somethiong");
//     }
// }
 
// let tonyObj = new Engineer();
// console.log(tonyObj.eat());
// console.log(tonyObj.sleep());
// console.log(tonyObj.work());

// Another Example with [Method Overriding] if child and parent have same method, childs method will be used. [method overriding] 
// class Person{
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("Do Nothing")
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("Solve Problems, build Somethiong");
//     }
// }
 
// let tonyObj = new Engineer();
// console.log(tonyObj.eat());
// console.log(tonyObj.sleep());
// console.log(tonyObj.work());


// super Keyword 
// The Super keyword is used to call the constructer of its parent class to access the parents properties and methods. 
// class Person{
//     constructor(){
//         this.species = "homo-sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person{
//     constructor(branch){
//         super(); // To Invoke Parent Class Constructor
//         this.branch = branch;
//     }
//     work(){
//         console.log("Solve Problems, build Somethiong");
//     }
// }
 
// let engObj = new Engineer("Chemical Engg.");
// console.log(engObj);

// Example 
// class Person{
//     constructor(name){
//         this.species = "homo-sapiens";
//         this.name = name;
//     }

//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person{
//     constructor(name){
//         super(name); // To Invoke Parent Class Constructor
//     }
//     work(){
//         console.log("Solve Problems, build Somethiong");
//     }
// }
 
// let engObj = new Engineer("Tony");
// console.log(engObj);

// Practice 
// Qs - 01 You are Creating a website for your college. Create a class user with 2 properties, name & email. it also has a method called viewData() that allow user to view data.

// let data = "Secret Information";  //created a variable

// class User {                     //created user class
//     constructor(name, email){    // Construvtor
//         this.name = name;        
//         this.email = email;
//     }
//     viewData(){                  //method to viewdata
//         console.log("Data = ", data);
//     }
// };
// let student1 = new User("Tony", "tony@gmail.com");  //Creating student1 Object using class and Passing arguments to parameters - name & email.
// let student2 = new User("Hulk", "hulk@gmail.com");  //Creating student2 Object using class and Passing arguments to parameters - name & email.

// console.log(student1); //printing object
// console.log(student2); //printing object
// console.log(student1.viewData()) // to view data

// let teacher1 = new User("Dean", "dean@gmail.com"); //Creating teacher1 Object using class and Passing arguments to parameters - name & email.
// console.log(teacher1); //printing object


// Qs - -2 Create a new class called Admin which inherits from user. add a new method called editData to admin that allows it to edit data.
// let data = "Secret Information";  //created a variable

// class User {                     //created user class
//     constructor(name, email){    // Construvtor
//         this.name = name;        
//         this.email = email;
//     }
//     viewData(){                  //method to viewdata
//         console.log("Data = ", data);
//     }
// };

// class Admin extends User{      //created new class inherited from User
//     constructor(name, email){  //using super for initialization from parent
//         super(name, email);
//     }
//     editData(){               //created editData Method
//         data = "some new value"; 
//     }
// };
// let admin1 = new Admin("admin1", "admin1@gmail.com")
// console.log(admin1)
// console.log(data)
// console.log(admin1.editData());
// console.log(data)


// Error Handleing
// try-catch 

// try{
//     //normal code
// }
// catch(err){     //error is error object
//     //handling error
// }

// Example 
// let a = 5;
// let b = 3;
// console.log(a+b);
// console.log(a-b) ;  // if our code has 10 lines and our code get error at 4th line then the code runs till 4th line and then stpos, thats why we use try and catch and capture that error using it and our code gets run after that error line too,
// try{               // or in short if we get a chance to get an error and we want to handle that error we use try and catch.
//     console.log(a*c); //Error
// }
// catch(error){
//     console.log(error);
// }
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);










































