let player = {
    hp: 100,
    mp: 100
};

let enemy = {
    hp: 100,
    mp: 100
};

// Items

function healthPot(use) {
    use.hp += 30;
}

function manaPot(use) {
    use.mp += 30;
}

// Xayah's skills 

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

        if (use.hp > 100) {
            use.hp = 100;
        }
    }
}

function livingPlumage(use, take) {
    if (use.mp < 30) {
        alert("not enough mana");
    } else {
        use.mp -= 30;
        use.hp += 35;

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
        take.hp -= 35;

        if (take.hp < 0) {
            take.hp = 0;
        }
    }
}

function featherStorm(use, take) {
    if (use.mp < 70) {
        alert("not enough mana");
    } else {
        use.mp -= 70;
        take.hp -= 55;

        if (take.hp < 0) {
            take.hp = 0;
        }
    }
}

// Rakan's skills

function gleamingQuill(use, take) {
    if (use.mp < 20) {
        alert("not enough mana");
    } else {
        use.mp -= 20;
        take.hp -= 10;
        use.hp += 20;

        if (take.hp < 0) {
            take.hp = 0;
        }

        if (use.hp > 100) {
            use.hp = 100;
        }
    }
}

function grandEntrance(use, take) {
    if (use.mp < 25) {
        alert("not enough mana");
    } else {
        use.mp -= 25;
        take.hp -= 30;

        if (take.hp < 0) {
            take.hp = 0;
        }
    }
}

function battleDance(use, take) {
    if (use.mp < 35) {
        alert("not enough mana");
    } else {
        use.mp -= 35;
        use.hp += 45;

        if (use.hp > 100) {
            use.hp = 100;
        }
    }
}

function quickness(use, take) {
    if (use.mp < 70) {
        alert("not enough mana");
    } else {
        use.mp -= 70;
        take.hp -= 35;
        use.hp += 35;

        if (take.hp < 0) {
            take.hp = 0;
        }

        if (use.hp > 100) {
            use.hp = 100;
        }
    }
}

let menuRakan1 = document.querySelector("#menuRakan1");
menuRakan1.addEventListener("click", function() {
    let menu = document.querySelector("#menuRakan");
    let skills = document.querySelector("#skills");
    menu.style.display = "none";
    skills.style.display = "flex";
});

let menuRakan2 = document.querySelector("#menuRakan2");
menuRakan2.addEventListener("click", function() {
    let menu = document.querySelector("#menuRakan");
    let items = document.querySelector("#items");
    menu.style.display = "none";
    items.style.display = "flex";
});