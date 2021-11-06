const { response } = require("express");
const express = require("express");
const faker = require("faker");
const router = express.Router();


router.get("/", (request, response) => {
    const products = [];
    const { limit } = request.query;

    for (let index = 0; index < limit; index++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
        })
    }
    if (limit) {
        // Si tiene limite (product?limit=) entonces...
        response.json({
            ok: true,
            payload: products,
        });
        // Sino tiene limite entonces...
    } else {
        response.json({
            ok: false,
            message: "El límite es obligatorio",
        });
    }
});

router.get("/:id", (request, response, next) => {
    try {
        throw "Error generico";
    } catch (error) {
        next(error);
    }
    // const { id } = request.params;
    // response.json({
    //     id,
    //     name: "Product 1",
    //     price: 1000,
    // });
});

router.post("/", (request, response) => {
    const body = request.body;
    // Logica del negocio
    response.status(201).json({
        ok: true,
        message: "Crated successfully",
        payload: {
            body,
        },
    });
});


router.patch("/:id", (request, response) => {
    const { id } = request.params;
    const { name, price } = request.body;

    if(id === "99") {
        response.status(404).json({
            ok: false,
            message: "Product not found",
        });
    } else {
        response.status(201).json({
            ok: true,
            message: `Product ${id} updated successfully`,
            payload: {
                name,
                price,
            },
        });
    }

    response.json({
        ok: true,
        message: `Product ${id} updated successfully`,
        payload: {
            name,
            price,
        },
    });
});


router.delete("/:id", (request, response) => {
    const { id } = request.params;
    // Logica para eliminar
    response.status(202).jason({
        ok: true,
        message: `Product ${id} deleted successfully`
    });
});

module.exports = router;