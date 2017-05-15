let player = {
    hp: 100,
    mp: 100
}

let enemy = {
    hp: 100,
    mp: 100
}

function doubleDagger(use, take) {
    if (use.mp < 20) {
        alert("not enough mana");
    } else {
        use.mp -= 20;
        take.hp -= 20;
        use.hp += 10;

        if (take.hp < 0) {
            take.hp = 0;
        }
    }
}

function livingPlumage(use, take) {
    if (use.mp < 30) {
        alert("not enough mana");
    } else {
        use.mp -= 30;
        use.hp += 40;

        if (use.hp > 100) {
            use.hp = 100;
        }
    }
}

function bladeCall(use, take) {
    if (use.mp < 30) {
        alert("not enough mana");
    } else {
        use.mp -= 30;
        take.hp -= 30;

        if (take.hp < 0) {
            take.hp = 0;
        }
    }
}

function featherStorm(use, take) {
    if (use.mp < 80) {
        alert("not enough mana");
    } else {
        use.mp -= 80;
        take.hp -= 60;

        if (take.hp < 0) {
            take.hp = 0;
        }
    }
}

function healthPot(use) {
    use.hp += 30;
}

function manaPot(use) {
    use.mp += 30;
}

let xayahLoad = document.querySelector("#xayah-load");
xayahLoad.addEventListener("click", function() {
    location.href = "xayah/index.html";
});

let rakanLoad = document.querySelector("#rakan-load");
rakanLoad.addEventListener("click", function() {
    location.href = "rakan/index.html";
});

let menu1 = document.querySelector("#menu1");
menu1.addEventListener("click", function() {
    let menu = document.querySelector("#menu");
    let skills = document.querySelector("#skills");
    menu.style.display = "none";
    skills.style.display = "flex";
});

let menu2 = document.querySelector("#menu2");
menu2.addEventListener("click", function() {
    let menu = document.querySelector("#menu");
    let items = document.querySelector("#items");
    menu.style.display = "none";
    items.style.display = "flex";
});