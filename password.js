// ===============================
// CHANGE THIS PASSWORD
// ===============================

const correctPassword = "Pragati@1502";


// ===============================
// GET ELEMENTS
// ===============================

const passwordInput = document.getElementById("password");
const message = document.getElementById("message");


// Allow Enter key

passwordInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        checkPassword();

    }

});


// ===============================
// CHECK PASSWORD
// ===============================

function checkPassword() {

    const enteredPassword = passwordInput.value.trim();

    // Correct Password

    if (enteredPassword === correctPassword) {

        message.style.color = "#2ecc71";

        message.innerHTML = "❤️ Correct Password... Opening your surprise...";

        document.body.style.transition = "opacity 1s";

        document.body.style.opacity = "0";

        setTimeout(function () {

            window.location.href = "index.html";

        }, 1000);

    }

    // Wrong Password

    else {

        message.style.color = "#ff4d6d";

        message.innerHTML = "❌ Wrong Password";

        passwordInput.value = "";

        passwordInput.focus();

        passwordInput.classList.remove("shake");

        void passwordInput.offsetWidth;

        passwordInput.classList.add("shake");

    }

}
