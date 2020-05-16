//https://swapi.dev/+swid
function loadGif(gif) {
  document.getElementById("gifID").setAttribute("src", gif.url);
}
function getGif() {
  console.log("getting your GIF");
  let gifID = document.getElementById("gifID").value;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    console.log("in ORSC");
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
      var gif = JSON.parse(xhr.responseText);
      loadGif(gif);
    }
  };
  xhr.open("GET", "https://gifbase.com/gif/" + gifID + "?format=json", true);
  xhr.send();
}
window.onload = function () {
  console.log("in onload");
  this.document
    .getElementById("submit")
    .addEventListener("click", this.getGif, false);
};
