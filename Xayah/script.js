let xayah = {
    hp: 100,
    mp: 100
};

let rakan = {
    hp: 100,
    mp: 100
};

// Items

function healthPot(use) {
    use.hp += 30;
    if (use.hp > 100) {
        use.hp = 100;
    }
}

function manaPot(use) {
    use.mp += 25;
    if (use.mp > 100) {
        use.mp = 100;
    }
}

// Xayah's skills

function doubleDagger(use, take) {
    if (use.mp < 20) {
        alert("Not Enough Mana");
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
        display();
        hide();
    }
}

function livingPlumage(use, take) {
    if (use.mp < 30) {
        alert("Not Enough Mana");
        use.mp -= 10;
    } else {
        use.mp -= 30;
        use.hp += 35;

        if (use.hp > 100) {
            use.hp = 100;
        }
        display();
        hide();
    }
}

function bladeCall(use, take) {
    if (use.mp < 30) {
        alert("Not Enough Mana");
    } else {
        use.mp -= 30;
        take.hp -= 35;

        if (take.hp < 0) {
            take.hp = 0;
        }
        display();
        hide();
    }
}

function featherStorm(use, take) {
    if (use.mp < 70) {
        alert("Not Enough Mana");
    } else {
        use.mp -= 70;
        take.hp -= 55;

        if (take.hp < 0) {
            take.hp = 0;
        }
        display();
        hide();
    }
}

// Rakan's skills

function gleamingQuill(use, take) {
    if (use.mp < 20) {
        alert("Not Enough Mana");
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
        display();
        hide();
    }
}

function grandEntrance(use, take) {
    if (use.mp < 25) {
        alert("Not Enough Mana");
    } else {
        use.mp -= 25;
        take.hp -= 30;

        if (take.hp < 0) {
            take.hp = 0;
        }
        display();
        hide();
    }
}

function battleDance(use, take) {
    if (use.mp < 35) {
        alert("Not Enough Mana");
    } else {
        use.mp -= 35;
        use.hp += 45;

        if (use.hp > 100) {
            use.hp = 100;
        }
        display();
        hide();
    }
}

function quickness(use, take) {
    if (use.mp < 70) {
        alert("Not Enough Mana");
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
        display();
        hide();
    }
}

// Display

function display() {
    let rakanHptext = document.querySelector("#rakanhptext");
    let rakanMptext = document.querySelector("#rakanmptext");
    let xayahHptext = document.querySelector("#xayahhptext");
    let xayahMptext = document.querySelector("#xayahmptext");
    let xayahHpbar = document.querySelector("#xayahhpbar");
    let xayahMpbar = document.querySelector("#xayahmpbar");
    let rakanHpbar = document.querySelector("#rakanhpbar");
    let rakanMpbar = document.querySelector("#rakanmpbar");

    rakan.mp += 10;
    xayah.mp += 10;

    if (rakan.mp > 100) {
        rakan.mp = 100;
    }
    if (xayah.mp > 100) {
        xayah.mp = 100;
    }

    xayahHpbar.style.width = xayah.hp + "%";
    xayahMpbar.style.width = xayah.mp + "%";
    rakanHpbar.style.width = rakan.hp + "%";
    rakanMpbar.style.width = rakan.mp + "%";

    rakanHptext.textContent = "HP: " + rakan.hp + " / 100";
    rakanMptext.textContent = "MP: " + rakan.mp + " / 100";
    xayahHptext.textContent = "HP: " + xayah.hp + " / 100";
    xayahMptext.textContent = "MP: " + xayah.mp + " / 100";
}

function gameEnd() {
    if (xayah.hp == 0) {
        let defeat = document.querySelector("#defeat");
        defeat.style.display = "block";
        defeat.style.animationName = "victory";
        defeat.addEventListener("click", function() {
            location.href = "../index.html";
        });
    }

    if (rakan.hp == 0) {
        let victory = document.querySelector("#victory");
        victory.style.display = "block";
        victory.style.animationName = "victory";
        victory.addEventListener("click", function() {
            location.href = "../index.html";
        });
    }
}

function hide() {
    let menu = document.querySelector("#menuXayah");
    menu.style.display = "flex";
    skills.style.display = "none";
    items.style.display = "none";
}

// Event

let menuXayah1 = document.querySelector("#menuXayah1");
menuXayah1.addEventListener("click", function() {
    let menu = document.querySelector("#menuXayah");
    let skills = document.querySelector("#skills");
    menu.style.display = "none";
    skills.style.display = "flex";
});

let menuXayah2 = document.querySelector("#menuXayah2");
menuXayah2.addEventListener("click", function() {
    let menu = document.querySelector("#menuXayah");
    let items = document.querySelector("#items");
    menu.style.display = "none";
    items.style.display = "flex";
});

document.body.addEventListener("keypress", function() {
    if (event.keyCode == "32") {
        hide();
    }
});

let itemhp = document.querySelector("#itemhp");
itemhp.addEventListener("click", function() {
    healthPot(xayah);
    display();
    hide();
});

let itemmp = document.querySelector("#itemmp");
itemmp.addEventListener("click", function() {
    manaPot(xayah);
    display();
    hide();
});

let skill1 = document.querySelector("#border1");
skill1.addEventListener("click", function() {
    doubleDagger(xayah, rakan);
    gameEnd();
});

let skill2 = document.querySelector("#border2");
skill2.addEventListener("click", function() {
    livingPlumage(xayah, rakan);
    gameEnd();
});

let skill3 = document.querySelector("#border3");
skill3.addEventListener("click", function() {
    bladeCall(xayah, rakan);
    gameEnd();
});

let skill4 = document.querySelector("#border4");
skill4.addEventListener("click", function() {
    featherStorm(xayah, rakan);
    gameEnd();
});