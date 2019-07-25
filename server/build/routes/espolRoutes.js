"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const espolControllers_1 = __importDefault(require("../controllers/espolControllers"));
class EspolRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', espolControllers_1.default.list);
        this.router.post('/', espolControllers_1.default.create);
    }
}
const espolRoutes = new EspolRoutes();
exports.default = espolRoutes.router;
