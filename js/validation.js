function validateForm(event) {
    event.preventDefault();

    let valid = true;

    const email = document.forms["userForm"]["email"].value;
    const password = document.forms["userForm"]["password"].value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        valid = false;
    }

    if (valid) {
        alert("Form is valid!");
        document.forms["userForm"].submit();
    }

    return valid;

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function switchTheme(themeName) {
        const theme = document.body;
        if (themeName === 'dark') {
            theme.classList.remove('light-theme');
            theme.classList.add('dark-theme');
        } else {
            theme.classList.remove('dark-theme');
            theme.classList.add('light-theme');
        }
    }
}
