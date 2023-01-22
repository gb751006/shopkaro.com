var debit = document.querySelector(".debit").addEventListener('click',clicked1);
var credit = document.querySelector(".credit").addEventListener('click',clicked2);
// var cod = document.querySelector(".cod").addEventListener('click',clicked3);

var count = 0;
var count1 = 0;
function clicked1(){
    document.querySelector(".debit").style.backgroundColor = "whitesmoke";
    if(document.querySelector(".debit").style.backgroundColor == "whitesmoke"){
        document.querySelector(".credit").style.backgroundColor = "white";
        // document.querySelector(".cod").style.backgroundColor = "white";
    }
    debitDetails();
}

function clicked2(){
    document.querySelector(".credit").style.backgroundColor = "whitesmoke";
    if(document.querySelector(".credit").style.backgroundColor == "whitesmoke"){
        document.querySelector(".debit").style.backgroundColor = "white";
        // document.querySelector(".cod").style.backgroundColor = "white";
    }
    creditDetails();
}


// function clicked3(){
//     document.querySelector(".cod").style.backgroundColor = "whitesmoke";
//     if(document.querySelector(".cod").style.backgroundColor == "whitesmoke"){
//         document.querySelector(".debit").style.backgroundColor = "white";
//         document.querySelector(".credit").style.backgroundColor = "white";
//     }
//     codDetails();
// }

var UserDatabase = JSON.parse(localStorage.getItem("UserDatabase"));

var paymentMethodDiv = document.querySelector(".paymentMethodDiv");
function debitDetails(){
    count++;
    var methodName = document.createElement('h3');
    methodName.setAttribute('class','methodName');
    methodName.textContent = "Debit Card";

    var methodDiv = document.createElement('div');
    methodDiv.setAttribute('class','methodDiv');

    var cardNumberDiv = document.createElement('div');
    cardNumberDiv.setAttribute('class','cardNumberDiv');

    var cardNumber = document.createElement('input')
    cardNumber.setAttribute('class','cardNumber');
    cardNumber.setAttribute('type','text');
    cardNumber.setAttribute('placeholder','Enter card number');

    cardNumberDiv.append(cardNumber);

    var cardDiv2 = document.createElement('div');
    cardDiv2.setAttribute('class','cardDiv2');

    var cardDateDiv = document.createElement('div');
    cardDateDiv.setAttribute('class','cardDateDiv');

    var cardMonth = document.createElement('input')
    cardMonth.setAttribute('class','cardMonth');
    cardMonth.setAttribute('type','text');
    cardMonth.setAttribute('placeholder','MM');

    var cardYear = document.createElement('input')
    cardYear.setAttribute('class','cardYear');
    cardYear.setAttribute('type','text');
    cardYear.setAttribute('placeholder','YY');

    var slash = document.createElement('span');
    slash.setAttribute('class','slash');
    slash.textContent = "/";

    cardDateDiv.append(cardMonth,slash,cardYear);

    var cardCvvDiv = document.createElement('div');
    cardCvvDiv.setAttribute('class','cardCvvDiv');

    var cardCvv = document.createElement('input')
    cardCvv.setAttribute('class','cardCvv');
    cardCvv.setAttribute('type','password');
    cardCvv.setAttribute('placeholder','CVV');

    cardCvvDiv.append(cardCvv);

    cardDiv2.append(cardDateDiv,cardCvvDiv);

    var cardNameDiv = document.createElement('div');
    cardNameDiv.setAttribute('class','cardNameDiv');

    var cardName = document.createElement('input')
    cardName.setAttribute('class','cardName');
    cardName.setAttribute('type','text');
    cardName.setAttribute('placeholder','Enter name on card');

    cardNameDiv.append(cardName);

    var cardPayDiv = document.createElement('div');
    cardPayDiv.setAttribute('class','cardPayDiv');

    var cardPay = document.createElement('button');
    cardPay.setAttribute('class','cardPay');
    cardPay.textContent = "Pay";
    cardPay.addEventListener('click',checkPay);
    var cname = UserDatabase[0].fullName;

    function checkPay(){
        if(cardNumber.value == "1111 2222 3333 4444" && cardMonth.value == "12" && cardYear.value == "22" && cardCvv.value == "123" && cardName.value == cname){
            window.location.href = "paymentotp.html";
        }
        else{
            alert("Your card information is invalid");
        }
    }

    cardPayDiv.append(cardPay);

    methodDiv.append(cardNumberDiv,cardDiv2,cardNameDiv,cardPayDiv);

    var securityImg = document.createElement('img');
    securityImg.setAttribute('class','securityImg');
    securityImg.setAttribute('src',"https://pay.momoe.in/payment/img/security_logos.png");

    paymentMethodDiv.append(methodName,methodDiv,securityImg);
    if(count1 > 1){
        document.querySelector(".methodName").remove();
        document.querySelector(".methodDiv").remove();
        document.querySelector(".securityImg").remove();
    }
    else if(count > 1 || count1 == 1){
        document.querySelector(".methodName").remove();
        document.querySelector(".methodDiv").remove();
        document.querySelector(".securityImg").remove();
    }
}

