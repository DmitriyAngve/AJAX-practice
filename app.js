// const url = "http://discoveryvip.com/shared/test1.json";
const localUrl = "people.json";

const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");
let attemptCounter = false;

inputVal.style.display = "none";
btn.textContent = "Load JSON Data";

btn.addEventListener("click", (e) => {
  getData(localUrl);
});

function getData(urlPath) {
  fetch(urlPath)
    .then((rep) => {
      return rep.json();
    })
    .then((json) => {
      maker(json);
    })
    .catch((err) => {
      if (!attemptCounter) {
        getData(localUrl);
      }
      attemptCounter = true;
      console.log(err);
    });
}

function maker(data) {
  output.innerHTML = "<h1>JSON Data</h1>";
  data.forEach((el, index) => {
    console.log(index % 2);
    const bg = index % 2 == 0 ? "#eee" : "#fff";
    // ${JSON.stringify(el)}

    const div = document.createElement("div");
    div.style.backgroundColor = bg;

    div.innerHTML += `<div>${el.name.first} ${el.name.last}</div>`;
    div.innerHTML += `<div>${el.location.city} ${el.location.country}</div>`;
    div.innerHTML += `<div>${el.age}</div>`;

    output.append(div);
  });
}
