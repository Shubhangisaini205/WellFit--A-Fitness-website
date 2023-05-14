import axios, { AxiosRequestConfig } from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// interface ExerciseForm {
//     target:string,
//     difficulty:string,
//     category:string
// }


export default function ExerciseInputForm() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    // let userDetails=(localStorage.getItem("userDetails"));
    // if(userDetails){
    //     userDetails=JSON.parse(userDetails)
    //     const {_id,name}=userDetails
    // }

    // const [category,setCategory]=useState(searchParams.get("category") || "")
    // const [target,setTarget]=useState(searchParams.get("target") || "")
    // const [difficulty,setDifficulty]=useState(searchParams.get("difficulty") || "")
    const [formdata, setFormdata] = useState({
        target: "",
        difficulty: "",
        category: ""
    });
    let obj = {
        target: searchParams.get("target"),
        difficulty: searchParams.get("difficulty"),
        category: searchParams.get("category")
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    };
    const headers: AxiosRequestConfig['headers'] = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    const showToastErrorMessage = () => {
        toast.error('Please login to access this function!!!', {
            position: toast.POSITION.TOP_CENTER
        });
    };
    const showToastMessage = () => {
        toast.success('Exercise Added!!', {
            position: toast.POSITION.TOP_CENTER
        });
    };

    const params: AxiosRequestConfig['params'] = obj
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSearchParams(formdata)
        console.log(obj)
        axios.get("http://localhost:8080/workouts", { headers, params })
            .then((res) => {
                console.log(res);
                if (res.data.msg == "Please login to access this function!!!") {
                    navigate("/signin")
                    return (
                        showToastErrorMessage()
                    )
                }
                fetch("http://localhost:8080/exercise/add", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                    body: JSON.stringify(res.data)
                })
                    .then((res) => res.json())
                    .then((res) => {
                        // console.log(res, "POST SUCCESFULL");
                        showToastMessage()
                        navigate("/exercise")
                    })
                    .catch((err) => {

                        console.log(err, "ERROR");
                    })
            })
            .catch((err) => {
                alert(err.response.data.msg)
                // console.log(err)
                console.log(err, "CATCH ERROR");
            })
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Select your preferences for generating workout videos
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="difficulty" className="block text-sm font-medium leading-6 text-white">
                                Level of Difficulty
                            </label>
                            <div className="py-2">
                                <select
                                    id="difficulty"
                                    name="difficulty"
                                    required
                                    defaultValue={formdata.difficulty}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option> Difficulty</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="difficulty" className="block text-sm font-medium leading-6 text-white">
                                Target Muscle
                            </label>
                            <div className="py-2">
                                <select
                                    id="target"
                                    name="target"
                                    required
                                    defaultValue={formdata.target}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>Target Muscle</option>
                                    <option value="Biceps">Biceps</option>
                                    <option value="Triceps">Triceps</option>
                                    <option value="Chest">Chest</option>
                                    <option value="Forearms">Forearms</option>
                                    <option value="Quads">Quads</option>
                                    <option value="Lats">Lats</option>
                                    <option value="Glutes">Glutes</option>
                                    <option value="Hamstring">Hamstring</option>
                                    <option value="Lower back">Lower back</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="difficulty" className="block text-sm font-medium leading-6 text-white">
                                Category
                            </label>
                            <div className="py-2">
                                <select
                                    id="category"
                                    name="category"
                                    required
                                    defaultValue={formdata.category}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>Category</option>
                                    <option value="Dumbbells">Dumbbells</option>
                                    <option value="Bodyweight">Bodyweight</option>
                                    <option value="Stretches">Stretches</option>
                                    <option value="Band">Resistant band</option>
                                    <option value="Barbell">Barbell</option>
                                    <option value="Plate">Plate</option>
                                    <option value="Cables">Cables</option>
                                    <option value="Yoga">Yoga</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </>
    )
}
