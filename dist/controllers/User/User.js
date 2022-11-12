"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const CrudController_1 = require("../CrudController");
const users_json_1 = __importDefault(require("../../resources/users.json"));
class UserController extends CrudController_1.CrudController {
    create(req, res) {
        throw new Error("Belum Diimplementasikan");
    }
    read(req, res) {
        res.json(users_json_1.default);
    }
    update(req, res) {
        throw new Error("Belum Diimplementasikan");
    }
    delete(req, res) {
        throw new Error("Belum Diimplementasikan");
    }
}
exports.UserController = UserController;
