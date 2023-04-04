let currencyElement = document.querySelector(".js-currency");
let plnElement = document.querySelector(".js-pln");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let resetElement = document.querySelector(".js-reset");

let USD = 4.46;
let EUR = 4.74;
let GBP = 5.32;

formElement.addEventListener("reset", () => {
    console.log(`Formularz został zresetowany`);
});

formElement.addEventListener("submit", (Event) => {
    Event.preventDefault();

    let currency = currencyElement.value;
    let pln = plnElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = pln / EUR;
            break;

        case "USD":
            result = pln / USD;
            break;

        case "GBP":
            result = pln / GBP;
            break;
    }

    resultElement.innerText = result.toFixed(2) + " " + currency;
});


