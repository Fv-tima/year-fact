let yearInput = document.getElementById("yearInput");
let fact = document.getElementById("fact");
let factText = document.getElementById("factText");
yearInput.addEventListener("input", getFactText);
function getFactText() {
  let year = yearInput.value;
  fetch("http://numbersapi.com/" + year + "/year")
    .then((response) => response.text())
    .then((data) => {
      if (year != "") {
        fact.style.display = "block";
        factText.innerText = data;
      }
    })
    .catch((err) => console.log(err));
}
