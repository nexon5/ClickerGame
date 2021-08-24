let btn = document.querySelector("button");
let value = document.querySelector(".value");
let x = 5;
let level = 1;

btn.onclick = () => {
    if (x < 56) {
        x++;
        value.style.width = x + "vw";
    } else {
        x = 5;
    }
}