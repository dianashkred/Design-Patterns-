"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const pino_1 = __importDefault(require("pino"));
const path_1 = __importDefault(require("path"));
const isTest = process.env.NODE_ENV === 'test';
exports.logger = (0, pino_1.default)(isTest
    ? { level: 'silent' }
    : {
        level: 'info',
        transport: {
            targets: [
                {
                    target: 'pino-pretty',
                    options: { colorize: true },
                },
                {
                    target: 'pino/file',
                    options: { destination: path_1.default.join(__dirname, '../../logs/app.log') },
                },
            ],
        },
    });
