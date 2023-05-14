import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
// import ReactPlayer from 'react-player/lazy'
interface WorkoutObj {
    _id: {
        $oid: string;
    };
    exercise_name: string;
    videoURL: string[];
    steps: string[];
    Category: string;
    Difficulty: string;
    target: {
        Primary: string[];
        Secondary?: string[];
        Tertiary?: string[];
    };
}


function Exercise() {
    const [products, setProducts] = useState<WorkoutObj[]>([]);
    const navigate = useNavigate()
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get("https://curious-bat-jewelry.cyclic.app/exercise", {
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                // console.log(res);
                setProducts(res.data);
            })
            .catch((err) => {
                // console.log(err);
            })
    }, [])
    // console.log(products);
    return (
        <div className='text-white mr-5 ml-5 m-auto mb-40'>
            <h1 className="text-4xl font-bold mb-4 text-center mt-5 ">Workout Exercises</h1>
            <p className="text-gray-600 mb-4 mx-20 text-white text-xl">
                This workout includes a variety of exercises targeting different muscle groups. Follow the steps below to perform each exercise correctly. These exercises are designed to improve strength, flexibility, and overall fitness. Make sure to warm up before starting the workout and listen to your body to prevent any injuries. Remember to breathe properly and maintain proper form throughout the exercises. If you have any underlying health conditions or concerns, consult with a healthcare professional before engaging in this workout routine. Enjoy your workout and stay committed to your fitness journey!
            </p>



            {products.length !== 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 mt-10">

                    {products.map((exercise, i) => (

                        <div key={i} className="p-4 border border-gray-300 rounded text-white">

                            <h2 className="text-lg font-bold mb-2 text-teal-400">{exercise.exercise_name}</h2>

                            <div className="mb-4">
                                <video className="mb-2" controls>
                                    <source src={exercise.videoURL[0]} type="video/mp4" />
                                </video>
                            </div>

                            <h3 className="text-sm font-medium text-teal-400">Steps:</h3>

                            <ul className="list-disc pl-4 mb-4 text-white">
                                {exercise.steps.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ul>

                            <div className="mb-2">
                                <span className="font-medium text-teal-400">Category: </span>
                                <span>{exercise.Category}</span>
                            </div>

                            {/* <div className="mb-2">
                      <span className="font-medium text-teal-400">Target: </span>
                      <span>{exercise.target.Primary.join(', ')}</span>
                  </div> */}
                            {exercise.target && (
                                <div>
                                    <h3 className=" font-medium text-teal-400 inline">Target Muscles 💪</h3>
                                    {exercise.target.Primary && (
                                        <div className="mb-2">
                                            <span className=" text-sm font-medium text-[#4ffc15]">Primary: </span>
                                            <span>{exercise.target.Primary.join(', ')}</span>
                                        </div>
                                    )}
                                    {exercise.target.Secondary && (
                                        <div className="mb-2">
                                            <span className=" text-sm font-medium text-[#4ffc15]">Secondary: </span>
                                            <span>{exercise.target.Secondary.join(', ')}</span>
                                        </div>
                                    )}
                                    {exercise.target.Tertiary && (
                                        <div className="mb-2">
                                            <span className=" text-sm font-medium text-[#4ffc15]">Tertiary: </span>
                                            <span>{exercise.target.Tertiary.join(', ')}</span>
                                        </div>
                                    )}
                                </div>
                            )}


                            <div className="mb-2">
                                <span className="font-medium text-teal-400">Difficulty: </span>
                                <span>{exercise.Difficulty}</span>
                            </div>
                            {/* <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
                      Done
                  </button> */}


                        </div>
                    ))}
                </div>) : (

                <div className="flex items-center justify-center flex-col gap-4">
                    <h1 className="mt-4 text-2xl font-bold text-teal-400 text-center  ">No exercises available. Add workout exercises to get started!</h1>
                    <button onClick={() => {
                        navigate("/customexercise")
                    }} className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
                        Add Exercises
                    </button>

                </div>


            )}



        </div>

    )
}

export default Exercise;

