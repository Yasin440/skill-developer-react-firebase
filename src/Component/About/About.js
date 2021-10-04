import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className='container my-5'>
                <div className="title mb-5">
                    <h1 className="fw-bold">Know About Us...</h1>
                </div>
                <div className='row aboutImg'>
                    <div className="col-md-4 col-sm-12"><div className="img"><img src="https://themehoster.com/tf/wp/omexo/wp-content/uploads/2021/04/about-img-1.jpg" alt="" /></div></div>
                    <div className="col-md-4 col-sm-12"><div className="img"><img src="https://themehoster.com/tf/wp/omexo/wp-content/uploads/2021/04/img-lg-2.jpg" alt="" /></div></div>
                    <div className="col-md-4 col-sm-12"><div className="img"><img src="https://themehoster.com/tf/wp/omexo/wp-content/uploads/2021/04/about-img-3.jpg" alt="" /></div></div>
                </div>
            </div>
            {/* middle part of this page */}
            <div className="container context text-center">
                <p>We You Chose Us...?</p>
                <div className='title my-4'><h1 className="fw-bold">We Are Providing The Best Quality Online Courses. Our All Instructors Are High Expert</h1></div>
                <p className="details pb-5">Skill Developer's are one of the first computing hubs picked by the Government-funded National Centre for Computing Education to run computing courses for teachers in the area. The Government’s Equality Hub talks with students and their teacher. Their teacher, Katie Vanderpere-Brown, says she works hard to amplify the female role models in computer science: for example, Margaret Hamilton.</p>
            </div>

            {/* instructor area started */}

            <div className='bg-light mt-5 pt-5'>
                <div className="instructor container text-center">
                    <p className='fw-bold pt-5'>INSTRUCTORS</p>
                    <div className='title my-4'>
                        <h1 className="fw-bold">Our Expert Instructors...</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-3 col-sm-6">
                            <div className='body'>
                                <div className="img"><img src="https://themehoster.com/tf/wp/omexo/wp-content/uploads/2021/03/instructor-1-1.jpg" alt="" /></div>
                                <h4>Jhon Son</h4>
                                <p>INSTRUCTOR</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className='body'>
                                <div className="img"><img src="https://themehoster.com/tf/wp/omexo/wp-content/uploads/2021/03/instructor-3.jpg" alt="" /></div>
                                <h4>Jasika Eana</h4>
                                <p>INSTRUCTOR</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className='body'>
                                <div className="img"><img src="https://themehoster.com/tf/wp/omexo/wp-content/uploads/2021/03/instructor-4-1.jpg" alt="" /></div>
                                <h4>Harry Son</h4>
                                <p>INSTRUCTOR</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className='body'>
                                <div className="img"><img src="https://themehoster.com/tf/wp/omexo/wp-content/uploads/2021/03/instructor-2-1.jpg" alt="" /></div>
                                <h4>Natasha</h4>
                                <p>INSTRUCTOR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;