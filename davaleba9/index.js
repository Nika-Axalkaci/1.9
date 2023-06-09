const isEmail = require("validator/lib/isEmail");

console.log(isEmail("test@test.com"));
console.log(isEmail("ABCD123"));
