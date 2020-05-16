//Datatypes
/**
 * Primitves
 * undefined
 * boolean
 * number
 * string
 * bigint-es10
 * symbo es6
 * null - special primitve type having additional usage for its value:
 * if objec is not inherited then null is shown;
 *
 * Nor Primitives
 * Object
 * Function
 */
// == value
// === value and type

//objects in js
//property value paris

//object literal
/// html is the root tag
var person = {
  name: "name",
};

function makeHuman2(name, age) {
  var p = {
    name: name,
    age: age,
  };
  return p;
}

//functions - 3 invocations
//function from -"this refers to the global obkect"

function divideByZero(kitty, kat) {
  console.log("hey kitty kitty");
  return kitty + kat;
}

//if you dont assing var i withing finc or bbrackets makes it implicitly global

//hoisting moives declaration

// WHat is AJAX

// Asyncrhonous Javascript and XML
//Set of web techonologies
//Send & receive data asynchronously
//Does not interfere with current web page
//json has replaced XML for the most part

//XmlHttpRequest (XHT)Object
//APi in the form of an object
//Porivded by the browsers JS environment
//Methods transfer data bweteen client and service\
//Can be used with other protocols than HTTP
//Can work with data other than XML (JSON, plain text)
