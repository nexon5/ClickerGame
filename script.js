let btn = document.querySelector("button");
let value = document.querySelector(".value");
let out = document.querySelector(".output");
let fon = document.querySelector(".content");
let x = 6;
let level = 1;
let red = 174;
let green = 237;
let blue = 237;
let score = 0;
let helper = 0;
let flag = 0; //flag for Fair function
//255/60/20

/*function changeTheme() {
    if (x > 0) {
        fon.style.background = `rgb(${red += },${green -= level * 2},${blue -= x})`;
        console.log("Vpered")
    } else {
        fon.style.background = `rgb(${red -= 10},${green += level * 3},${blue += x})`;
        console.log("NAZAD")
    }
}*/

btn.onclick = () => {
    if (x < 56) {
        x = x + 5 + helper - level;//formula
        value.style.width = x + "vw";
        score += x;
        out.innerHTML = `Your level is ${level}!!!<br> Your score is ${score}!!!`;
    } else {
        x = 6;
        level++
        out.innerHTML = `Your level is ${level}!!!<br> Your score is ${score}!!!`;
        Fair();
    }
}
function Fair() {
    if (flag == 0) {
        if (level >= 1) {
            let timerId = setInterval(() => {
                x--;
                console.log("Rabota intervala " + x);
                value.style.width = x + "vw";
                flag = 1;
                if (x <= 0) {//End of game
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("end");
                    newDiv.innerHTML = `<h1 class="secondH1">Игра окончена</h1><p>К сожалению Ваша игра окончена и бункер сгорел до тла.
                    Однако вы долго держались.</p><br><center> Ваш счёт:  ${score}<br> Ваш Уровень:  ${level}</center> `;
                    document.body.append(newDiv);
                    console.log("Выполнение");
                    clearInterval(timerId);
                }
            }, 1000);
        }
    } else return false;
}
