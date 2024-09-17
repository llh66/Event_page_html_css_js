


//Mock ticket info for testing
const ticketOptions = [
    {name: "ONE DAY PASS", price: 95},
    {name: "ALL ACCESS PASS", price: 274}
]

const ticketPriceSelector = document.querySelector("#input-ticket-type");

const ticketErrorMessageContainer = document.querySelector("#ticket-error-message-container");
const ticketErrorMessage = document.querySelector("#ticket-error-message");

const orderSummary = document.querySelector("#order-summary");

//js codes for ticket purchasing
const isInvalidCreditCardNumber = (creditCardNumber) => {
    if (creditCardNumber.length !== 6) {
        return true;
    }

    for (let digit of creditCardNumber) {
        if (isNaN(parseInt(digit))) {
            return true;
        }
    }

    return false;
}

const onPayPressed = () => {
    orderSummary.style.display = "none";
    ticketErrorMessageContainer.style.display = "none";

    const ticketOption = parseInt(ticketPriceSelector.value);
    const ticketQuantity = parseInt(document.querySelector("#input-ticket-quantity").value);
    const creditCardNumber = document.querySelector("#input-credit-card-number").value;

    if (isNaN(ticketOption) || ticketOption < 0 || ticketOption >= ticketOptions.length) {
        ticketErrorMessage.innerText = 'Ticket Option Error';
        ticketErrorMessageContainer.style.display = "";
    }
    else if (isNaN(ticketQuantity) || ticketQuantity < 0) {
        ticketErrorMessage.innerText = 'You must enter a minimum of 1 ticket!';
        ticketErrorMessageContainer.style.display = "";
    }
    else if (isInvalidCreditCardNumber(creditCardNumber)) {
        ticketErrorMessage.innerText = 'You must enter a six-digit credit card number!';
        ticketErrorMessageContainer.style.display = "";
    }
    else {
        const ticketPrice = ticketOptions[ticketOption].price;
        document.querySelector("#order-summary-ticket-price").innerText = ticketPrice.toFixed(2);

        document.querySelector("#order-summary-ticket-quantity").innerText = ticketQuantity;

        const ticketSubtotal = ticketQuantity*ticketPrice;
        document.querySelector("#order-summary-subtotal").innerText = ticketSubtotal.toFixed(2);

        const ticketTax = ticketSubtotal * 0.13;
        document.querySelector("#order-summary-tax").innerText = ticketTax.toFixed(2);

        const ticketFinalPrice = ticketSubtotal + ticketTax;
        document.querySelector("#order-summary-final-price").innerText = ticketFinalPrice.toFixed(2);

        orderSummary.style.display = "";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    orderSummary.style.display = "none";
    ticketErrorMessageContainer.style.display = "none";

    for (let i = 0; i < ticketOptions.length; i++){
        ticketPriceSelector.innerHTML += `<option value=${i}>${ticketOptions[i].name}</option>`
    }
});

document.querySelector("#btn-pay").addEventListener("click", onPayPressed);