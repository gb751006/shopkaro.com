var arrofobj = [
  {
    imgURL:
      "https://cdn.shopclues.com/images1/thumbnails/115450/280/1/152764290-115450505-1633695681.jpg",
    name: "OAKMANS Men's Regular Fit Solid T-Shirt Black Size 2XL",
    price: 499,
    discount: 52,
    mrp: 1049,
    brand: "okamans",
    color_family: "Black",
  },
  {
    imgURL:
      "https://cdn.shopclues.com/images1/thumbnails/115447/280/1/152763362-115447347-1633666744.jpg",
    name: "OAKMANS Men's Regular Fit  Solid T-Shirt Black Size 2XL",
    price: 429,
    discount: 57,
    mrp: 999,
    brand: "okamans",
    color_family: "Black",
  },
  {
    imgURL:
      "https://cdn.shopclues.com/images1/thumbnails/114577/280/1/152469791-114577797-1625499984.jpg",
    name: "29K Men Black with orange and white lines Round Neck T-",
    price: 386,
    discount: 45,
    mrp: 699,
    brand: "29K",
    color_family: "Black",
  },
  {
    imgURL:
      "https://cdn.shopclues.com/images1/thumbnails/114604/280/1/152490260-114604641-1625652916.jpg",
    name: "Odoky Olive Black &Orange Round Neck T-Shirt For Men",
    price: 299,
    discount: 70,
    mrp: 999,
    brand: "odoky",
    color_family: "Multicolor",
  },
  {
    imgURL:
      "https://cdn.shopclues.com/images1/thumbnails/114578/280/1/152470915-114578930-1625501717.jpg",
    name: "29K Men Charcoal Grey  Mustard Yellow Colourblocked Rou",
    price: 386,
    discount: 57,
    mrp: 899,
    brand: "29K",
    color_family: "Mustard",
  },
  {
    imgURL:
      "https://cdn.shopclues.com/images1/thumbnails/114370/280/1/152379987-114370476-1664472873.jpg",
    name: "Smiley Sky Blue Round Neck T-Shirt For Men",
    price: 199,
    discount: 80,
    mrp: 999,
    brand: "Smiley Sky",
    color_family: "Blue",
  },
  {
    imgURL:
      "https://cdn.shopclues.com/images1/thumbnails/95971/280/1/143127435-95971174-1653775193.jpg",
    name: "BrainBell Casual Double Shade T-shirt For Men",
    price: 295,
    discount: 63,
    mrp: 295,
    brand: "BrainBell",
    color_family: "Multicolor",
  },
  {
    imgURL:
      "https://cdn.shopclues.com/images1/thumbnails/99738/280/1/145797985-99738125-1556899919.jpg",
    name: "Odoky Multicolor Cotton Color Block Round Neck T-Shirt ",
    price: 349,
    discount: 83,
    mrp: 1999,
    brand: "Odoky",
    color_family: "Multicolor",
  },
  {
    imgURL:
      "https://cdn.shopclues.com/images1/thumbnails/115450/280/1/152764290-115450505-1633695681.jpg",
    name: "Glito Multicolor Round Neck Stylish Slim Fit Half Sleev",
    price: 385,
    discount: 61,
    mrp: 999,
    brand: "Glito",
    color_family: "Black",
  },
];
console.log(arrofobj);

//Filtering Function

//High to low
document.querySelector("#high").addEventListener("change", hightolowfunction);

