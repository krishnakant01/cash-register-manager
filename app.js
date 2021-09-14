const billAmountDiv = document.querySelector(".bill-amt-div");
const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#btn-next");
const cashGivenDiv = document.querySelector(".cash-given-div");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn-check");
const errorMessage = document.querySelector("#error-message");
const changeTable = document.querySelector(".change-table");
const returnAmountDisplay = document.querySelector("#return-change-display-div");
const returnAmountCaption = document.querySelector("#return-change-caption");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const denominations = [2000, 500, 100, 50, 10, 5, 1];

cashGivenDiv.style.display = "none";
checkButton.style.display = "none";
changeTable.style.display = "none";
errorMessage.style.display = "none";
returnAmountDisplay.style.display = "none";
returnAmountCaption.style.display = "none";

function validateBillAmount() {

    if (billAmount.value > 0) {
        errorMessage.style.display = "none";
        nextButton.style.display = "none";
        cashGivenDiv.style.display = "block";
        checkButton.style.display = "inline";

    } else {
        showErrorMessage("Enter a valid Bill Amount.");
    }
}

function validateCashAmount() {

    if (cashGiven.value > 0) {

        errorMessage.style.display = "none";

        if (Number(cashGiven.value) > Number(billAmount.value)) {

            const amountToBeReturned = cashGiven.value - billAmount.value;
            returnAmountDisplay.style.display = "block";
            returnAmountCaption.style.display = "block";
            returnAmountDisplay.style.color = "green";
            returnAmountDisplay.innerText ="₹ "+ amountToBeReturned;
            changeTable.style.display = "block";
            calculateChange(amountToBeReturned);

        } 
        else if(Number(cashGiven.value) === Number(billAmount.value)){
            errorMessage.style.color = "green";
            errorMessage.style.fontSize = "larger";
            showErrorMessage("You are all clear! No cash to return.");
        }
        else {
            errorMessage.style.color = "red";
            errorMessage.style.fontSize = "larger";
            showErrorMessage("Please give us more cash.");
        }
    } else {
        showErrorMessage("Enter a valid Cash Amount.");
    }
}

function calculateChange(amountToBeReturned) {

    for (let i = 0; i < denominations.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / denominations[i]);
        amountToBeReturned %= denominations[i];
        noOfNotes[i].innerText = numberOfNotes;
    }

}

function showErrorMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}
nextButton.addEventListener("click", validateBillAmount);
checkButton.addEventListener("click", validateCashAmount);