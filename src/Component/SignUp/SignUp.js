import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const handleEmail = event => {
        setEmail(event.target.value);
    }


    const handlePassword = event => {
        setPassword(event.target.value);
    }


    const handleSignUp = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
              });
    }


    return (
        <div className='container'>
            <div className="title my-5">
                <h1 className="fw-bold">Please Sign Up...</h1>
            </div>
            <form className="row g-3 mt-5 w-50 m-auto">
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail4" required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword4" required />
                </div>
                <div className="col-12">
                    <button onClick={handleSignUp} type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;