document.querySelector("#showproduct").addEventListener("click", function () {
  window.location.href = "adminviewprod.html";
});
  
// productpage

document.querySelector("#productpage").addEventListener("click", function () {
  window.location.href = "product.html";
});

var arrofobj = JSON.parse(localStorage.getItem("lsproductdetails")) || [];

//console.log("Test");

document
  .querySelector("#addproductfrm")
  .addEventListener("submit", clicksubmitfunction);

function clicksubmitfunction(event) {
  event.preventDefault();
  console.log("Test");

  //catch the value of inputs
  var prodname = document.querySelector("#itemName").value;
  var prodmrp = document.querySelector("#itemMrp").value;
  var proddiscount = document.querySelector("#itemDiscount").value;
  var prodcolor = document.querySelector("#itemColor").value;
  var prodbrand = document.querySelector("#itemBrand").value;
  var prodsize = document.querySelector("#itemSize").value;
  var prodimage = document.querySelector("#itemimg").value;

  var prodprice = prodmrp - (prodmrp * proddiscount) / 100;

  prodprice = Math.floor(prodprice);

  var obj = {
    name: prodname,
    imgURL: prodimage,
    mrp: prodmrp,
    discount: proddiscount,
    price: prodprice,
    color_family: prodcolor,
    brand: prodbrand,
    size: prodsize,
  };

  //console.log(obj);

  arrofobj.push(obj);
  //console.log(arrofobj);

  localStorage.setItem("lsproductdetails", JSON.stringify(arrofobj));
}

var orderdetails = document.querySelector("#orderdetails");
orderdetails.addEventListener('click',orderData);

function orderData(){
  window.location.href = "adminorder.html";
}
