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

let logs = document.querySelector("#logs");
logs.textContent += "\nThere is a 10MP regen at the end of each turn.\nUse \"Space Bar\" to back in menu.\nHave fun playing: Battle for Ionia !\n~~~"

function doubleDagger(use, take) {
    if (use.mp < 20) {
        alert("Not Enough Mana");
        manaPot(xayah);
        logs.textContent += "\nXayah use Mana Potion  MP+25";
        logs.scrollTop = logs.scrollHeight;
    } else {
        logs.textContent += "\nXayah use Double Dagger -20/+10     20";
        logs.scrollTop = logs.scrollHeight;
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
        alert("Not Enough Mana");
        manaPot(xayah);
        logs.textContent += "\nXayah use Mana Potion  MP+25";
        logs.scrollTop = logs.scrollHeight;
    } else {
        logs.textContent += "\nXayah use Living Plumage -0/+35     30";
        logs.scrollTop = logs.scrollHeight;
        use.mp -= 30;
        use.hp += 35;

        if (use.hp > 100) {
            use.hp = 100;
        }
    }
}

function bladeCall(use, take) {
    if (use.mp < 30) {
        alert("Not Enough Mana");
        manaPot(xayah);
        logs.textContent += "\nXayah use Mana Potion  MP+25";
        logs.scrollTop = logs.scrollHeight;
    } else {
        logs.textContent += "\nXayah use Bladecaller -35/+0        30";
        logs.scrollTop = logs.scrollHeight;
        use.mp -= 30;
        take.hp -= 35;

        if (take.hp < 0) {
            take.hp = 0;
        }
    }
}

function featherStorm(use, take) {
    if (use.mp < 60) {
        alert("Not Enough Mana");
        manaPot(xayah);
        logs.textContent += "\nXayah use Mana Potion  MP+25";
        logs.scrollTop = logs.scrollHeight;
    } else {
        logs.textContent += "\nXayah use Featherstorm -55/+15      60";
        logs.scrollTop = logs.scrollHeight;
        use.mp -= 60;
        take.hp -= 55;
        use.hp += 15;

        if (take.hp < 0) {
            take.hp = 0;
        }

        if (use.hp > 100) {
            use.hp = 100;
        }
    }
}

// Rakan's skills

function gleamingQuill(use, take) {
    if (use.mp < 20) {
        enemyAtk(use, take);
    } else {
        logs.textContent += "\nRakan use Gleaming Quill -10/+20    20";
        logs.scrollTop = logs.scrollHeight;
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
        enemyAtk(use, take);
    } else {
        logs.textContent += "\nRakan use Grand Entrance -30/+0     25";
        logs.scrollTop = logs.scrollHeight;
        use.mp -= 25;
        take.hp -= 30;

        if (take.hp < 0) {
            take.hp = 0;
        }
    }
}

function battleDance(use, take) {
    if (use.mp < 35) {
        enemyAtk(use, take);
    } else {
        logs.textContent += "\nRakan use Battle Dance -0/+45       35";
        logs.scrollTop = logs.scrollHeight;
        use.mp -= 35;
        use.hp += 45;

        if (use.hp > 100) {
            use.hp = 100;
        }
    }
}

function quickness(use, take) {
    if (use.mp < 60) {
        enemyAtk(use, take);
    } else {
        logs.textContent += "\nRakan use The Quickness -35/+35     60";
        logs.scrollTop = logs.scrollHeight;
        use.mp -= 60;
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function enemyAtk(use, take) {
    let array = [gleamingQuill,
        grandEntrance,
        battleDance,
        quickness
    ];
    let rand = getRandomInt(0, 4);

    if (rakan.mp < 35) {
        manaPot(rakan);
        logs.textContent += "\nRakan use Mana Potion  MP+25";
        logs.scrollTop = logs.scrollHeight;
    } else {
        array[rand](use, take);
    }
}

function regenMana() {
    rakan.mp += 10;
    xayah.mp += 10;

    if (rakan.mp > 100) {
        rakan.mp = 100;
    }
    if (xayah.mp > 100) {
        xayah.mp = 100;
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
    } else if (rakan.hp == 0) {
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

function turn(one, two) {
    hide();
    display();
    gameEnd();
    if (one.hp == 0 || two.hp == 0) {} else {
        enemyAtk(two, one);
        logs.textContent += "\n~~~";
        logs.scrollTop = logs.scrollHeight;
        regenMana();
        display();
        gameEnd();
    }
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
    logs.textContent += "\nXayah use Health Potion  HP+30";
    logs.scrollTop = logs.scrollHeight;
    turn(xayah, rakan);
});

let itemmp = document.querySelector("#itemmp");
itemmp.addEventListener("click", function() {
    manaPot(xayah);
    logs.textContent += "\nXayah use Mana Potion  MP+25";
    logs.scrollTop = logs.scrollHeight;
    turn(xayah, rakan);
});

let skill1 = document.querySelector("#border1");
skill1.addEventListener("click", function() {
    doubleDagger(xayah, rakan);
    turn(xayah, rakan);
});

let skill2 = document.querySelector("#border2");
skill2.addEventListener("click", function() {
    livingPlumage(xayah, rakan);
    turn(xayah, rakan);
});

let skill3 = document.querySelector("#border3");
skill3.addEventListener("click", function() {
    bladeCall(xayah, rakan);
    turn(xayah, rakan);
});

let skill4 = document.querySelector("#border4");
skill4.addEventListener("click", function() {
    featherStorm(xayah, rakan);
    turn(xayah, rakan);
});