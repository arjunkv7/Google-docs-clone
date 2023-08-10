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
const document_1 = require("../controllers/document");
let documentSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('New user connected to the socket..###');
        socket.on("file-edited", (data) => {
            console.log("File edited ", data);
        });
        socket.on('get-document', (documentId) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('dockumet call');
            let documentData = yield (0, document_1.getDocument)(documentId);
            console.log("fetched document", documentData);
            socket.emit('load-document', documentData);
        }));
        socket.on('send-changes', (document) => {
            console.log(document);
        });
        socket.on('save-document', (documentId, document) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('Save document event');
            let d = yield (0, document_1.updateOrInsertDocument)(documentId, document);
            console.log(d);
        }));
        socket.on("desconnect", () => {
            console.log("User desconnectd");
        });
    });
};
exports.default = documentSocket;
