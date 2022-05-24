const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


function validateForm() {

    clearMessage();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Dette felt skal udfyldes";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Indtast venligst en gyldig email adresse";
        email.classList.add("error-border");
        errorFlag = true;

    }

    if (message.value.length < 1) {
        errorNodes[2].innerText = "Dette felt skal udfyldes";
        message.classList.add("error-border");
        errorFlag = true;

    }

    if (!errorFlag) {
        success.innerText = "Tak, din besked er modtaget";
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