"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkorderSchema = void 0;
var zod_1 = require("zod");
exports.CreateWorkorderSchema = zod_1.z.object({
    statusId: zod_1.z.number(),
});
