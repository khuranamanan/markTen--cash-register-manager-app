var inputBillAmount = document.querySelector(".input-Bill-Amount");
var inputCashGiven = document.querySelector(".input-Cash-Given");
var btnCheck = document.querySelector("#btn-Check");
var errorMessage = document.querySelector(".error-message");
var outputNotes = document.querySelectorAll(".output-notes");

var currencyAvailable = [2000, 500, 100, 20, 10, 5, 1];

function error(msg){
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}

function hideMessage(){
    errorMessage.style.display = "none";
}

hideMessage();

btnCheck.addEventListener("click", () =>{
    hideMessage();
    if (inputBillAmount.value > 0){
        if (inputCashGiven.value >= inputBillAmount.value){
            var balanceAmount = inputCashGiven.value - inputBillAmount.value;
            notesToGive(balanceAmount);
        }
        else{
            error("Cash given should be greater or equal to Bill Amount")
        }
    } else {
        error("Enter a valid Bill Amount");
    }
});

function notesToGive(Amount){
    for(let i = 0; i < currencyAvailable.length; i++){
        var numberOfNotes = Math.trunc(Amount/currencyAvailable[i]);
        outputNotes[i].innerText = numberOfNotes;

        Amount = Amount % currencyAvailable[i];

    }
}