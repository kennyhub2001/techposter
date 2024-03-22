document.getElementById("helpform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var termsChecked = document.getElementById("checkbbox").checked;

    // You can replace this with your own validation logic
    if ( validateEmail(email) && validatePassword(password) && termsChecked) {
        alert("Login Sucessful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid input. Please check your email, password and check box.");
    }
});
// Function to validate email format
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
// Function to validate password (for example, minimum length)
function validatePassword(password) {
    return password.length >= 6;
}