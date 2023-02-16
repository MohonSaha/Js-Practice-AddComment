document.getElementById("review-btn").addEventListener("click", function () {
  const myElement = document.getElementById("floatingTextarea2");
  const myElementValue = myElement.value;

  const p = document.createElement("p");
  p.innerText = myElementValue;

  const parent = document.querySelector("#commnet-container");
  parent.appendChild(p);
  myElement.value = "";
});
