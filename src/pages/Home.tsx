// import React from 'react';
import { FlexSpace } from "../utils";
import './home.css'

const Home = () => (
    <div id="home">
        <FlexSpace />
        <div id="main">
            <h1>Bananahexagon's home</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/notes">Notes</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
        <FlexSpace />
        <div id="footer">
            AAAAAAAA
        </div>
    </div>
);


export default Home;
