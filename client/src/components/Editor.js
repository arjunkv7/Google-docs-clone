import { useCallback, useEffect } from "react";

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

let Editor = () => {
    useEffect(() => {
        const socket = io("http://localhost:4000");

        return () => {
            socket.disconnect()
        }
    }, [])

    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return

        wrapper.innerHTML = ''
        const editor = document.createElement('div');
        wrapper.append(editor);
        new Quill(editor, {
            modules: {
                toolbar: TOOLBAR_OPTIONS
            },
            theme: "snow"
        });

    }, []);

    return (
        <Box className="container" ref={wrapperRef}></Box>
    )
}

export default Editor;