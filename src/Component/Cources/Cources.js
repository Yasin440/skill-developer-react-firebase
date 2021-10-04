import React, { useEffect, useState } from 'react';

const Cources = () => {
    const [cources, setCources] = useState([]);
    useEffect(() => {
        fetch('./courceAll.json')
            .then(res => res.json())
            .then(data => setCources(data))
    }, []);
    return (
        <div>
            {
                cources.map(cource=> )
            }
        </div>
    );
};

export default Cources;