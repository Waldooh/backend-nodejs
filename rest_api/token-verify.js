const jwt = require("jsonwebtoken");

const secret = "MySecret";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTYzNjM5OTc3Mn0.-olsV_BW3Dq7JWlzKajPHP5tblbOVqfFpJMwY2AZBb8";

const payload = jwt.verify(token, secret);

console.log("Payload:", payload);