import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Login() {
    //States to store Data
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //onChange Eventss
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    //Method handeling the Login Criteria
    const onSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Please fill all the fields');
        } else {
            axios
                .get('http://localhost:3001/login/allUsers')
                .then((response) => {
                    const userArray = response.data;
                    const userExists = userArray.find((user) => user.email === email && user.password === password);
                    if (userExists) {
                        toast.success('Login Successful');
                    } else {
                        toast.error('Invalid Credentails');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <>
            <section className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2'>
                <article className='writing-section   flex justify-center items-center p-8 text-center'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia fugiat cumque molestias nobis exercitationem consequatur harum suscipit laudantium explicabo laborum ad, omnis beatae, sequi, veritatis magni aliquam! Error hic laboriosam deleniti inventore minima consequatur, illum corrupti odio maxime nihil asperiores accusamus debitis, repellendus architecto eligendi perferendis quaerat distinctio sunt consequuntur aspernatur. Hic magnam esse impedit, ut placeat unde, commodi quis recusandae ullam possimus sit adipisci. Tempore in dolorem cumque!</p>
                </article>
                <article className='form-section bg-gray-100  flex justify-center items-center p-4'>
                    <form className='bg-white p-6 w-96 rounded-lg' onSubmit={onSubmit}>
                        <div className='my-4'>
                            <h1 className='text-blue-500 text-2xl text-center'>Login</h1>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Enter Your email"
                                value={email}
                                onChange={onEmailChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block font-medium mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={onPasswordChange}
                            />
                        </div>
                        <button className='w-full bg-blue-500 p-2 text-white'>Login</button>
                        <p className='text-right my-2 italic'>
                            <Link to={'/ForgetPassword'}>Forget Password?</Link>
                        </p>
                        <br />
                        <p className='text-center mt-8 italic'>Don't have an Account?</p>
                        <p className='text-center font-semibold mb-6 text-blue-500 italic'>
                            <Link to={'/Signup'}>SignUp</Link>
                        </p>
                    </form>
                </article>
            </section>
            <ToastContainer />
        </>
    );
}

export default Login;
