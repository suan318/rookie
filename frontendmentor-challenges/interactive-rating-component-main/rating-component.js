let score1 = document.getElementById("btn1");
let score2 = document.getElementById("btn2");
let score3 = document.getElementById("btn3");
let score4 = document.getElementById("btn4");
let score5 = document.getElementById("btn5");
let submit = document.getElementById("submit");
var submit_is_not_clicked = true;
var value=0;

if (submit_is_not_clicked) {
    score1.addEventListener("click", function () {
        score1.style.backgroundColor = "orange";
        value=+1;
    });

    score2.addEventListener("click", function () {
        score2.style.backgroundColor = "orange";
        value=+2;
    });

    score3.addEventListener("click", function () {
        score3.style.backgroundColor = "orange";
        value=+3;
    });

    score4.addEventListener("click", function () {
        score4.style.backgroundColor = "orange";
        value=+4;
    });

    score5.addEventListener("click", function () {
        score5.style.backgroundColor = "orange";
        value=+5;
    });
}



submit.addEventListener("click",function(){
    var event_value=document.getElementById("event_value");
    console.log(value);
    console.log(event_value);
    event_value.innerText="You slected "+ value +" out of 5!"
    const targetElement = document.getElementById("attribution");
    targetElement.scrollIntoView({
    behavior: 'smooth'
    });
});


