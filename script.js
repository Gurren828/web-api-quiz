
var formE1 = document.querySelector("form");
var itemInput = document.querySelector("#item-input")
var list = JSON.parse(localStorage.getItem("list"))

formE1.addEventListener("submit", function(event){

event.preventDefault();
var newItem = itemInput.nodeValue.trim();


list.push(newItem)

localStorage.setItem("list", JSON.stringify(list))

document.location.href = "/list.html";
});
