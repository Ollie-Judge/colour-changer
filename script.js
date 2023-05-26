let arrayOfColours = [
  "red",
  "green",
  "blue",
  "purple",
  "white",
  "orange",
  "turquoise",
  "yellow",
];

function change() {
  let random = Math.floor(Math.random() * 8);
  let body = (document.body.style.background = arrayOfColours[random]);
  console.log(body);
}
