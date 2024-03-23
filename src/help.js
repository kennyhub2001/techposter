document.getElementById("helpform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (validateUsername(username) && validateEmail(email) && validatePassword(password) && validateMessage(message)) {
        alert("Message sent!");
        // Here you can redirect to another page or do other actions after successful login
    } else {
        alert("Invalid input. Please check your username, email, and message.");
    }
});

// Function to validate username (for example, minimum length)
function validateUsername(username) {
    return username.length >= 3 && username.length <= 20; // Minimum 3 characters, maximum 20 characters
}

// Function to validate email format
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to validate message (for example, minimum length)
function validateMessage(message) {
    return message.length >= 10;
}