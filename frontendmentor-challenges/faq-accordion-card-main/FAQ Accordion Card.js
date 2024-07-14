let arrow_1 = document.getElementById("arrow_1");
let arrow_2 = document.getElementById("arrow_2");
let arrow_3 = document.getElementById("arrow_3");
let arrow_4 = document.getElementById("arrow_4");
let arrow_5 = document.getElementById("arrow_5");
let p_1 = document.getElementById("p_1");
let p_2 = document.getElementById("p_2");
let p_3 = document.getElementById("p_3");
let p_4 = document.getElementById("p_4");
let p_5 = document.getElementById("p_5");

arrow_1.addEventListener("click", function () {
    arrow_1.style.transform = "rotate(180deg)";
    p_1.style.display = "block";
    arrow_1.addEventListener("click", function () {
        arrow_1.style.transform = "rotate(-180deg)";
        p_1.style.display = "none";
    });
});


arrow_2.addEventListener("click", function () {
    arrow_2.style.transform = "rotate(180deg)";
    p_2.style.display = "block";
    arrow_2.addEventListener("click", function () {
        arrow_2.style.transform = "rotate(-180deg)";
        p_2.style.display = "none";
    })
});
arrow_3.addEventListener("click", function () {
    arrow_3.style.transform = "rotate(180deg)";
    p_3.style.display = "block";
    arrow_3.addEventListener("click", function () {
        arrow_3.style.transform = "rotate(-180deg)";
        p_3.style.display = "none";
    })
});
arrow_4.addEventListener("click", function () {
    arrow_4.style.transform = "rotate(180deg)";
    p_4.style.display = "block";
    arrow_4.addEventListener("click", function () {
        arrow_4.style.transform = "rotate(-180deg)";
        p_4.style.display = "none";
    })
});
arrow_5.addEventListener("click", function () {
    arrow_5.style.transform = "rotate(180deg)";
    p_5.style.display = "block";
    arrow_5.addEventListener("click", function () {
        arrow_5.style.transform = "rotate(-180deg)";
        p_5.style.display = "none";
    })
});