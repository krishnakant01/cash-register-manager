const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn-check");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const denominations = [2000, 500, 100, 50, 10, 5, 1];

function validateBillAndCashAmount() {
    errorMessage.style.display = "none";
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            console.log(amountToBeReturned);
            calculateChange(amountToBeReturned);
        } else {
            showErrorMessage("Seems like you wanna wash plates!");

        }
    } else {
        showErrorMessage("Invalid Bill Amount");
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
checkButton.addEventListener("click", validateBillAndCashAmount)