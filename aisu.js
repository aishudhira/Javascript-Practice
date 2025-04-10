const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Use readline to get input
rl.question("Enter your full name: ", function(fullName,lastName) {
  // Print the input provided by the user
  console.log("Your full name is: " + fullName+lastName);

  rl.close();  // Close the readline interface after the input
});
