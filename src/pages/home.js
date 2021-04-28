import NavBar from '../components/Nav-bar/nav-bar';
import React from 'react';

const Home = () => (
    <div>
        <NavBar/>
        <h5>SERVIÇO DE <br/>ALUGUEL DE <br/>CARROS</h5>
        <img className="imgHome"src='./river.jfif' />
    </div>
);

export default Home;