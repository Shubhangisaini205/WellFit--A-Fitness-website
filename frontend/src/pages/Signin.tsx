import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface signinform {

    email: string;
    password: string;

}

const Signin: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let isAuth = localStorage.getItem("auth") || false;
    if (isAuth) {
        isAuth = JSON.parse(isAuth)
    }
    const [formdata, SetFormdata] = useState<signinform>({
        email: "",
        password: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        SetFormdata({ ...formdata, [name]: value })
    }

    const showToastMessage = () => {
        toast.success('Login Successfull !', {
            position: toast.POSITION.TOP_CENTER
        });
    };
    const showToastErrorMessage = () => {
        toast.error('Wrong Credentials !', {
            position: toast.POSITION.TOP_CENTER
        });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        axios.post(`https://curious-bat-jewelry.cyclic.app/user/login`, formdata)
            .then((res) => {
                // console.log(res.data)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("userDetails", JSON.stringify(res.data.userDetails))
                localStorage.setItem("wellfituser", res.data.username)
                // alert(res.data.msg)
                localStorage.setItem("auth", "true");
                showToastMessage()
                setTimeout(() => {
                    if (location.state) {
                        navigate(location.state, { replace: true })
                    } else {
                        navigate("/")
                    }
                }, 1500)

            }).catch((err) => {
                showToastErrorMessage()
            })
    }
    return (
        <div className="flex items-center justify-center min-h-screen  text-black" >
            <div
                className="relative flex flex-col m-6 space-y-8  shadow-2xl rounded-2xl md:flex-row md:space-y-0"
            >
                {/* <!-- left side --> */}
                <div className="flex flex-col justify-center p-8 md:p-14 text-white">
                    <span className="mb-3 text-4xl font-bold text-center ">Welcome back to WellFit</span>
                    <span className="font-light text-teal-400 mb-8 text-center " >
                        Welcom back! Please enter your details
                    </span>
                    <form onSubmit={handleSubmit}>
                        <div className="py-2">
                            <span className="mb-2 text-md ">Email</span>
                            <input
                                type="email"
                                placeholder="Enter you email address"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
                                name="email"
                                id="email"
                                value={formdata.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="py-2">
                            <span className="mb-2 text-md left">Password</span>
                            <input
                                type="password"
                                placeholder="Enter you password"
                                name="password"
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
                            Sign in
                        </button>
                    </form>
                    <button
                        className="w-full bg-teal-400 text-black p-2 rounded-lg mb-6 hover:bg-black hover:text-white hover:border hover:border-gray-300"
                    >
                        <img src="https://cdn.monday.com/images/logo_google_v2.svg" alt="img" className="w-4 h-4 inline mr-2" />
                        Sign in with Google
                    </button>
                    <div className="text-center text-teal-400 hover:cursor-pointer">
                        Dont'have an account?{" "}
                        <Link to="/signup">
                            <span className="font-bold text-white">Sign up for free</span>
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
            </div >

            <ToastContainer autoClose={2000} />
        </div >
    );
};

export default Signin