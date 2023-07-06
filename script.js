function sayHello() {
  console.log("Merhaba dünya!");
}

function addButton() {
  var button = document.createElement("button");
  button.textContent = "Merhaba de";
  button.addEventListener("click", sayHello);
  document.body.appendChild(button);
}

addButton();
