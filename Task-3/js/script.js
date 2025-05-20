alert("Hello TEJ!");


function increaseSamosaQuantity() {
  var samosaQuantity = document.getElementById("samosaQuantityValue").innerText;
  console.log(samosaQuantity);
  samosaQuantity++;
  document.getElementById("samosaQuantityValue").innerText = samosaQuantity;
}

function decreaseSamosaQuantity() {
  var samosaQuantity = document.getElementById("samosaQuantityValue").innerText;
  if (samosaQuantity > 0) {
    samosaQuantity--;
    document.getElementById("samosaQuantityValue").innerText = samosaQuantity;
  }
}

function increaseTeaQuantity() {
  var teaQuantity = document.getElementById("teaQuantityValue").innerText;
  console.log(teaQuantity);
  teaQuantity++;
  document.getElementById("teaQuantityValue").innerText = teaQuantity;
}
function decreaseTeaQuantity() {
  var teaQuantity = document.getElementById("teaQuantityValue").innerText;
  if (teaQuantity > 0) {
    teaQuantity--;
    document.getElementById("teaQuantityValue").innerText = teaQuantity;
  }
}

function CalculateGrandTotal(){
    var samosaQuantity = document.getElementById("samosaQuantityValue").innerText;
    var teaQuantity = document.getElementById("teaQuantityValue").innerText;
    var samosaprice = document.getElementById("samosaPrice").value || 0;
    var teaprice = document.getElementById("teaPrice").value || 0;
    console.log(samosaQuantity, teaQuantity, samosaprice, teaprice);
    const samosaTotal = samosaQuantity * samosaprice;
    const teaTotal = teaQuantity * teaprice;
    document.getElementById("totalSamosaPrice").innerText = samosaTotal;
    document.getElementById("totalTeaPrice").innerText = teaTotal;
    const totalPrice = samosaTotal + teaTotal;
    document.getElementById("TotalPrice").innerText = totalPrice;
    const vat = totalPrice * 0.13;
    document.getElementById("vatAmount").innerText = vat.toFixed(2);
    const tip = totalPrice * 0.1;
    document.getElementById("tipAmount").innerText = tip.toFixed(2);
    const grandTotal = totalPrice + vat + tip;
    document.getElementById("grandTotal").innerText = grandTotal;
    console.log(samosaTotal, teaTotal, totalPrice, vat, tip, grandTotal);
}