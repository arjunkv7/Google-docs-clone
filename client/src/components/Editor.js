import { useCallback, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom"

import Quill from "quill";
import "quill/dist/quill.snow.css";

import { Box } from "@mui/material";
import "../styleSheets/editor.css"

import io from 'socket.io-client';

const TOOLBAR_OPTIONS = [
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];
const SAVE_INTERVAL_MS = 2000;

let Editor = () => {
    const [socket, setsocket] = useState(null);
    const [quill, setQuill] = useState(null);
    const { id: documentId } = useParams();
    const [token, setToken] = useState(null);
    const [useDetails, setUserDetails] = useState(null);
    const [userName, setuserName] = useState(null);


    useEffect(() => {
        let tk = window.localStorage.getItem("token");
        let userDetails1 = window.localStorage.getItem("userData");

        if (!tk || !userDetails1) return <Navigate to="/login" />;
        setToken(tk);
        setUserDetails(JSON.parse(userDetails1));
        setuserName(JSON.parse(userDetails1)?.userName)

        const s = io("http://localhost:4000");
        setsocket(s);

        return () => {
            s.disconnect()
        }
    }, []);

    //get document
    useEffect(() => {
        if (quill == null || socket == null) return

        socket.once('load-document', document => {
            quill.setContents(document?.data);
            quill.enable();
        });

        socket.on('no-access', data => {
            console.log("No access for this file")
        })
        socket.emit('get-document', documentId, userName);
    }, [quill, socket, documentId]);

    //save document
    useEffect(() => {
        if (quill == null || socket == null || userName == null) return;

        const contents = quill.getContents();
        const interval = setInterval(() => {
            socket.emit('save-document', documentId, quill.getContents(), userName);

        }, SAVE_INTERVAL_MS);

        return () => {
            clearInterval(interval)
        }
    }, [quill, socket, documentId]);

    //recieve changes
    useEffect(() => {
        if (socket == null || quill == null) return

        const handler = (delta) => {
            quill.updateContents(delta);
        };

        socket.on('receive-changes', handler);
    }, [socket, quill]);

    //send changes
    useEffect(() => {
        if (socket == null || quill == null) return;

        const handler = (delta, oldDelta, source) => {
            if (source !== 'user') return

            socket.emit('send-changes', documentId, delta)
        }
        quill.on('text-change', handler);

        return () => {
            quill.off("receive-changes", handler)
        }

    }, [socket, quill]);


    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return

        wrapper.innerHTML = ''
        const editor = document.createElement('div');
        wrapper.append(editor);
        const quill = new Quill(editor, {
            modules: {
                toolbar: TOOLBAR_OPTIONS
            },
            theme: "snow"
        });
        quill.disable()
        setQuill(quill);

    }, []);

    return (
        <Box className="container" ref={wrapperRef}></Box>
    )
}

export default Editor;