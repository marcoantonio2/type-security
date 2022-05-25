"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = exports.createUser = void 0;
const db_1 = require("../db/db");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullname, lastname, email, cellphone } = req.body;
        const query = `INSERT INTO users (fullname, lastname,email,cellphone) VALUES ('${fullname}','${lastname}','${email}','${cellphone}')`;
        const response = yield db_1.pool.query(query);
        res.json(response);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.pool.query('SELECT * FROM users');
        return res.json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield db_1.pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return res.json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.getUserById = getUserById;
