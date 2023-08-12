"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocument = exports.updateOrInsertDocument = void 0;
const index_1 = require("../models/index");
let updateOrInsertDocument = (documentId, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (documentId == null || documentId == '')
        return;
    console.log(data, documentId);
    let document = yield index_1.DocumentModel.findOneAndUpdate({ documentId }, { data });
    if (document == null) {
        document = yield index_1.DocumentModel.create({ documentId });
    }
    return document;
});
exports.updateOrInsertDocument = updateOrInsertDocument;
let getDocument = (documentId) => __awaiter(void 0, void 0, void 0, function* () {
    if (documentId == null || documentId == '')
        return '';
    return yield index_1.DocumentModel.findOne({ documentId }).select({ data: 1, _id: 0 });
});
exports.getDocument = getDocument;
