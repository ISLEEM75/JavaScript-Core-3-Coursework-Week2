const div = document.getElementById("div");
const jokeTile = document.getElementById("h2");

fetch("https://xkcd.now.sh/?comic=latest")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data;
    h2.innerHTML = `${data.title}`;
    div.innerHTML = `<img src= ${data.img} alt="${data.alt}">`;
  })
  .catch((error) => console.log(error));
