const newBtn = document.querySelector(".new-btn");

window.addEventListener("DOMContentLoaded", getQuote);
newBtn.addEventListener("click", getQuote);

console.time();
function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      let random = Math.floor(Math.random() * 1644);
      document.querySelector(".quote").innerText = `"${data[random]["text"]}"`;
      document.querySelector(
        ".author"
      ).innerText = `- ${data[random]["author"]} -`;
    })
    .catch((e) => console.log);
}
console.timeEnd();
