var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkBtnRef = document.querySelector("#check-button");
var outputBox = document.querySelector("#output-box");
var noOfNotes = document.querySelectorAll("#no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function showOutput(message) {
  outputBox.style.display = "block";
  outputBox.innerHTML = message;
}

function calculateChange(amount) {
  for(i=0; i<availableNotes.length; i++) {
    const changeCount = Math.trunc(amount / availableNotes[i]);
    amount = amount%availableNotes[i];
    noOfNotes[i].innerHTML = changeCount;
  }
}

function clickHandler() {
  var billamount = Number(billAmount.value);
  var cashgiven = Number(cashGiven.value);

  outputBox.style.display = "none";

  if(billamount > 0) {
    if(cashgiven >= billamount) {
      var returnamount = cashgiven - billamount;
      calculateChange(returnamount);
    } else {
      showOutput("Cash given should be greater than bill amount");
    }
  } else {
    showOutput(`The Bill Amount should be positive`);
  }
}

checkBtnRef.addEventListener("click", clickHandler);