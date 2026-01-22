// ================================
// Day 05 – JavaScript Validation
// ================================


// ================================
// Validation Functions
// ================================

// Empty validation
function isEmpty(value) {
    if (value === "" || value === null || value === undefined) {
        return true;
    }
    return false;
}

// Length validation
function minLength(value, length) {
    if (value.length < length) {
        return false;
    }
    return true;
}

// Type validation (number check)
function isNumber(value) {
    if (isNaN(value)) {
        return false;
    }
    return true;
}

// Email format validation (basic)
function isValidEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return true;
    }
    return false;
}

// Range validation
function isValidAge(age) {
    if (age > 0 && age <= 100) {
        return true;
    }
    return false;
}


// ================================
// Input Handling
// ================================

function getUserData() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value.trim();
    let password = document.getElementById("password").value.trim();

    validateUserData(username, email, age, password);
}


// ================================
// Main Validation Logic
// ================================

function validateUserData(username, email, age, password) {

    // Username validation
    if (isEmpty(username)) {
        console.log("Error: Username cannot be empty");
        alert("Username cannot be empty");
        return;
    }

    // Email validation
    if (isEmpty(email)) {
        console.log("Error: Email cannot be empty");
        alert("Email cannot be empty");
        return;
    }

    if (!isValidEmail(email)) {
        console.log("Error: Invalid email format");
        alert("Invalid email format");
        return;
    }

    // Age validation
    if (isEmpty(age)) {
        console.log("Error: Age cannot be empty");
        alert("Age cannot be empty");
        return;
    }

    if (!isNumber(age)) {
        console.log("Error: Age must be a number");
        alert("Age must be a number");
        return;
    }

    if (!isValidAge(age)) {
        console.log("Error: Age must be between 1 and 100");
        alert("Age must be between 1 and 100");
        return;
    }

    // Password validation
    if (isEmpty(password)) {
        console.log("Error: Password cannot be empty");
        alert("Password cannot be empty");
        return;
    }

    if (!minLength(password, 6)) {
        console.log("Error: Password must be at least 6 characters");
        alert("Password must be at least 6 characters");
        return;
    }

    // If all validations pass
    console.log("Validation Successful ✅");
    console.log("User data is valid and accepted");

    alert("Validation Successful ✅\nUser data is valid!");
}
