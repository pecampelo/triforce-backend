"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
require('dotenv').config();
var host = process.env.HOST || 'localhost';
var port = process.env.PORT || 8008;
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(port, function () {
    console.log("Server is listening on http://" + host + ":" + port);
});
