const dino = document.getElementById("dino");
const cuctus = document.getElementById("cuctus");

addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 350);
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cuctusLeft = parseInt(window.getComputedStyle(cuctus).getPropertyValue("left")
);

  if (cuctusLeft < 50 && cuctusLeft > 0 && dinoTop >= 140) {
    alert("GAME OVER!");
  }
}, 10);
