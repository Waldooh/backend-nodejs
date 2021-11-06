const express = require("express");
const faker = require("faker");
const router = express.Router();

router.get("/:usersId", (request, response) => {
    const { usersId } = request.params;

    response.json({
        usersId,
        name: faker.internet.userName(),
        email: faker.internet.email(),
        image: faker.internet.avatar(),
    });
});

router.get("/", (request, response) => {
    const users = [];
    const { limit } = request.query;

    for (let index = 0; index < limit; index++) {
        users.push({
            name: faker.internet.userName(),
            email: faker.internet.email(),
            image: faker.internet.avatar(),
        })
    }
    if (limit) {
        response.json({
            ok: true,
            users: users,
        });
    } else {
        response.json({
            ok: false,
            message: "El límite es obligatorio",
        });
    }
});

module.exports = router;