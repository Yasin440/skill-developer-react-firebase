import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="title my-5">
                <h1 className="fw-bold">Want To A Programmer...?</h1>
            </div>
            <div className='row container m-auto mt-5'>
                <div className='contact col-lg-6 col-md-12'>
                    <h2>Leave Us A Message...</h2>
                    <p class='fw-bold text-secondary'>Learn any programming that you want to and loved to code. We have our best qualified peogrammers to make you success on your goal... </p>
                    <div className='row py-2'>
                        <div className='col-1'>
                        <i class="fas fa-envelope"></i>
                        </div>
                        <div className='col-11'>
                            <h5>Email Address :</h5>
                            <p>support@example.com</p>
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col-1'>
                        <i class="fas fa-phone"></i>
                        </div>
                        <div className='col-11'>
                            <h5>Phone Number :</h5>
                            <p>+5654-7654784</p>
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className='col-1'>
                        <i class="fas fa-map-marked-alt"></i>
                        </div>
                        <div className='col-11'>
                            <h5>Our Location :</h5>
                            <p>54-block-C, 98, London</p>
                        </div>
                    </div>
                </div>
                <div className='message col-lg-6 col-md-12'>
                    <input required placeholder='Your Name*' type="text" name="" id="" />
                    <input required placeholder='Email Address*' type="email" name="" id="" />
                    <input placeholder='Subject' type="text" name="" id="" />
                    <textarea required placeholder='Write Your Message*' ></textarea>
                    <div className="card-footer">
                    <button>Submit Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;