// ===============================
// STAFF CHAT LOGIN
// Version 1.0
// ===============================

const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const remember = document.getElementById("remember");
const errorMessage = document.getElementById("errorMessage");
const togglePassword = document.getElementById("togglePassword");

// -------------------------------
// Show / Hide Password
// -------------------------------

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.innerHTML = "🙈";
    } else {
        password.type = "password";
        togglePassword.innerHTML = "👁";
    }

});

// -------------------------------
// Remember Username
// -------------------------------

window.onload = () => {

    const savedUser = localStorage.getItem("project_username");

    if (savedUser) {

        username.value = savedUser;
        remember.checked = true;

    }

};

// -------------------------------
// Login
// -------------------------------

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    errorMessage.innerHTML = "";

    const user = username.value.trim();
    const pass = password.value.trim();

    if (user === "") {

        errorMessage.innerHTML = "Please enter username";
        username.focus();
        return;

    }

    if (pass === "") {

        errorMessage.innerHTML = "Please enter password";
        password.focus();
        return;

    }

    // Save username
    if (remember.checked) {

        localStorage.setItem("project_username", user);

    } else {

        localStorage.removeItem("project_username");

    }

    // Loading Effect
    const btn = document.querySelector(".login-btn");

    btn.innerHTML = "Logging in...";
    btn.disabled = true;

    setTimeout(() => {

        // Temporary Demo Login
        // Firebase Login പിന്നീട് ഇവിടെ വരും

        if (user === "admin" && pass === "123456") {

            btn.innerHTML = "Success ✓";

            setTimeout(() => {

                window.location.href = "index.html";

            }, 800);

        } else {

            btn.innerHTML = "LOGIN";
            btn.disabled = false;

            errorMessage.innerHTML =
                "Invalid Username or Password";

        }

    }, 1200);

});

// -------------------------------
// Enter Key
// -------------------------------

document.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        loginForm.requestSubmit();

    }

});