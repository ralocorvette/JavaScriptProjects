const parent = document.getElementById("parent");

const child = document.getElementById("child");

//event listlener

parent.addEventListener("click", function () {
  console.log(" I am the parent");
}); //true means to use capturing

parent.addEventListener(
  "click",
  function () {
    console.log("I am the child");
  },
  true
);

//bubling measn start from the boottom
//capture start form the top ad the capture the bottom elements
