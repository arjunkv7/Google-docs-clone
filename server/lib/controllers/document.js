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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocument = exports.updateOrInsertDocument = void 0;
const document_1 = __importDefault(require("../models/document"));
let updateOrInsertDocument = (documentId, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (documentId == null || documentId == '')
        return;
    console.log(data, documentId);
    let document = yield document_1.default.findOneAndUpdate({ documentId }, { data });
    if (document == null) {
        document = yield document_1.default.create({ documentId });
    }
    return document;
});
exports.updateOrInsertDocument = updateOrInsertDocument;
let getDocument = (documentId) => __awaiter(void 0, void 0, void 0, function* () {
    if (documentId == null || documentId == '')
        return '';
    return yield document_1.default.findOne({ documentId }).select({ data: 1, _id: 0 });
});
exports.getDocument = getDocument;
