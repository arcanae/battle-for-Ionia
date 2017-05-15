let xayahLoad = document.querySelector("#xayah-load");
xayahLoad.addEventListener("click", function() {
    location.href = "xayah/index.html";
});

xayahLoad.addEventListener("mouseover", function() {
    let rebel = document.querySelector("#rebel");
    rebel.style.display = "inherit";
});
xayahLoad.addEventListener("mouseout", function() {
    let rebel = document.querySelector("#rebel");
    rebel.style.display = "none";
});

let rakanLoad = document.querySelector("#rakan-load");
rakanLoad.addEventListener("click", function() {
    location.href = "rakan/index.html";
});

rakanLoad.addEventListener("mouseover", function() {
    let charmer = document.querySelector("#charmer");
    charmer.style.display = "inherit";
});
rakanLoad.addEventListener("mouseout", function() {
    let charmer = document.querySelector("#charmer");
    charmer.style.display = "none";
});