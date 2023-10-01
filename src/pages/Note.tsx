// import React from 'react';

// import { FlexSpace } from "../utils";
import './note.css'

const Header = () => (
    <div id="header">
        <a href="/home">Home</a>
    </div>
);

const Note = () => (
    <div id="note">
        <Header />
        <div id="main">
            <h1>Notes</h1>
            <p>記事一覧です。</p>
        </div>
    </div>
)

export default Note;

export { Header };