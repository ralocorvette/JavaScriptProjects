// //JavaScript not related to Java
// //not compiled-interpreted
// //loosly typed - variable types are assigned at tuntime

// let ninjas = ["peter", "pablo", "james"];

// ninjas[1] = "jem";
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];

// console.log(ages[2]);

// let random = ["shaun", "crystal", 30, 20];
// console.log(random);

// console.log(ninjas.length);

// //array methods

// let resul = ninjas.join("-");
// let result = ninjas.indexOf("chun-li");
// let result = ninjas.concat(["ken", "crystal"]);
// let result = ninjas.push("ken");
// let resul = ninjas.pop();
// console.log(ninjas);

// //booleans and comparisons

// let email = "wario@nintentdo.com";
// let name = ["mario", "luigi", "toad"];

// let result = email.includes("!"); //output false
// let name = names.includes("mario"); //out put true

// let name = "shaun";
// console.log(name == "shaun");
// console.log(name == "Shaun");
// console.log(name > "crystal");
// console.log(name > "Shaun"); //true //lowercases bigger than upercases
// console.log(name > "Shaun");

// //initializer
// //condition
// //final expresoiion iterator
// for (let i = 0; i < 5; i++) {
//   console.log("in loop: ", i);
// }

// console.log("loop finished");

// const names = ["shaun", "mario", "luiigi"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);

//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// // functions
// //hosting works with function declarations not with function expressions
// //function declaration
// function greet() {
//   console.log("hello world");
// }

// //functio expression
// const speak = function () {
//   console.log("good day");
// };

// greet();

// speak();

// //************************************************************ */
// //name is a function paramater
// const speak = function (name = "peter", time = "morning") {
//   console.log(`good day ${name}${time}`);
// };

// speak("mario", "morining");

// //returning values from funcions

// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log(area);

// //Arrow functions

// const calcArea = (radius) => {
//   return 3.14 * radius ** 2;
// };
// //when we have one parameter we can take away the parenthesis

// const calcArea = (radius) => {
//   return 3.14 * radius ** 2;
// };

// //another type of syntax

// const calcArea = (radius) => 3.14 * radius ** 2;

// const calcArea = calcArea(5);
// console.log("area is: ", area);

// const greet = () => {
//   return "Hello World";
// };

