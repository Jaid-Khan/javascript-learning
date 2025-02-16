//Id Selector
// let heading = document.getElementById("header-id"); 
// console.dir(heading);

//Class Selector
// let subheading = document.getElementsByClassName("sub-header-class"); 
// console.dir(subheading);

//Tag Selector 
// let parah = document.getElementsByTagName("p"); 
// console.dir(parah);

//Query Selector in Tag
// let firstEl = document.querySelector("p");
// console.dir(firstEl);

//Query Selector in Tag
// let allEl = document.querySelectorAll("p");
// console.dir(allEl);

// Query Selector in Class 
// let firstEl = document.querySelector(".myClass");
// console.dir(firstEl);

// Query Selector in Class 
// let firstEl = document.querySelectorAll(".myClass");
// console.dir(firstEl);

// Query Selector in Id 
// let firstEl = document.querySelector("#myId");
// console.dir(firstEl);

// There is NO Option for querySelectorAll in ID 

// Dom Manipulation properties 

// TagName - Returns Tag for element nodes
// let firstEl = document.getElementById("myButton");
// console.log(firstEl.tagName);

// let firstEl = document.querySelector("p");
// console.log(firstEl.tagName)

// innerText Property
// let div = document.querySelector("div");
// console.dir(div);

// Qs. Create a h2 heading element with text "Hello Javascript". append (add text at Last) "From Apna College" to this text using Javascript.  
// let heading = document.querySelector("h2");
// // console.dir(heading.innerText); //To print innerText in h2 Tag
// heading.innerText = heading.innerHTML + " from Apna College";
// console.log(heading.innerText);

// let word = document.querySelector("h2");
// console.dir(word.innerText);
// word.innerText = word.innerText + " From Apna College";

// Qs. Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
// let divs =  document.querySelectorAll(".box");
// divs[0].innerText = "New Unique Value 1";
// divs[1].innerText = "New Unique Value 2";
// divs[2].innerText = "New Unique Value 3";

// let divs =  document.querySelectorAll(".box");
// let i = 1;
// for(div of divs){
//     div.innerText = `New Unique Value ${i}`;
//     i++;
// }

// DOM PART - 02 

// Gettting the attribute value 
// let div = document.querySelector("div");
// console.log(div)
// let id = div.getAttribute("id");
// console.log(id);

// Gettting the attribute value 
// let div = document.querySelector("div");
// console.log(div);
// let name = div.getAttribute("name");
// console.log(name)

// Gettting the attribute value 
// let capture_class = document.querySelector("p");
// console.log(capture_class.getAttribute("class"));

// Gettting the attribute value and changing the value of the attribute
// let paragraph = document.querySelector("p");
// console.log(paragraph.setAttribute("class", "newClass"));

// STYLE - node.style
// let div = document.querySelector("div");
// console.log(div.style);
// div.style.backgroundColor = "red";

// Changing tha font color of the div 
// let div = document.querySelector("div");
// div.style.color = "red";

// Changing tha font size of the div and the inner text of the div
// let div = document.querySelector("div");
// div.style.fontSize = "26px";
// div.innerText = "Hello";

// Changing the div visibility to hidden using javascript
// let div = document.querySelector("div");
// div.style.visibility = "hidden";

// Creating and Adding an element 
// let newBtn = document.createElement("button"); //Creating an element using "createElement"
// newBtn.innerText = "Click me"; //Adding text inside the element using innerText
// console.log(newBtn) //Printing Newbtn in console.
// let div =  document.querySelector("div"); //Selecting the div where we want yo add elements.
// div.append(newBtn); // To add at the end of the node (inside);
// div.prepend(newBtn); // To add at the start of the node (inside);
// div.before(newBtn); // To add start (before) of the node (outside);
// div.after(newBtn); // To add end (after) of the node (outside);

// Example 
// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i> Hello There </i>!";
// document.querySelector("body").prepend(newHeading);

// Removing an Element or Node 
// let p = document.querySelector("p");
// p.remove(); // Remove the element from the DOM.

// newHeading.remove();

// Qs. Create a new button element. give it a text "Click me". Background color red & text color of white.
// let newEl = document.createElement("button"); //creating the element
// newEl.innerText = "Click Me"; //adding the text
// newEl.style.color = "white"; //adding color
// newEl.style.backgroundColor = "red"; //adding background color

// let body = document.querySelector("body"); // Selecting the body.
// body.prepend(newEl); // adding element (button) in start of the body (inside).

// Qs. Create a <p> tag in html. give it a class & some styling.
// Now Create a new Class in CSS and try to append their class to <p> element.
//Did you know how to overwrite the class name when you add a new one ?
//Solve this problem using classlist.

// let para = document.querySelector("p"); //selecting para
// para.classList.add("newclass") // TO add new class in para
// para.classList.add("content") // TO remove class in para