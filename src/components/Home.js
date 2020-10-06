import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => (
    <div className="homepage">
    <h1>Rex Web Quiz App</h1>
    <Link to="/play"> <button className="button">Play</button></Link>
    </div>
);

export default Home;