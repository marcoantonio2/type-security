"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const index_controller_1 = require("../controllers/index.controller");
router.get('/', (req, res) => res.send('Hola mundo?'));
router.get('/users', index_controller_1.getUsers);
router.get('/user/:id', index_controller_1.getUserById);
router.post('/user', index_controller_1.createUser);
exports.default = router;
