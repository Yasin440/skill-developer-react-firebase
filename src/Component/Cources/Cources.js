import React, { useEffect, useState } from 'react';
import CourceCard from '../CourceCard/CourceCard';

const Cources = () => {
    const [cources, setCources] = useState([]);
    useEffect(() => {
        fetch('./courceAll.json')
            .then(res => res.json())
            .then(data => setCources(data))
    }, []);
    return (
        <div className="container px-4">
            <div className="title my-5">
                <h1 className="fw-bold">Check Our Crush Cources...</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-5">
                {
                    cources.map(cource => <CourceCard
                        key={cource._id}
                        cource={cource}
                    ></CourceCard>)
                }
            </div>
        </div>
    );
};

export default Cources;