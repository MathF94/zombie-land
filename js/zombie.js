'use strict';

const zombiePicture = "img/zombie.png";
const spriteSize = 100;
const spriteNb = 11;

let position = 0;
const fps = 10;
let id = null;

function zombieAnimation() {
    setTimeout(() => {
        id = requestAnimationFrame(zombieAnimation);
    }, 1000 / fps);

    let zombieTomb = document.querySelector("#zombietomb");
    zombieTomb.style.background = `url(${zombiePicture}) ${-spriteSize * position}px 0px`;
    position++;
    console.log(zombieTomb.style.background);

    if (position > spriteNb) {
        position= 0;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    zombieAnimation();
})