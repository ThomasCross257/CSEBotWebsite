const { Server } = require("tls");

function unhideSuggestions(){
    var a = document.getElementById("Suggestions")
    var b = document.getElementById("Welcome")
    var c = document.getElementById("News")
    var d = document.getElementById("Links")
    if (a.style.display === "none") {
        a.style.display = "block";
        d.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
      } else {
        a.style.display = "none";
    }
}
function unhideWelcome(){
    var a = document.getElementById("Suggestions")
    var b = document.getElementById("Welcome")
    var c = document.getElementById("News")
    var d = document.getElementById("Links")
    if (b.style.display === "none") {
        b.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
      } else {
        b.style.display = "none";
    }
}
function unhideNews(){
    var a = document.getElementById("Suggestions")
    var b = document.getElementById("Welcome")
    var c = document.getElementById("News")
    var d = document.getElementById("Links")
    if (c.style.display === "none") {
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
      } else {
        c.style.display = "none";
    }
}
function unhideLinks(){
    var a = document.getElementById("Suggestions")
    var b = document.getElementById("Welcome")
    var c = document.getElementById("News")
    var d = document.getElementById("Links")
    if (d.style.display === "none") {
        d.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
      } else {
        d.style.display = "none";
    }
}