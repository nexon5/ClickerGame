let btn = document.querySelector("button");
let value = document.querySelector(".value");
let out = document.querySelector(".output");
let fon = document.querySelector(".content");
let x = 5;
let level = 1;
let red = 174;
let green = 237;
let blue = 237

btn.onclick = () => {
    if (x < 56) {
        x = x + 5 - level;
        value.style.width = x + "vw";

        fon.style.background = `rgb(${red += 10},${green -= level * 2},${blue -= x * 3})`;
        console.log(fon.style.background)
    } else {
        x = 5;
        level++
        out.textContent = `Your level is ${level}!!!`;
    }
}
//TEST
// btn.onclick = () => {
//     if (x < 56) {
//         x += 10;
//         value.style.width = x + "vw";
//     } else {
//         x = 5;
//         level++
//         out.textContent = `Your level is ${level}!!!`;
//     }
// }