function hightolowfunction() {
  if (this.checked) {
    arrofobj.sort(function (a, b) {
      return b.price - a.price;
    });
    displayUi(arrofobj);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//low to high
document.querySelector("#low").addEventListener("change", lowtohighfunction);

function lowtohighfunction() {
  if (this.checked) {
    arrofobj.sort(function (a, b) {
      return a.price - b.price;
    });
    displayUi(arrofobj);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

displayUi(arrofobj);

//All Products

document.querySelector("#all").addEventListener("change", allprioductfun);

function allprioductfun() {
  arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
  displayUi(arrofobj);
  console.log("Test");
}

//Price bello 499
document.querySelector("#below499").addEventListener("change", below499fun);

function below499fun() {
  if (this.checked) {
    var storearr1 = arrofobj.filter(function (el) {
      if (el.price <= 499) {
        return el;
      }
    });
    storearr1.sort(function (a, b) {
      return a.price - b.price;
    });
    displayUi(storearr1);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Price between 500 to 999

document.querySelector("#p500to999").addEventListener("change", below999fun);

function below999fun() {
  if (this.checked) {
    var storearr2 = arrofobj.filter(function (el) {
      if (el.price >= 500 && el.price <= 999) {
        return el;
      }
    });
    storearr2.sort(function (a, b) {
      return a.price - b.price;
    });
    displayUi(storearr2);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Price between 1000 and 1999

document.querySelector("#p1000to1999").addEventListener("change", below1999fun);

function below1999fun() {
  if (this.checked) {
    var storearr3 = arrofobj.filter(function (el) {
      if (el.price >= 1000 && el.price <= 1999) {
        return el;
      }
    });
    storearr3.sort(function (a, b) {
      return a.price - b.price;
    });
    displayUi(storearr3);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Price above 2000

document.querySelector("#p2000").addEventListener("change", above2000fun);

function above2000fun() {
  if (this.checked) {
    var storearr4 = arrofobj.filter(function (el) {
      if (el.price >= 2000) {
        return el;
      }
    });
    storearr4.sort(function (a, b) {
      return a.price - b.price;
    });
    displayUi(storearr4);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Discount upto 20%

document.querySelector("#upto20").addEventListener("change", disupto20);

function disupto20() {
  if (this.checked) {
    var storearrdis1 = arrofobj.filter(function (el) {
      if (el.discount <= 20) {
        return el;
      }
    });
    storearrdis1.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrdis1);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Discount upto 50%
document.querySelector("#upto50").addEventListener("change", disupto50);

function disupto50() {
  if (this.checked) {
    var storearrdis2 = arrofobj.filter(function (el) {
      if (el.discount > 20 && el.discount <= 50) {
        return el;
      }
    });
    storearrdis2.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrdis2);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Discount upto 70

document.querySelector("#upto70").addEventListener("change", disupto70);

function disupto70() {
  if (this.checked) {
    var storearrdis3 = arrofobj.filter(function (el) {
      if (el.discount > 50 && el.discount <= 70) {
        return el;
      }
    });
    storearrdis3.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrdis3);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Discount more than 70

document.querySelector("#more70").addEventListener("change", dismore70);

function dismore70() {
  if (this.checked) {
    var storearrdis4 = arrofobj.filter(function (el) {
      if (el.discount > 70) {
        return el;
      }
    });
    storearrdis4.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrdis4);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Filter based on brand HRX

document.querySelector("#hrx").addEventListener("change", hrxfun);

function hrxfun() {
  if (this.checked) {
    var storearrbrand1 = arrofobj.filter(function (el) {
      if (el.brand == "HRX") {
        return el;
      }
    });
    storearrbrand1.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrbrand1);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Filter based on brand WROGN

document.querySelector("#wrogn").addEventListener("change", wrognfun);

function wrognfun() {
  if (this.checked) {
    var storearrbrand2 = arrofobj.filter(function (el) {
      if (el.brand == "WROGN") {
        return el;
      }
    });
    storearrbrand2.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrbrand2);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Filter Moda Rapido
//modarapido
document.querySelector("#modarapido").addEventListener("change", modarapidofun);

function modarapidofun() {
  if (this.checked) {
    var storearrbrand3 = arrofobj.filter(function (el) {
      if (el.brand == "Moda Rapido") {
        return el;
      }
    });
    storearrbrand3.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrbrand3);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Filter Here & Now
//here&now

document.querySelector("#herenow").addEventListener("change", herenowfun);

function herenowfun() {
  if (this.checked) {
    var storearrbrand4 = arrofobj.filter(function (el) {
      if (el.brand == "HERE & NOW") {
        return el;
      }
    });
    storearrbrand4.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrbrand4);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Filter Roadster
//roadster

document.querySelector("#roadster").addEventListener("change", roadsterfun);

function roadsterfun() {
  if (this.checked) {
    var storearrbrand5 = arrofobj.filter(function (el) {
      if (el.brand == "Roadster") {
        return el;
      }
    });
    storearrbrand5.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrbrand5);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Filter by size
//sizes

document.querySelector("#sizes").addEventListener("change", sizesfun);

function sizesfun() {
  if (this.checked) {
    var storearrsize1 = arrofobj.filter(function (el) {
      if (el.size == "S") {
        return el;
      }
    });
    storearrsize1.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrsize1);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//sizem

document.querySelector("#sizem").addEventListener("change", sizemfun);

function sizemfun() {
  if (this.checked) {
    var storearrsize2 = arrofobj.filter(function (el) {
      if (el.size == "M") {
        return el;
      }
    });
    storearrsize2.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrsize2);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//sizel

document.querySelector("#sizel").addEventListener("change", sizelfun);

function sizelfun() {
  if (this.checked) {
    var storearrsize3 = arrofobj.filter(function (el) {
      if (el.size == "L") {
        return el;
      }
    });
    storearrsize3.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrsize3);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Size xl
document.querySelector("#sizexl").addEventListener("change", sizexlfun);

function sizexlfun() {
  if (this.checked) {
    var storearrsize4 = arrofobj.filter(function (el) {
      if (el.size == "XL") {
        return el;
      }
    });
    storearrsize4.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrsize4);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Filter by Color

//Red
document.querySelector("#cred").addEventListener("change", redfun);

function redfun() {
  if (this.checked) {
    var storearrclr1 = arrofobj.filter(function (el) {
      if (el.color_family == "red") {
        return el;
      }
    });
    storearrclr1.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrclr1);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//blue

document.querySelector("#cred").addEventListener("change", redfun);

function redfun() {
  if (this.checked) {
    var storearrclr1 = arrofobj.filter(function (el) {
      if (el.color_family == "red") {
        return el;
      }
    });
    storearrclr1.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrclr1);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Blue

document.querySelector("#cblue").addEventListener("change", bluefun);

function bluefun() {
  if (this.checked) {
    var storearrclr2 = arrofobj.filter(function (el) {
      if (el.color_family == "blue") {
        return el;
      }
    });
    storearrclr2.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrclr2);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Green
document.querySelector("#cgreen").addEventListener("change", greenfun);

function greenfun() {
  if (this.checked) {
    var storearrclr3 = arrofobj.filter(function (el) {
      if (el.color_family == "green") {
        return el;
      }
    });
    storearrclr3.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrclr3);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Black
document.querySelector("#cblack").addEventListener("change", blackfun);

function blackfun() {
  if (this.checked) {
    var storearrclr4 = arrofobj.filter(function (el) {
      if (el.color_family == "Black") {
        return el;
      }
    });
    storearrclr4.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrclr4);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//White

document.querySelector("#cwhite").addEventListener("change", whitefun);

function whitefun() {
  if (this.checked) {
    var storearrclr5 = arrofobj.filter(function (el) {
      if (el.color_family == "White") {
        return el;
      }
    });
    storearrclr5.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrclr5);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

function displayUi(arrofobj) {
  document.querySelector("#jsproduct").innerHTML = "";
  arrofobj.map(function (el, i) {
    //Create all html tags

    var singlemainbox = document.createElement("div");
    var likebox = document.createElement("div");
    var spanbox1 = document.createElement("span");
    spanbox1.setAttribute("id", "heart");
    var mainproductbox = document.createElement("div");
    mainproductbox.setAttribute("id", "prod");
    var innerimagetag = document.createElement("img");
    innerimagetag.setAttribute("src", el.imgURL);

    var namediv = document.createElement("div");
    namediv.textContent = el.name;
    var pricediv = document.createElement("div");
    pricediv.innerHTML = "₹" + el.price;
    var discountdiv = document.createElement("div");
    discountdiv.textContent = el.discount + "% Off";
    var mrpdiv = document.createElement("div");
    mrpdiv.textContent = "₹" + el.mrp;
    var spanbox2 = document.createElement("span");
    spanbox2.setAttribute("class", "fa fa-star checked");
    var spanbox3 = document.createElement("span");
    spanbox3.setAttribute("class", "fa fa-star checked");
    var spanbox4 = document.createElement("span");
    spanbox4.setAttribute("class", "fa fa-star checked");
    var spanbox5 = document.createElement("span");
    spanbox5.setAttribute("class", "fa fa-star");
    var spanbox6 = document.createElement("span");
    spanbox6.setAttribute("class", "fa fa-star");
    var freeshipingdiv = document.createElement("div");
    freeshipingdiv.textContent = "Free Shipping";
    var branddiv = document.createElement("div");
    branddiv.textContent = "Brand: " + el.brand;
    var colordiv = document.createElement("div");
    colordiv.textContent = "Color-Family: " + el.color_family;

    var stardiv = document.createElement("div");
    var firstimagediv = document.createElement("div");
    var innerimagediv = document.createElement("div");
    var priceanddisdiv = document.createElement("div");
    var lstdiv = document.createElement("div");
    //Append all the element
    lstdiv.append(branddiv, colordiv);
    stardiv.append(spanbox2, spanbox3, spanbox4, spanbox5, spanbox6);
    priceanddisdiv.append(pricediv, discountdiv);
    innerimagediv.append(innerimagetag);
    firstimagediv.append(innerimagediv);

    mainproductbox.append(
      firstimagediv,
      namediv,
      priceanddisdiv,
      mrpdiv,
      stardiv,
      freeshipingdiv,
      lstdiv
    );

    likebox.append(spanbox1);
    singlemainbox.append(likebox, mainproductbox);

    document.querySelector("#jsproduct").append(singlemainbox);

    //Click any single product
    singlemainbox.addEventListener("click", function () {
      //console.log(arrofobj[i]);
      var singledata = arrofobj[i];
      localStorage.setItem("SingleProd", JSON.stringify(singledata));
      window.location.href = "singleprod.html";
    });
  });

  document.querySelector("#logo").addEventListener("click", function () {
    window.location.href = "index.html";
  });
}

var cartArr = JSON.parse(localStorage.getItem("cartDatabase"));
var cartIcon = document.querySelector("#cartIcon");
cartIcon.addEventListener("click", cartPage);

function cartPage() {
  if (cartArr.length == 0) {
    window.location.href = "cart.html";
  } else {
    window.location.href = "cart1.html";
  }
}
