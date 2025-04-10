"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
exports.config = {
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        enableArithAbort: true,
        encrypt: true,
        trustServerCertificate: true,
    },
    authentication: {
        type: "default",
        options: {
            userName: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
    },
};
