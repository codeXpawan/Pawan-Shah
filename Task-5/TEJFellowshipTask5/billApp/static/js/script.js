alert("Hello TEJ!");


function increaseSamosaQuantity() {
  var samosaQuantity = document.getElementById("samosaQuantityValue").value;
  console.log(samosaQuantity);
  samosaQuantity++;
  document.getElementById("samosaQuantityValue").value = samosaQuantity;
  CalculateGrandTotal();
}

function decreaseSamosaQuantity() {
  var samosaQuantity = document.getElementById("samosaQuantityValue").value;
  if (samosaQuantity > 0) {
    samosaQuantity--;
    document.getElementById("samosaQuantityValue").value = samosaQuantity;
    CalculateGrandTotal();
  }
}

function increaseTeaQuantity() {
  var teaQuantity = document.getElementById("teaQuantityValue").value;
  console.log(teaQuantity);
  teaQuantity++;
  document.getElementById("teaQuantityValue").value = teaQuantity;
  CalculateGrandTotal();
}
function decreaseTeaQuantity() {
  var teaQuantity = document.getElementById("teaQuantityValue").value;
  if (teaQuantity > 0) {
    teaQuantity--;
    document.getElementById("teaQuantityValue").value = teaQuantity;
    CalculateGrandTotal();
  }
}

function CalculateGrandTotal(){
    var samosaQuantity = document.getElementById("samosaQuantityValue").value;
    var teaQuantity = document.getElementById("teaQuantityValue").value;
    var samosaprice = document.getElementById("samosaPrice").value || 0;
    var teaprice = document.getElementById("teaPrice").value || 0;
    console.log(samosaQuantity, teaQuantity, samosaprice, teaprice);
    const samosaTotal = samosaQuantity * samosaprice;
    const teaTotal = teaQuantity * teaprice;
    document.getElementById("totalSamosaPrice").innerText = samosaTotal;
    document.getElementById("totalTeaPrice").innerText = teaTotal;
    const totalPrice = samosaTotal + teaTotal;
    document.getElementById("TotalPrice").innerText = totalPrice.toFixed(2);
    const vat = totalPrice * 0.13;
    document.getElementById("vatAmount").innerText = vat.toFixed(2);
    const tip = totalPrice * 0.1;
    document.getElementById("tipAmount").innerText = tip.toFixed(2);
    const grandTotal = totalPrice + vat + tip;
    document.getElementById("grandTotal").innerText = grandTotal.toFixed(2);
    console.log(samosaTotal, teaTotal, totalPrice, vat, tip, grandTotal);
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const trimmed = cookie.trim();
      if (trimmed.startsWith(name + '=')) {
        cookieValue = decodeURIComponent(trimmed.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const csrftoken = getCookie('csrftoken');


function SubmitBill(){
    const grandTotal = document.getElementById("grandTotal").innerText;
    if (grandTotal == 0) {
        console.log("Please calculate the grand total before submitting.");
        return;
    }
    fetch('/submitBill', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({
            'grandTotal': grandTotal
        })
    })
    .then(response => {
        if (response.ok) {
            // alert("Bill submitted successfully!");
            console.log("response", response);
            return response.json();
            // window.location.href = `/submit/?bill_id=${encodeURIComponent(response.bill_id)}`;
        } else {
            alert("Error submitting bill.");
        }
    }).then(data => {
        console.log("data", data);
        if (data && data.bill_id) {
            window.location.href = `/submit/${data.bill_id}`;
        } else {
            alert("Error: Bill ID not found in response.");
        }
    }).catch(error => {
        console.error('Error:', error);
        alert("Error submitting bill.");
    });
}

const samosaInput = document.getElementById("samosaPrice");
const teaInput = document.getElementById("teaPrice");
samosaInput.addEventListener("input", function() {
    CalculateGrandTotal();
});
teaInput.addEventListener("input", function() {
    CalculateGrandTotal();
});

const samosaQuantityInput = document.getElementById("samosaQuantityValue");
samosaQuantityInput.addEventListener("input", function() {
    CalculateGrandTotal();
});
const teaQuantityInput = document.getElementById("teaQuantityValue");
teaQuantityInput.addEventListener("input", function() {
    CalculateGrandTotal();
});