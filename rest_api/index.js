const express = require("express");
const app = express();
const port = 8000;

app.get("/", (request, response) => {
    response.send("Hello Koders!");
});

app.get("/nueva-ruta", (request, response) => {
    response.send("<h1>Otra Ruta</h1>");
})

app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`);
});