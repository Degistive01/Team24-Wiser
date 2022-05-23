const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


function validateForm() {

    clearMessage();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Udfylt venligst Navn";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Skriv korrekt Email";
        email.classList.add("error-border");
        errorFlag = true;

    }

    if (message.value.length < 1) {
        errorNodes[2].innerText = "Skriv venligst din Besked";
        message.classList.add("error-border");
        errorFlag = true;

    }
    if (!errorFlag) {
        success.innerText = "Tak din besked er modtaget!";
    }
}

function clearMessage() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");


}

function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}