const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
<<<<<<< HEAD
const success = document.querySelector("#success");
=======
const succes = document.querySelector("#succes");
>>>>>>> 4d1874778901e596e7145f0e4099e427085a1277
const errorNodes = document.querySelectorAll(".error");

function validateForm() {
<<<<<<< HEAD
    if (nameInput.value.lenght < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
    }
}
=======
    console.log("success");

}
>>>>>>> 4d1874778901e596e7145f0e4099e427085a1277
