"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'dineshkumar.webhopers@gmail.com',
        pass: '9F8pDx7IhEGyrJaR',
    },
    logger: true,
});
exports.default = transporter;
//# sourceMappingURL=transport.js.map