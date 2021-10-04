import React from 'react';
import Carosol from '../Carosol/Carosol';
import MainCource from '../MainCource/MainCource';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <Carosol></Carosol>
            </div>
            <div>
                <MainCource></MainCource>
            </div>
        </div>
    );
};

export default Home;