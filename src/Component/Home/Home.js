import React from 'react';
import Carosol from '../Carosol/Carosol';
import MainCource from '../MainCource/MainCource';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                {/* home page slider */}
                <Carosol></Carosol>
            </div>
            <div>
                {/* home page cource component */}
                <MainCource></MainCource>
            </div>
        </div>
    );
};

export default Home;