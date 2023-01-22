var arr = JSON.parse(localStorage.getItem("mainDatabase")) || [];
displayTable(arr);

function displayTable(arr) {
    document.querySelector("tbody").innerHTML = "";
    arr.map(function (element, index) {
      var row = document.createElement("tr");
      var td1 = document.createElement("td");
      td1.textContent = element.fullName;
      var td2 = document.createElement("td");

      var address = "";
      var h = element.house;
      var lm = element.landmark;
      var ct = element.city;
      var st = element.state;
      var pin = element.pincode;
      address = h+", "+lm+", "+ct+", "+st+", "+pin;
      td2.textContent = address;

      var td3 = document.createElement("td");
      td3.textContent = element.mobile;

      var td4 = document.createElement("td");
      var pro = "";
      var p = "";

      if(element.product_List.length == 1){
        p = element.product_List[0] + " : " + element.size_List[0] + " : " + element.color_List[0] + " : " + element.quantity_List[0];
        td4.textContent = p;
      }
      else{
        for(var i=0; i<element.product_List.length; i++){
          pro = element.product_List[i] + " : " + element.size_List[i] + " : " + element.color_List[i] + " : " + element.quantity_List[i];
          pro = pro+" , "+pro;
        }
        td4.textContent = pro;
      }

      var td5 = document.createElement("td");
      td5.textContent = "Rs. "+element.total_Price;

      var td6 = document.createElement("td");
      td6.textContent = "Delete";
      td6.addEventListener("click", function () {
        deleteRow(index);
      });

      row.append(td1, td2, td3, td4, td5, td6);
      document.querySelector("tbody").append(row);
    });
}

function deleteRow(index) {
    arr.splice(index, 1);
    localStorage.setItem("mainDatabase", JSON.stringify(arr));
    displayTable(arr);
}

// city: "Thane"
// fullName: "Aniket"
// house: "Thane"
// landmark: "Thane"
// mobile: "8767956476"
// pincode: "400017"
// product_List: ["Solid Polo Classy Tshirt For Men"]
// quantity_List: [1]
// state: "Maharashtra"
// total_Price: 250