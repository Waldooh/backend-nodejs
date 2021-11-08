const express = require("express");
const faker = require("faker");
const router = express.Router();

router.get("/:categoryId", (request, response) => {
    const { categoryId } = request.params;

    response.json({
        categoryId,
        name: faker.commerce.color(),
        price: parseInt(faker.commerce.price()),
        address: faker.address.city(),
        image: faker.image.imageUrl(),
    });
});

router.get("/", (request, response) => {
    const categories = [];
    const { limit } = request.query;

    for (let index = 0; index < limit; index++) {
        categories.push({
            name: faker.internet.userName(),
            email: faker.internet.email(),
            image: faker.internet.avatar(),
        })
    }
    if (limit) {
        response.json({
            ok: true,
            categories: categories,
        });
    } else {
        response.json({
            ok: false,
            message: "El límite es obligatorio",
        });
    }
});

module.exports = router;