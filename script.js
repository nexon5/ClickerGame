let btn = document.querySelector("button");
let value = document.querySelector(".value");
let out = document.querySelector(".output");
let fon = document.querySelector(".content");
let divHelper = document.querySelector(".am-helper");
let divScale = document.querySelector(".am-scale");




let x = 6;
let level = 1;
// let red = 174;
// let green = 237;
// let blue = 237;
let score = 0;
let helper = 0;
let flag = 0;
let cost = 2000; //flag for Fair function
//255/60/20

let newDiv = document.createElement("div");
newDiv.classList.add("end");
let btnRel = document.createElement("button");
btnRel.classList.add("reload-btn");
btnRel.textContent = "Начать заново";
btnRel.onclick = () => {
    location.reload();
}



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
        x = x + 5 + helper - level * 2;//formula
        value.style.width = x + "vw";
        score += x;
        out.innerHTML = `Your level is ${level}!!!<br> Your score is ${score}!!!`;
        CheckHelps();
    } else {
        x = 6;
        level++
        out.innerHTML = `Your level is ${level}!!!<br> Your score is ${score}!!!`;
        Fair();
    }
}
function Fair() {
    if (flag == 0) {
        if (level >= 0) {
            let timerId = setInterval(() => {
                x--;
                console.log("Rabota intervala " + x);
                value.style.width = x + "vw";
                flag = 1;
                if (x <= 0) {//End of game
                    newDiv.innerHTML = `<h1 class="secondH1">Игра окончена</h1><p>К сожалению Ваша игра окончена и бункер сгорел до тла.
                    Однако вы долго держались.</p><br><center> Ваш счёт:  ${score}<br> Ваш Уровень:  ${level}</center> `;
                    document.body.append(newDiv);
                    newDiv.append(btnRel);
                    clearInterval(timerId);
                }
            }, 1000);
        }
    } else return false;
}




divHelper.innerHTML = `<h2>Helper</h2>
<p>Buy for increcing liter per one pushing<br><br> Press for upgrading <br>Cost: ${cost} </p>`;
divScale.innerHTML = `<h2>Scaler</h2>
<p>Automatical system<br><br> Press for upgrading <br>Cost:  ${cost} </p>`;

function CheckHelps() {
    if (score > cost) {
        divHelper.classList.add("active");
        divScale.classList.add("active");
        flagHelps = 1;
    } else false;
}

divHelper.onclick = () => {
    if (flagHelps == 1) {
        score = score - cost;
        helper += 10;
        cost += 1000;
        console.log(cost);
        flagHelps = 0;
        divHelper.classList.remove("active");
    } else return false;
}