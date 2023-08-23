import { React, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

function Signup() {
    //States to save dataa
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    //onChange Events
    const onNameChange = (e) => {
        setName(e.target.value);
    };
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
   

    //Data to be added in Database
    const data = {
        name: name,
        email: email,
        password: password,
       Verification: Math.floor(1000 + Math.random() * 9000),
    };
    //Function Saving the User in DataBase
    const onSubmit = (e) => {

        e.preventDefault();
        if(!name || !email || !password){
            toast.error('Please fill all the fields')
        }
        else{
        axios
            .post('http://localhost:3001/login/newUser', data)
            .then((response) => {
                toast.success('User Added Successfully')
            })
            .catch((err) => {
                console.log(err);
                toast.error("Error Occurred")
            });
        }
    };

    return (
        <>
            <section className='max-w-screen-xl mx-auto grid grid-cols-1  md:grid-cols-2'>
                <article className='form-section   flex justify-center items-center p-4'>
                    <form action="/login" method='POST' className='bg-white p-6 border w-96 rounded-lg' onSubmit={onSubmit}>
                        <div className='my-4'>
                            <h1 className='text-blue-500 text-2xl text-center'>SignUp</h1>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={onNameChange}
                            />
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
                                name="email"
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={onPasswordChange}
                            />
                        </div>
                        <button className='w-full bg-blue-500 p-2 text-white'>SignUp</button>
                        <p className='text-center mt-8  italic'>Already have an Account?</p>
                        <p className='text-center font-semibold mb-6 text-blue-500 italic'><Link to={'/Login'}>Login</Link></p>
                    </form>
                </article>
                <article className='writing-section bg-gray-100   flex justify-center items-center p-8 text-center'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia fugiat cumque molestias nobis exercitationem consequatur harum suscipit laudantium explicabo laborum ad, omnis beatae, sequi, veritatis magni aliquam! Error hic laboriosam deleniti inventore minima consequatur, illum corrupti odio maxime nihil asperiores accusamus debitis, repellendus architecto eligendi perferendis quaerat distinctio sunt consequuntur aspernatur. Hic magnam esse impedit, ut placeat unde, commodi quis recusandae ullam possimus sit adipisci. Tempore in dolorem cumque!</p>
                </article>
            </section>
        </>
    )
}

export default Signup
