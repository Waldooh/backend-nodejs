const express = require("express");
const authHandler = require("../middlewares/authHandlers");
// const faker = require("faker");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            userName: "mandolorian",
            firtName: "Armando",
            lastName: "Rios",
        },
        {
            id: 2,
            userName: "alfredoa",
            firstName: "Alfredo",
            lastName: "Altamirano",
        },
    ]);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        id,
        userName: "alfredoa",
        firstName: "Alfredo",
        lastName: "Altamirano",
    });
});

router.use(authHandler);

router.post("/:id") 

// router.get("/:usersId", (request, response) => {
//     const { usersId } = request.params;

//     response.json({
//         usersId,
//         name: faker.internet.userName(),
//         email: faker.internet.email(),
//         image: faker.internet.avatar(),
//     });
// });

// router.get("/", (request, response) => {
//     const users = [];
//     const { limit } = request.query;

//     for (let index = 0; index < limit; index++) {
//         users.push({
//             name: faker.internet.userName(),
//             email: faker.internet.email(),
//             image: faker.internet.avatar(),
//         })
//     }
//     if (limit) {
//         response.json({
//             ok: true,
//             users: users,
//         });
//     } else {
//         response.json({
//             ok: false,
//             message: "El límite es obligatorio",
//         });
//     }
// });

module.exports = router;