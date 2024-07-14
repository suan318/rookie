let scissors=document.getElementById("btnScissors");
let rock=document.getElementById("btnRock");
let paper=document.getElementById("btnPaper");

/*遊戲過程的情況*/
function playGame(userChoice,pcChoice){
    /*產生0-2的隨機數 來對應到 剪刀 石頭 布*/
    function getRandomInt(max){
        return Math.floor(Math.random()*max);
    };
    //電腦選擇出的拳
        pcChoice=getRandomInt(3);
    //遊戲過程及結果
    if(pcChoice===0){
        pcChoice="剪刀";
        if(userChoice===pcChoice){
            const result="平手";
            gameResult(userChoice,pcChoice,result);
        }
        else if(userChoice==="布"){
            const result="輸";
            gameResult(userChoice,pcChoice,result);
        }
        else {
            const result="贏";
            gameResult(userChoice,pcChoice,result);
        }
    };
    if(pcChoice===1){
        pcChoice="石頭";
        if(userChoice===pcChoice){
            const result="平手";
            gameResult(userChoice,pcChoice,result);
        }
        else if(userChoice==="剪刀"){
            const result="輸";
            gameResult(userChoice,pcChoice,result);
        }
        else{
            const result="贏";
            gameResult(userChoice,pcChoice,result);
        }  
    };
    if(pcChoice===2){
        pcChoice="布";
        if(userChoice===pcChoice){
            const result="平手";
            gameResult(userChoice,pcChoice,result);
        }
        else if(userChoice==="石頭"){
            const result="輸";
            gameResult(userChoice,pcChoice,result);
        }else{
            const result="贏";
            gameResult(userChoice,pcChoice,result);
        }
    };
}

scissors.addEventListener("click",function(){
    //使用者按下剪刀鈕
    const userChoice="剪刀"
    //設置一個pcChoice變數 存放電腦選擇出的拳
    let pcChoice="";
    //遊戲結果
    let result="";
    //呼叫函式
    playGame(userChoice,pcChoice,result); 
});
rock.addEventListener("click",function(){
    const userChoice="石頭"
    let pcChoice="";
    let result="";
    playGame(userChoice,pcChoice,result); 
});
paper.addEventListener("click",function(){
    const userChoice="布"
    let pcChoice="";
    let result="";
    playGame(userChoice,pcChoice,result); 
});

/*遊戲結果通知*/
function gameResult(userChoice,pcChoice,result){
    alert(`你出${userChoice} 電腦出${pcChoice}   ${result}了!`);
};