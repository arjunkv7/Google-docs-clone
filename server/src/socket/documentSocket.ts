import { Server, Socket } from "socket.io";
import { updateOrInsertDocument, getDocument } from "../controllers/document";

let documentSocket = (io: Server) => { 
    io.on('connection', (socket) => {
        console.log('New user connected to the socket..###');

        socket.on("file-edited", (data) => {
            console.log("File edited ", data);
        });

        socket.on('get-document', async documentId => {
            console.log('dockumet call')

            socket.join(documentId);
            let documentData = await getDocument(documentId);
            console.log("fetched document", documentData)
            socket.emit('load-document', documentData)
        });

        socket.on('send-changes', (documentId, changes) => {
            console.log("changes",documentId, changes);
            socket.to(documentId).emit("receive-changes",changes);
        })

        socket.on('save-document', async (documentId, document) => {
            console.log('Save document event')
            let d = await updateOrInsertDocument(documentId, document);
        })

        socket.on("desconnect", () => {
            console.log("User desconnectd");
        });
    });
}

export default documentSocket;