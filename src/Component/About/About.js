import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className='container'>
                <div className="title my-5">
                    <h1 className="fw-bold">Know About Us...</h1>
                </div>
                <div className='row aboutImg'>
                    <div className="col-md-4 col-sm-12"><div className="img"><img src="https://themehoster.com/tf/wp/omexo/wp-content/uploads/2021/04/about-img-1.jpg" alt="" /></div></div>
                    <div className="col-md-4 col-sm-12"><div className="img"><img src="https://themehoster.com/tf/wp/omexo/wp-content/uploads/2021/04/img-lg-2.jpg" alt="" /></div></div>
                    <div className="col-md-4 col-sm-12"><div className="img"><img src="https://themehoster.com/tf/wp/omexo/wp-content/uploads/2021/04/about-img-3.jpg" alt="" /></div></div>
                </div>
            </div>
            <div className="container ">

            </div>
        </div>
    );
};

export default About;