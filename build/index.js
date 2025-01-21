"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Checkout_1 = __importDefault(require("./Checkout"));
const offers_1 = require("./offers");
const prices = {
    ipd: 549.99,
    mbp: 1399.99,
    atv: 109.50,
    vga: 30.00,
};
const co = new Checkout_1.default(offers_1.offers, prices);
co.scan('ipd');
co.scan('ipd');
co.scan('ipd');
co.scan('ipd');
co.scan('ipd');
console.log(`Total: $${co.total()}`);
