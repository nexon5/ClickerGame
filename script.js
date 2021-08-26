let btn = document.querySelector("button");
let value = document.querySelector(".value");
let out = document.querySelector(".output");
let fon = document.querySelector(".content");
let divHelper = document.querySelector(".am-helper");
let divScale = document.querySelector(".am-scale");
let helperCostString = document.querySelector(".cost");
let scaleCostString = document.querySelector(".scale-cost")




let x = 6;
let level = 1;
let red = 255;
let green = 75;
let blue = 70;
let score = 0;
let helper = 0;
let flag = 0;
let scale = 1;
let costHelper = 2000; //flag for Fair function
let costScale = 1000; //flag for Fair function
//255/60/20

let newDiv = document.createElement("div");
newDiv.classList.add("end");
let btnRel = document.createElement("button");
btnRel.classList.add("reload-btn");
btnRel.textContent = "Начать заново";
btnRel.onclick = () => {
    location.reload();
}



function changeTheme() {
    if ((x > 0) && (x < 21)) {
        fon.style.background = `rgb(${red += 5},${green -= level - 5},${blue -= 5})`;
        console.log("Vpered")
    } else if ((x >= 21) && (x < +41)) {
        fon.style.background = `rgb(255, 120,57)`;
        console.log("Vpered")
    } else {
        fon.style.background = `rgb(255,189,29)`;
        console.log("NAZAD")
    }
}

btn.onclick = () => {
    if (x < 56) {
        x = x + 5 + helper - level * 2;//formula
        value.style.width = x + "vw";
        score += Math.round(x * scale);
        out.innerHTML = `Your level is ${level}!!!<br> Your score is ${score}!!!`;
        CheckHelps1();
        CheckHelps2();
        changeTheme();
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







function CheckHelps1() {
    if (score > costHelper) {
        divHelper.classList.add("active");
        divScale.classList.add("active");
        flagHelps = 1;
    } else false;
}
function CheckHelps2() {
    if (score > costScale) {
        divScale.classList.add("active");
        flagScale = 1;
    } else false;
}

divHelper.onclick = () => {
    if (flagHelps == 1) {
        score = score - costHelper;
        helper += 10;
        cost += 1000;
        console.log(cost);
        flagHelps = 0;
        helperCostString.innerHTML = `Cost: ${costHelper}`;
        divHelper.classList.remove("active");
    } else return false;
}

divScale.onclick = () => {
    if (flagScale == 1) {
        score = score - costScale;
        scale += 0.5;
        costScale += 1000;
        flagScale = 0;
        flagHelps = 0;
        console.log(scale);
        scaleCostString.innerHTML = `Cost: ${costScale}`;
        divScale.classList.remove("active");
    } else return false;
}