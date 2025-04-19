function validateLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "" || password.length < 6) {
        document.getElementById("error-msg").innerText = "Invalid login.";
        return false;
    }
    sessionStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    window.location.href = "index.html";
    return false;
}
