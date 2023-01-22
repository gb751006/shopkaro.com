
var proddetails = JSON.parse(localStorage.getItem("SingleProd"));
// console.log(proddetails);


// data = [
//     {
//         name: "Solid Polo Classy Tshirt For Men",
//         // imgURL: "https://cdn.shopclues.com/images1/thumbnails/109145/280/1/150573840-109145405-1597763799.jpg",
//         imgURL: "https://cdn.shopclues.com/images1/detailed/109145/150573840-109145405-1597763799.jpg",
//         mrp: "₹499",
//         discount: "50%",
//         color_family: "orange",
//         brand: "Polo",
//         size: 'S',
//     }
// ]
var AllArr = [];
// var obj = {
//     "name": "Solid Polo Classy Tshirt For Men",
//     "imgURL": "https://cdn.shopclues.com/images1/detailed/109145/150573840-109145405-1597763799.jpg",
//     "mrp": "99",
//     "discount": "68",
//     "price": 31.680000000000007,
//     "color_family": "red",
//     "brand": "WROGN",
//     "size": "M"
// }
AllArr.push(proddetails);
console.log(AllArr);
AllArr.map(function(elem){
    document.querySelector(".box1P1").textContent = elem.name;
    var image1 = document.querySelector("#topImage");
    image1.setAttribute("src", elem.imgURL);
    var image_bot_1 = document.querySelector("#topImage1");
    image_bot_1.setAttribute("src", elem.imgURL)
    var image_bot_2 = document.querySelector("#topImage2")
    image_bot_2.setAttribute("src", "https://cdn.shopclues.com/images1/detailed/109145/150573840-109145406-1597763800.jpg")
    var image_bot_3 = document.querySelector("#topImage3")
    image_bot_3.setAttribute("src", "https://cdn.shopclues.com/images1/detailed/109145/150573840-109145407-1597763801.jpg")
    document.querySelector("#MRP").textContent = elem.mrp;
    document.querySelector("#Discount").textContent = elem.discount;
    var rP = elem.price + 36;
    document.querySelector("#remPrice").textContent = rP;
    document.querySelector("#rPrice").textContent = rP;
    var dealpp = document.querySelectorAll("#DealPrice")
    for(var i=0;i<dealpp.length;i++){
        dealpp[i].textContent = elem.price;
    }
    document.querySelector("#ColorFamily").textContent = "Color Family :"+elem.color_family
    document.querySelector("#Brand").textContent = elem.brand;
    document.querySelector("#topImage1").addEventListener("click",function(){
        document.querySelector("#topImage").setAttribute("src",elem.imgURL)
    })
})

// -----------------------------------------------------------------------
// data.map(function (elem) {
//     // var image = document.createElement("img");
//     var image1 = document.querySelector("#topImage")
//     image1.setAttribute("src", elem.imgURL);
//     // document.querySelector(".topImageDiv").append(image)
//     // document.querySelector(".small-img-col").append(image)
//     var image_bot_1 = document.querySelector("#topImage1")
//     image_bot_1.setAttribute("src", "https://cdn.shopclues.com/images1/detailed/109145/150573840-109145405-1597763799.jpg")
//     var image_bot_2 = document.querySelector("#topImage2")
//     image_bot_2.setAttribute("src", "https://cdn.shopclues.com/images1/detailed/109145/150573840-109145406-1597763800.jpg")
//     var image_bot_3 = document.querySelector("#topImage3")
//     image_bot_3.setAttribute("src", "https://cdn.shopclues.com/images1/detailed/109145/150573840-109145407-1597763801.jpg")

// })
// ----------------------------------------------------------
// document.querySelector(".box1P1").textContent = "Hello world"
// var MainProductImage = document.querySelector("#topImage");
// var SubProductImage1 = document.querySelector("#topImage3");
// console.log(SubProductImage1)
// SubProductImage1.addEventListener("click",function(){
//     // MainProductImage.src = "https://cdn.shopclues.com/images1/detailed/109145/150573840-109145405-1597763799.jpg";
//     MainProductImage.setAttribute("src","https://cdn.shopclues.com/images1/detailed/109145/150573840-109145405-1597763799.jpg")
//     console.log("here");
// })
// ----------------------------------------------------------------------------
var MainProductImage = document.getElementById("topImage");
// console.log(MainProductImage)
var SubProductImage = document.getElementsByClassName("small-img-col");
// for(var i=0;i<SubProductImage.length;i++){
//     console.log(SubProductImage[i]);
// }
// SubProductImage[0].onclick = function(){
//     // MainProductImage = SubProductImage[0];
//     MainProductImage.setAttribute("src","https://cdn.shopclues.com/images1/detailed/109145/150573840-109145405-1597763799.jpg")
// }
SubProductImage[1].onclick = function(){
    // MainProductImage= SubProductImage[1];
    MainProductImage.setAttribute("src","https://cdn.shopclues.com/images1/detailed/109145/150573840-109145406-1597763800.jpg")
}
SubProductImage[2].onclick = function(){
    // MainProductImage = SubProductImage[2];
    MainProductImage.setAttribute("src","https://cdn.shopclues.com/images1/detailed/109145/150573840-109145407-1597763801.jpg")
    console.log(MainProductImage)
}
// -------------------------------------------------------------------------------------------

// by Sumeet
// add cart function and buy Now function

var addCart = document.querySelector(".addCart");
addCart.addEventListener('click',addCartData);

var buyNow = document.querySelector(".buyNow");
buyNow.addEventListener('click',buyProduct);

var cartArr = JSON.parse(localStorage.getItem("cartDatabase")) || [];

function addCartData(){
    cartArr.push(AllArr[0]);
    localStorage.setItem("cartDatabase",JSON.stringify(cartArr));
    alert("Added to Cart")
}

function buyProduct(){
    cartArr.push(AllArr[0]);
    localStorage.setItem("cartDatabase",JSON.stringify(cartArr));
    window.location.href = "cart1.html";
}

// cartIcon function

var cartIcon = document.querySelector("#cartIcon");
cartIcon.addEventListener("click", cartPage);

function cartPage(){
    if(cartArr.length == 0){
        window.location.href = "cart.html";
    }
    else{
        window.location.href = "cart1.html";
    }
}

document.querySelector("#logoimg").addEventListener("click",function(){
    window.location.href = "index.html";
})