function creditDetails(){
    count1++;
    var methodName = document.createElement('h3');
    methodName.setAttribute('class','methodName');
    methodName.textContent = "Credit Card";

    var methodDiv = document.createElement('div');
    methodDiv.setAttribute('class','methodDiv');

    var cardNumberDiv = document.createElement('div');
    cardNumberDiv.setAttribute('class','cardNumberDiv');

    var cardNumber = document.createElement('input')
    cardNumber.setAttribute('class','cardNumber');
    cardNumber.setAttribute('type','text');
    cardNumber.setAttribute('placeholder','Enter card number');

    cardNumberDiv.append(cardNumber);

    var cardDiv2 = document.createElement('div');
    cardDiv2.setAttribute('class','cardDiv2');

    var cardDateDiv = document.createElement('div');
    cardDateDiv.setAttribute('class','cardDateDiv');

    var cardMonth = document.createElement('input')
    cardMonth.setAttribute('class','cardMonth');
    cardMonth.setAttribute('type','text');
    cardMonth.setAttribute('placeholder','MM');

    var cardYear = document.createElement('input')
    cardYear.setAttribute('class','cardYear');
    cardYear.setAttribute('type','text');
    cardYear.setAttribute('placeholder','YY');

    var slash = document.createElement('span');
    slash.setAttribute('class','slash');
    slash.textContent = "/";

    cardDateDiv.append(cardMonth,slash,cardYear);

    var cardCvvDiv = document.createElement('div');
    cardCvvDiv.setAttribute('class','cardCvvDiv');

    var cardCvv = document.createElement('input')
    cardCvv.setAttribute('class','cardCvv');
    cardCvv.setAttribute('type','text');
    cardCvv.setAttribute('placeholder','CVV');

    cardCvvDiv.append(cardCvv);

    cardDiv2.append(cardDateDiv,cardCvvDiv);

    var cardNameDiv = document.createElement('div');
    cardNameDiv.setAttribute('class','cardNameDiv');

    var cardName = document.createElement('input')
    cardName.setAttribute('class','cardName');
    cardName.setAttribute('type','text');
    cardName.setAttribute('placeholder','Enter name on card');

    cardNameDiv.append(cardName);

    var cardPayDiv = document.createElement('div');
    cardPayDiv.setAttribute('class','cardPayDiv');

    var cardPay = document.createElement('button');
    cardPay.setAttribute('class','cardPay');
    cardPay.textContent = "Pay";
    cardPay.addEventListener('click',checkPay);
    var cname = UserDatabase[0].fullName;

    function checkPay(){
        if(cardNumber.value == "1111 2222 3333 4444" && cardMonth.value == "12" && cardYear.value == "22" && cardCvv.value == "123" && cardName.value == cname){
            window.location.href = "paymentotp.html";
        }
        else{
            alert("Your card information is invalid");
        }
    }

    cardPayDiv.append(cardPay);

    methodDiv.append(cardNumberDiv,cardDiv2,cardNameDiv,cardPayDiv);

    var securityImg = document.createElement('img');
    securityImg.setAttribute('class','securityImg');
    securityImg.setAttribute('src',"https://pay.momoe.in/payment/img/security_logos.png");

    paymentMethodDiv.append(methodName,methodDiv,securityImg);

    if(count > 1){
        document.querySelector(".methodName").remove();
        document.querySelector(".methodDiv").remove();
        document.querySelector(".securityImg").remove();
    }
    else if(count1 > 1 || count1 == 1){
        document.querySelector(".methodName").remove();
        document.querySelector(".methodDiv").remove();
        document.querySelector(".securityImg").remove();
    }
}

var arrow = document.querySelector('.arrow');
arrow.addEventListener('click',backTo);

function backTo(){
    window.location.href = "address.html";
}







