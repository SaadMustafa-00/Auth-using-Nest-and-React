import { React, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import emailjs from '@emailjs/browser';


function EmailVerification() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        if (!email) {
            toast.error('Please fill all the fields');
        } else {
            axios
                .get('http://localhost:3001/login/' + email)
                .then((response) => {
                    const responseData = response.data;

                    // Convert the requested data into JSON
                    const data = JSON.stringify(responseData);

                    // Convert the JSON data into Object
                    const parsedData = JSON.parse(data)

                    // Extract the 'email' and 'verification' properties from the parsed Object data
                    const nameFromResponse = parsedData.name
                    const emailFromResponse = parsedData.email;
                    const verificationCode = parsedData.Verification;
                    const id=parsedData.id;
                    
                    if (email === emailFromResponse) {
                        const obj = {
                            to_name: nameFromResponse,
                            message: verificationCode,
                            from_name: 'Team-Notify',
                        };

                        // Create a hidden form element
                        const form = document.createElement('form');
                        form.style.display = 'none';
                        for (const key in obj) {
                            const input = document.createElement('input');
                            input.type = 'hidden';
                            input.name = key;
                            input.value = obj[key];
                            form.appendChild(input);
                        }
                        document.body.appendChild(form);

                        emailjs.sendForm('service_t20b3rv', 'template_ou1e3gd', form, 'SMRWpYFXWqKKIH6IF')
                            .then((result) => {
                                toast.warn('We have sent you a 4-Digit Verification Number on your given Email')
                                navigate(`/NewPassword/${id}`);
                                navigate('/DigitVerify');
                            })
                            .catch((error) => {
                                console.log(error)
                            });
                    }
                    else {

                        toast.error('This Email Does not Exist')
                    }
                })

                .catch((err) => {
                    console.log("Error:", err);
                });

        }
        
    }

    return (
        <>
            <section className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2'>
                <article className='writing-section   flex justify-center items-center p-8 text-center'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia fugiat cumque molestias nobis exercitationem consequatur harum suscipit laudantium explicabo laborum ad, omnis beatae, sequi, veritatis magni aliquam! Error hic laboriosam deleniti inventore minima consequatur, illum corrupti odio maxime nihil asperiores accusamus debitis, repellendus architecto eligendi perferendis quaerat distinctio sunt consequuntur aspernatur. Hic magnam esse impedit, ut placeat unde, commodi quis recusandae ullam possimus sit adipisci. Tempore in dolorem cumque!</p>
                </article>
                <article className='form-section bg-gray-100  flex justify-center items-center p-4'>
                    <form action="/" className='bg-white p-6  w-96 rounded-lg' onSubmit={onSubmit}>
                        <div className='my-4'>
                            <h1 className='text-blue-500 text-2xl text-center'>Forget Password</h1>
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
                        <button className='w-full bg-blue-500 p-2 text-white'>Submit</button>
                        <p className='text-center mt-8  italic'>Don't have any Account?</p>
                        <p className='text-center font-semibold mb-6 text-blue-500 italic'><Link to={'/Signup'}>SignUp</Link></p><br />
                        <p className=' font-semibold mt-8 text-blue-500 italic'><Link to={'/Login'}>Back to Login</Link></p>
                    </form>
                </article>
            </section>
            
        </>
    )
}


export default EmailVerification
