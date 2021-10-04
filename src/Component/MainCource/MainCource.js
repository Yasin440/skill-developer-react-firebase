import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './MainCource.css';

const MainCource = () => {
    const [cources, setCources] = useState([]);
    useEffect(() => {
        fetch('./courceHome.json')
            .then(res => res.json())
            .then(data => setCources(data))
    }, []);
    return (
        <div>
            <div className="title my-5">
                <h2 className="fw-bold">Check Our Main Cources</h2>
            </div>
            <div className="container px-4">
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    {
                        cources.map(cource => <Card
                            key={cource._id}
                            cource={cource}
                        ></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainCource;