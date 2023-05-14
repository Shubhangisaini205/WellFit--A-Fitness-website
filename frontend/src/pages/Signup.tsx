import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterUser } from "../redux/AuthReducer.ts/action";
import { Action } from "redux";


interface SignupForm {
    name: string;
    email: string;
    age: number;
    height: number;
    weight: number;
    gender: string;
    disease: string;
    password: string;

}

const Signup: React.FC = () => {
    const navigate = useNavigate()
    const [formdata, setFormdata] = useState<SignupForm>({
        name: "",
        email: "",
        age: 0,
        height: 0,
        weight: 0,
        gender: "",
        disease: "",
        password: ""
    });


    const showToastMessage = () => {
        toast.success('Successfully registered!!!', {
            position: toast.POSITION.TOP_CENTER
        });
    };
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // dispatch(RegisterUser(formdata));
        // console.log(formdata)

        axios.post(`https://curious-bat-jewelry.cyclic.app/user/register`, formdata)
            .then((res) => {
                // console.log(res.data)
                showToastMessage()
                setTimeout(() => {
                    navigate("/signin")
                }, 1500)

            })



    };
    return (
        <div className="flex items-center justify-center min-h-screen  text-black">
            <div
                className="relative flex flex-col m-6 space-y-8  shadow-2xl rounded-2xl md:flex-row md:space-y-0"
            >
                {/* <!-- left side --> */}
                <div className="flex flex-col justify-center p-8 md:p-14 text-white">
                    <span className="mb-3 text-4xl font-bold text-center ">Welcome to WellFit</span>
                    <span className="font-light text-teal-400 mb-8 text-center " >
                        Please Create your account!
                    </span>
                    <form onSubmit={handleSubmit}>
                        <div className="py-2">
                            <span className="mb-2 text-md ">Name</span>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
                                name="name"
                                id="name"
                                required
                                value={formdata.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="py-2">
                            <span className="mb-2 text-md ">Email</span>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
                                name="email"
                                id="email"
                                required
                                value={formdata.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex gap-10">
                            <div className="py-2">
                                <span className="mb-2 text-md left">Age</span>
                                <br />
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                    id="Age"
                                    required
                                    min="16"
                                    className="w-20 p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-black text-black"
                                    value={formdata.age}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="py-2">
                                <span className="mb-2 text-md left">Height</span>
                                <br />
                                <input
                                    type="number"
                                    name="height"
                                    required
                                    placeholder="Height"
                                    id="Height"
                                    min="100"
                                    className="w-20 p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-black text-black"
                                    value={formdata.height}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="py-2">
                                <span className="mb-2 text-md left">Weight</span>
                                <br />
                                <input
                                    type="number"
                                    name="weight"
                                    required
                                    placeholder="Weight"
                                    id="Weight"
                                    min="30"
                                    className="w-20 p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-black text-black"
                                    value={formdata.weight}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="flex gap-10
                     w-full py-4">

                            <div className="py-2">
                                <span className="mb-2 text-md ">Gender</span>
                                <select

                                    id="gender"
                                    name="gender"
                                    required
                                    defaultValue={formdata.gender}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block p-2.5">
                                    <option> Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>

                                </select>
                            </div>
                            <div className="py-2">
                                <span className="mb-2 text-md ">Disease</span>
                                <select
                                    id="disease"
                                    name="disease"
                                    required
                                    defaultValue={formdata.disease}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block p-2.5">
                                    <option >Disease</option>
                                    <option value="heart">Heart</option>
                                    <option value="tb">Tuberclosis</option>
                                    <option value="breath">breathing</option>
                                    <option value="others">none</option>

                                </select>
                            </div>
                        </div>
                        <div className="py-2">
                            <span className="mb-2 text-md left">Password</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                id="password"
                                value={formdata.password}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
                            />
                        </div>

                        <div className="flex justify-between w-full py-4">
                            <div className="mr-24">
                                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                                <span className="text-md">Remember for 30 days</span>
                            </div>
                            <span className="font-bold text-md">Forgot password</span>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black border border-gray-300 text-white p-2 rounded-lg mb-6 hover:bg-teal-400 hover:text-black hover:border hover:border-gray-300"
                        >
                            Sign up
                        </button>
                        <button
                            className="w-full bg-teal-400 text-black p-2 rounded-lg mb-6 hover:bg-black hover:text-white hover:border hover:border-gray-300"
                        >
                            <img src="https://cdn.monday.com/images/logo_google_v2.svg" alt="img" className="w-4 h-4 inline mr-2" />
                            Sign up with Google
                        </button>
                    </form>
                    <div className="text-center text-gray-400 hover:cursor-pointer">
                        Already have an account?{" "}
                        <Link to="/signin">
                            <span className="font-bold text-teal-400">Sign in from here</span>
                        </Link>
                    </div>
                </div>
                {/* <!-- right side --> */}
                <div className="relative">
                    <img
                        src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="img"
                        className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
                    />
                    {/* <!-- text on image  --> */}
                    <div
                        className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
                    >
                        <span className="text-white text-xl"
                        >"Don’t give up on your dreams,<br /> or your dreams will give up on you." <br /> Be WellFit!!
                        </span>
                    </div>
                </div>
            </div>

            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default Signup