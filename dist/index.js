"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const cors = require('cors');
app.use(express_1.default.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send("Welcome to RESTFUL API gateway (by Damelia)");
});
app.use('/users', routes_1.userRouter);
app.listen(constants_1.PORT, () => {
    console.log(`Endpoint is ready and can be access in port ${constants_1.PORT}`);
});