// const sayHello = () => "whatever";
// sayHello();

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; products.length; i++) {
//     total += product[i] + products[i] * tax;
//   }

//   return total;
// };

// console.log(bill([10, 15, 30], 0, 2));
// //should return 66

// //Functions versus methods

// const name = "peter";

// const greet = () => "hello";

// let resultOne = greet();

// console.log(resultOne);

// //methods
// //methos use dot notation in orrder to call the value
// //methos are functions that are associated with an object/data type such as string

// name.toUpperCase();

// let resultTwo = name.toUpperCase();

// console.log(resultTowo);

// //Callback functions

// const myFunc = (callbackFunc) => {
//   //do something
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc(function (value) {
//   console.log(value);
// });

// //in arrow function notation

// myfFunc((value) => {
//   //do something
//   console.log(value);
// });

// let people = ["mario", "luis", "pablo"];
// //regular notation
// people.forEach(function (person) {
//   console.log(person);
// });
// //arrow notation
// people.forEach((person, index) => {
//   console.log(index, person);
// });

// //creating callback function elsewhere and then passing it

// const logperson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };
// // we are passing the arrow function above to the method below
// people.forEach(logerPerson);

// //Creating an object literal
// let user = {
//   name: "rallo",
//   age: 30,
//   email: "rallotheboss@email.com",
//   location: "paris",
//   blogs: ["Jvascript rocks in 2020", "5 things will make you a better person"],
// };

// console.log(user);
// console.log(user.name);

// console.log(user.age);

// console.log(user["email"]);
// user["name"] = "chun-li";
// console.log(user["name"]);

// //object literals
// //this keyword
// //adding methods, methods can be placed in objects

// let user = {
//   name: "rallo",
//   age: 30,
//   email: "rallotheboss@email.com",
//   location: "paris",
//   blogs: ["Jvascript rocks in 2020", "5 things will make you a better person"],
//   login: () => {
//     console.log("the user has loggeed in");
//   },
//   logout: () => {
//     console.log("the user logged out");
//   },
//   logBlogs: function () {
//     console.log("this has written the following blocks:");
//     this.blogs.forEach((blog) => {
//       console.log(blog);
//     });
//   },
// };

// user.login();
// user.logout();
// const name = "mario";
// name.toUpperCase();

// //objectsd in arrays
// const blogs = [
//   { title: "Who Stole my cheese", likes: 30 },
//   { title: "10 things to make with marmite", likes: 50 },
// ];

// let user = {
//   name: "rallo",
//   age: 30,
//   email: "rallotheboss@email.com",
//   location: "paris",
//   blogs: [
//     { title: "Who Stole my cheese", likes: 30 },
//     { title: "10 things to make with marmite", likes: 50 },
//   ],
//   login: () => {
//     console.log("the user has loggeed in");
//   },
//   logout: () => {
//     console.log("the user logged out");
//   },
//   logBlogs: function () {
//     console.log("this has written the following blocks:");
//     this.blogs.forEach((blog) => {
//       console.log(blog.title, blog.likes);
//     });
//   },
// };

// // THE DOCUMENT OBJECT MODEL ******************************************8

// const para = document.querySelector("div.error"); //error class in div
// const para = document.querySelector("boyd> h1"); //h1 in body
// const para = document.querySelectorAll("p"); //all ps

// console.log(para);

// //other ways to grab elelment

// //get element by id

// const title = document.getElementById("page-title");

// console.log(title);

// //by class name

// const errors = document.getElementsByClassName("error");

// //by tag name

// const paras = document.getElementsByTagName("p");

// console.log(paras);

// console.log(paras[1]); //will show you the first p tag

// //adding and changing page content

// const para = document.querySelector("p");

// //this is going to grab the first p tag and change the default value on the HTML page to whatever you assign it too in the js file
// console.log(para.innerText);

// para.innerText = "ninjas are awesome";

// para.innerText += "ninjas are awesome"; //it will append

// const paras = document.querySelectorAll("p");

// paras.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += "new text";
// });

// //this grabs whatever tag has has the.content class and changes it to an H2
// const content = document.querySelector(".content");

// conetnet.innerHTML = "<h2>This is a new H2</h2>";

// const people = ["mario", "luigi", "yoshi"];

// people.forEach((person) => {
//   content.innerHTML += <p>${person}</p>;
// });

// //How  to change atributes
// const link = document.querySelector("a");

// //this changes the astribute value to thenetnija.com
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://www/thenetninja.com.uk");

// //changes text of the Link to come up showing the name of the site instead
// //of the link
// link.innerText = "The Net Ninja Website";

// const mssg = document.querySelector("p");
// //grabs class suceess changes style to green
// console.log(mssg.getAttribute("class"));
// mssg.setAttribute("class", "success");
// mssg.setAttribute("style", "color:green;");

// //change color
// const title = doucment.querySelector("h1");

// console.log(title.styel);
// console.log(title.style.color);

// title.style.margin = "50px";
// title.style.color = "crimson";
// title.style.fontSize = "60px";
// title.style.margin = "";

// //adding and removing classes

// const content = document.querySelectorAll("p");
// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("success");
// const apras = document.querySelectorAll("p");
// paras.forEach((p) => {
//   if (p.textConent.includes("error")) {
//     p.classList.add("error");
//   }
//   if (p.innerText.includes("success")) {
//     p.classList.add("success");
//   }
// });

// const title = document.querySelector(".title");

// title.classList.toggle("test");
// title.classList.toggle("test");

// //Array Methods
// const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter((score) => {
//   return score > 20;
// });

// console.log(filteredScores);

// const users = [
//   { name: "pedro", premium: true },
//   { name: "Gustav", premium: false },
//   { name: "mario", premium: false },
//   { name: "JetLI", premium: true },
// ];

// // array method to filter out the premim false and jst leave the premium true

// const premiumUsers = users.filter((user) => user.premium);
// console.log(premiumUsers);

//MAP METHOD

// const prices = [10, 30, 15, 25, 50, 40, 5];

// const salePrice = prices.map((price) => {
//   return price / 2;
// });

// console.log(salePrice);

// const product = [
//   { name: "paper", price: 20 },
//   { name: "music", price: 35 },
//   { name: "soap", price: 37 },
//   { name: "shirt", price: 67 },
// ];

// //only change price if over 30

// const saleProducts = product.map((product) => {
//   if (product.price > 30) {
//     return { name: product.name, price: product.price / 2 };
//   } else {
//     return product;
//   }
// });
// console.log(saleProducts);

//Reduce Method
//It does not return the whole array
//it just returns the specified paramaters
//it tells me how many nymbers in the array are bigger than 50
// const scores = [10, 20, 60, 40, 70, 90, 30];
// const result = scores.reduce((acc, curr) => {
//   if (curr > 50) {
//     acc++;
//   }
//   return acc;
// }, 0);

// console.log(result);

// const product = [
//   { name: "paper", price: 20 },
//   { name: "music", price: 35 },
//   { name: "soap", price: 37 },
//   { name: "paper", price: 67 },
// ];

// const saleProd = product.reduce((acc,crr)=>{
//   if(curr.product==="paper"){
//     acc+=curr.score;
//   }
// },0);
// console.log(saleProd);

//FIND METHOD
// const scores = [34, 54, 76, 100, 646];

// const firstHighScore = scores.find((score) => {
//   return score > 100;
// });

// console.log(firstHighScore);

// const product = [
//   { name: "paper", price: 20 },
//   { name: "music", price: 35 },
//   { name: "soap", price: 37 },
//   { name: "paper", price: 67 },
// ];

// product.sort((a, b) => {
//   if (a.product > b.product) {
//     return -1;
//   } else if (b.proudct > a.product) {
//     return 1;
//   } else {
//     return 0;
// //   }
// });
// const prices = [10, 30, 15, 25, 50, 40, 5];

// prices.sort((a, b) => a - b);
// console.log(prices);


const products = [
    {name:'baseball bat',price:25},
    {name:'electric fan', price: 35},
    {name:'computer keyboard',price:100},
    {name:'gaming headphones',price:177},
    {name:'telephone', price: 80}
];

const promos = products.filter(product => product.price >20)
.map(product =>`the ${product.name} us ${product.price/2} dollars`);
console.log(promos)