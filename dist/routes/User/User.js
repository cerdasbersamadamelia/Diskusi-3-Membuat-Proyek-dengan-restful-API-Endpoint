"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
exports.router = express_1.default.Router({
    strict: true
});
exports.router.post('/', (req, res) => {
    controllers_1.userController.create(req, res);
});
exports.router.get('/', (req, res) => {
    controllers_1.userController.read(req, res);
});
exports.router.patch('/', (req, res) => {
    controllers_1.userController.update(req, res);
});
exports.router.delete('/', (req, res) => {
    controllers_1.userController.delete(req, res);
});
