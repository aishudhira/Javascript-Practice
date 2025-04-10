let uid = "abc123";  // Using let instead of const
uid = "abcd234";  // Now this works

var firstName = "Aishwarya Lakshmi";
var lastName = "Kumar";
var email = "example.com";
var password = "Aishuammu";
var confirmPassword = "Aishuammu";
var country = "India";
var state = "Tamil Nadu";
var courseCount = 0;
var isLoggedInFromGoogle = false;
var isLoggedInFacebook = false;

// Prompt input from user
// fullName = prompt("Enter your fullName here");

// Interpolation in JavaScript
//fullName = prompt("Enter any name");

console.log(`
    With unique ID: ${uid}
    User is: ${firstName} ${lastName}
    and his email is: ${email}
    and uses the password: ${password}
    and belongs to ${state} in ${country}
    and has access to ${courseCount} courses
    and is ${isLoggedInFacebook} on Facebook
    and ${isLoggedInFromGoogle} on Google
`);
