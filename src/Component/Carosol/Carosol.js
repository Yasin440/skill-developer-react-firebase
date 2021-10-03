import React from 'react';
import './Carosol.css';
const Carosol = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.learnatrise.in/wp-content/uploads/2019/06/Essential-qualities-of-a-full-stack-developer-in-2019-20.png" className="d-block" alt="slider" />
                        <div className ="carousel-caption d-none d-md-block">
                        <h2>First slide label</h2>
                        <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://hackr.io/blog/best-web-development-courses/thumbnail/large" className="d-block" alt="slider" />
                        <div className ="carousel-caption d-none d-md-block">
                        <h2>Second slide label</h2>
                        <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://lh3.googleusercontent.com/proxy/5C9Mi1mhzfqWjQotEAr-lGDgGv_z42v_DQLHclJcHIYUj_mUFHMHmc3ZdHd4Sf0SFAVsWdN2ru5Xw3cffcIEQScBLGDBsI9xvMoGU6YWjqVJAqcq0oR7DIq5xj1cVQmkW4AlHvO82uMR" className="d-block" alt="slider" />
                        <div className ="carousel-caption d-none d-md-block">
                        <h2>Third slide label</h2>
                        <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carosol;