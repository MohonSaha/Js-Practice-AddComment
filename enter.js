// Add comment to press enter button


var input = document.getElementById("floatingTextarea2");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const myElement = document.getElementById("floatingTextarea2");
    const myElementValue = myElement.value;

    const p = document.createElement("p");
    p.innerText = myElementValue;

    const parent = document.querySelector("#commnet-container");
    parent.appendChild(p);
    document.getElementById("floatingTextarea2").value = "";
  }
});