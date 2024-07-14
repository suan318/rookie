/*
若使用getElementsByClassName需要在此陣列中選擇要定位的項目：
let total_button=document.getElementsByClassName("total")[0];
*/
/*------------------------------------------------------------------*/
/*取得購物車按鈕 總額&清空 的元素*/
let total_button=document.getElementById("total");
let cancel_button=document.getElementById("cancel");

/*取得 加入購物車 按鈕元素*/
let btn1=document.getElementsByClassName("btn1")[0];
let btn2=document.getElementsByClassName("btn2")[0];
let btn3=document.getElementsByClassName("btn3")[0];
let btn4=document.getElementsByClassName("btn4")[0];
let btn5=document.getElementsByClassName("btn5")[0];
let btn6=document.getElementsByClassName("btn6")[0];
let btn7=document.getElementsByClassName("btn7")[0];
let btn8=document.getElementsByClassName("btn8")[0];
let btn9=document.getElementsByClassName("btn9")[0];
let btn10=document.getElementsByClassName("btn10")[0];

/*設置物件cart用來存放多種資料變數*/
/*目前商品加總的金額起始金額為0*/

let cart = {
    totalPrice:0,
    productNum:0,

    product1:{
      name:"祖傳丫罵A鐵鍋",
      num:0,
      price:200
    },
    product2:{
        name:"穿了比麻豆還水牛仔褲",
        num:0,
        price:300
    },
    product3:{
        name:"多利多吃",
        num:0,
        price:150
    },
    product4:{
        name:"宵夜也想健康的麵",
        num:0,
        price:800
    },
    product5:{
        name:"不是綠帽的黑帽",
        num:0,
        price:600
    },
    product6:{
        name:"考試都滿分-勾勾鞋",
        num:0,
        price:750
    },
    product7:{
        name:"大神用過的手把",
        num:0,
        price:1000
    },
    product8:{
        name:"OOOREO",
        num:0,
        price:90
    },
    product9:{
        name:"精品手錶",
        num:0,
        price:5000
    },
    product10:{
        name:"肥宅生命的源泉",
        num:0,
        price:30
    },
};

//購物車狀態顯示
function updateCart(){
    document.querySelector(".cart").innerHTML=`
    已購買之商品總數:${cart.productNum}<br>
    ${cart.product1.name}:${cart.product1.num}<br>
    ${cart.product2.name}:${cart.product2.num}<br>
    ${cart.product3.name}:${cart.product3.num}<br>
    ${cart.product4.name}:${cart.product4.num}<br>
    ${cart.product5.name}:${cart.product5.num}<br>
    ${cart.product6.name}:${cart.product6.num}<br>
    ${cart.product7.name}:${cart.product7.num}<br>
    ${cart.product8.name}:${cart.product8.num}<br>
    ${cart.product9.name}:${cart.product9.num}<br>
    ${cart.product10.name}:${cart.product10.num}<br>
    已購買之商品總額:${cart.totalPrice}<br>
    ---------------------------------
    `
};

//每次運行前先取得之前localStorage內的json object
let cartNew=JSON.parse(localStorage.getItem("cart"));
//判斷localStorage內是否有資料
if(!cartNew){
    updateCart();
}else{
    cart=cartNew;
    updateCart();
};

/*購物車按鈕清空功能建置*/
cancel_button.addEventListener("click",function(){
    cart.totalPrice=0;
    cart.productNum=0;
    cart.product1.num=0;
    cart.product2.num=0;
    cart.product3.num=0;
    cart.product4.num=0;
    cart.product5.num=0;
    cart.product6.num=0;
    cart.product7.num=0;
    cart.product8.num=0;
    cart.product9.num=0;
    cart.product10.num=0;
    localStorage.removeItem("cart");
    document.querySelector(".cart").innerHTML=`
    已購買之商品總數:${cart.productNum}<br>
    ------------購物車已清空-----------
    `
});

/*當使用者按下加入購物車的按鈕後  商品總額增加*/
btn1.addEventListener("click",function(){
    cart.totalPrice+=200;
    cart.productNum++;
    cart.product1.num++;
    saveCart()
    updateCart();
});
btn2.addEventListener("click",function(){
    cart.totalPrice+=300;
    cart.productNum++;
    cart.product2.num++;
    saveCart()
    updateCart();
});
btn3.addEventListener("click",function(){
    cart.totalPrice+=150;
    cart.productNum++;
    cart.product3.num++;
    saveCart()
    updateCart();
});
btn4.addEventListener("click",function(){
    cart.totalPrice+=800;
    cart.productNum++;
    cart.product4.num++;
    saveCart()
    updateCart();
});
btn5.addEventListener("click",function(){
    cart.totalPrice+=600;
    cart.productNum++;
    cart.product5.num++;
    saveCart()
    updateCart();
});
btn6.addEventListener("click",function(){
    cart.totalPrice+=750;
    cart.productNum++;
    cart.product6.num++;
    saveCart()
    updateCart();
});
btn7.addEventListener("click",function(){
    cart.totalPrice+=1000;
    cart.productNum++;
    cart.product7.num++;
    saveCart()
    updateCart();
});
btn8.addEventListener("click",function(){
    cart.totalPrice+=90;
    cart.productNum++;
    cart.product8.num++;
    saveCart()
    updateCart();
});
btn9.addEventListener("click",function(){
    cart.totalPrice+=5000;
    cart.productNum++;
    cart.product9.num++;
    saveCart()
    updateCart();
});
btn10.addEventListener("click",function(){
    cart.totalPrice+=30;
    cart.productNum++;
    cart.product10.num++;
    saveCart()
    updateCart();
});

// localStorage.setItem("shoppingCart",cart);//  localStorage存入型態為object
// const shoppingCart=localStorage.getItem("shoppingCart");//  localStorage取出型態為string
//localStorage.removeItem(shoppingCart);

// let jsonCart=JSON.stringify(cart);//json格式儲存型態為string
// jsonCart=JSON.parse(jsonCart);//將json string轉換成js的object 但原物件中的function將在轉換中丟失
function saveCart(){
    const jsonCart=JSON.stringify(cart);
    localStorage.setItem("cart",jsonCart);
};
function getCartdata(){
    let shoppingCart=localStorage.getItem("cart");
    shoppingCart=JSON.parse(shoppingCart);
};














