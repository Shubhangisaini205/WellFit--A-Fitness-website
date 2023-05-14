import { useState, useEffect } from "react";
import bot from "../images/chatbot.png"
import { useNavigate } from 'react-router-dom'
interface WorkoutPlan {
    name?: string,
    description?: string,
    sets?: number,
    reps?: number,
    duration?: string
}

const Monday = [
    {
        "name": "Push-ups",
        "description": "Start in a high plank position with your hands shoulder-width apart, and lower your body until your chest almost touches the ground. Push back up to the starting position.",
        "sets": 3,
        "reps": 10
    },
    {
        "name": "Squats",
        "description": "Stand with your feet shoulder-width apart and your toes slightly turned out. Lower your hips down and back like you're sitting in a chair, keeping your weight in your heels, until your thighs are parallel to the ground. Stand back up to the starting position.",
        "sets": 3,
        "reps": 10
    },
    {
        "name": "Plank",
        "description": "Start in a high plank position with your hands shoulder-width apart and your shoulders stacked over your wrists. Engage your core and hold for the desired amount of time.",
        "sets": 3,
        "duration": "30 seconds"
    }
]
const Tuesday = [
    {
        "name": "Lunges",
        "description": "Stand with your feet hip-width apart, and take a large step forward with your right foot. Bend both knees to lower your body until your left knee almost touches the ground. Push back up to the starting position and repeat with the other leg.",
        "sets": 3,
        "reps": 10
    },
    {
        "name": "Burpees",
        "description": "Start in a standing position, and quickly drop down to the ground into a push-up position. Do a push-up, jump your feet forward to your hands, and jump up into the air.",
        "sets": 3,
        "reps": 10
    },
    {
        "name": "Side Plank",
        "description": "Start in a high plank position with your hands shoulder-width apart and your shoulders stacked over your wrists. Rotate your body to one side, stacking your feet on top of each other and lifting your opposite arm towards the ceiling. Hold for the desired amount of time, then repeat on the other side.",
        "sets": 3,
        "duration": "30 seconds"
    }
]
const Wednesday = [
    {
        "name": "Push-ups",
        "description": "Start in a high plank position with your hands shoulder-width apart, and lower your body until your chest almost touches the ground. Push back up to the starting position.",
        "sets": 3,
        "reps": 10
    },
    {
        "name": "Squats",
        "description": "Stand with your feet shoulder-width apart and your toes slightly turned out. Lower your hips down and back like you're sitting in a chair, keeping your weight in your heels, until your thighs are parallel to the ground. Stand back up to the starting position.",
        "sets": 3,
        "reps": 10
    },
    {
        "name": "Plank",
        "description": "Start in a high plank position with your hands shoulder-width apart and your shoulders stacked over your wrists. Engage your core and hold for the desired amount of time.",
        "sets": 3,
        "duration": "30 seconds"
    }
]
const Thursday = [
    {
        "name": "Mountain Climbers",
        "description": "Start in a high plank position with your hands shoulder-width apart and your shoulders stacked over your wrists. Bring your right knee towards your chest, then quickly switch legs and bring your left knee towards your chest. Continue alternating legs as quickly as possible.",
        "sets": 3,
        "duration": "30 seconds"
    },
    {
        "name": "Bicycle Crunches",
        "description": "Lie on your back with your hands behind your head and your knees bent. Bring your right elbow towards your left knee while extending your right leg out straight. Repeat on the other side, bringing your left elbow towards your right knee while extending your left leg out straight.",
        "sets": 3,
        "reps": 20
    },
    {
        "name": "Superman",
        "description": "Lie face down on the ground with your arms and legs extended. Lift your arms, chest, and legs off the ground as high as possible, then lower back down to the starting position.",
        "sets": 3,
        "reps": 10
    }
]
const Friday = [
    {
        "name": "Jumping Jacks",
        "description": "Start standing with your feet together and your arms at your sides. Jump your feet out to the sides while raising your arms overhead, then jump back to the starting position with your arms at your sides.",
        "sets": 3,
        "reps": 20
    },
    {
        "name": "Tricep Dips",
        "description": "Sit on the edge of a sturdy chair or bench with your hands gripping the edge next to your hips. Walk your feet out a few steps and lower your body down towards the ground by bending your elbows. Push back up to the starting position.",
        "sets": 3,
        "reps": 12
    },
    {
        "name": "Russian Twists",
        "description": "Sit on the ground with your knees bent and your feet flat. Lean back slightly, then twist your torso to the right and tap your hands on the ground. Twist to the left and tap your hands on the ground, continuing to alternate sides.",
        "sets": 3,
        "reps": 20
    }
]
const Saturday = [
    {
        "name": "Jump Squats",
        "description": "Stand with your feet shoulder-width apart and your toes slightly turned out. Lower your hips down and back like you're sitting in a chair, then explosively jump up into the air. Land softly and immediately lower back down into the squat position.",
        "sets": 3,
        "reps": 10
    },
    {
        "name": "Push-up to Side Plank",
        "description": "Start in a high plank position with your hands shoulder-width apart. Lower your body into a push-up, then rotate your body to one side and lift your top arm towards the ceiling, coming into a side plank. Lower back down to the starting position and repeat on the other side.",
        "sets": 3,
        "reps": 8
    },
    {
        "name": "Reverse Lunges",
        "description": "Stand with your feet hip-width apart. Step your right foot back and lower your body down until your left knee is bent at a 90-degree angle. Push back up to the starting position and repeat on the other side.",
        "sets": 3,
        "reps": 12
    }
]


function Plan() {
    const navigate = useNavigate()
    const [day1, setDay1] = useState<WorkoutPlan[]>([])
    const [day2, setDay2] = useState<WorkoutPlan[]>([])
    const [day3, setDay3] = useState<WorkoutPlan[]>([])
    const [day4, setDay4] = useState<WorkoutPlan[]>([])
    const [day5, setDay5] = useState<WorkoutPlan[]>([])
    const [day6, setDay6] = useState<WorkoutPlan[]>([])

    useEffect(() => {
        setDay1(Monday)
        setDay2(Tuesday)
        setDay3(Wednesday)
        setDay4(Thursday)
        setDay5(Friday)
        setDay6(Saturday)
    }, [])
    return (
        <div>
            <h1 className="text-3xl font-bold my-8 text-center underline text-cyan">Full Body Workout Plan For Begineers</h1>
            {/* Monday */}
            <div className="text-white w-95 mx-10 text-center">
                <h1 className="text-3xl font-bold my-8">Day-1</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {day1.map((el, i) => (
                        <div key={i} className="border-2 border-cyan-500 rounded-md p-4" style={{ backgroundImage: 'url("https://images.pexels.com/photos/669584/pexels-photo-669584.jpeg?auto=compress&cs=tinysrgb&w=600")', backgroundSize: 'cover' }}>
                            <h2 className="text-xl font-bold mb-4">Exercise No: {i + 1}</h2>
                            <h3 className="text-lg font-bold mb-2">Exercise Name: {el.name}</h3>
                            <details className="mb-2" open>
                                <summary className="text-lg font-medium">Instructions</summary>
                                <p className="text-md">{el.description}</p>
                            </details>
                            <h3 className="text-lg font-bold mb-2">
                                No of sets: {el.sets}
                            </h3>
                            {el.reps ? (
                                <h3 className="text-lg font-bold">No of Reps: {el.reps}</h3>
                            ) : (
                                <h3 className="text-lg font-bold">Duration: {el.duration}</h3>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Tuesday */}
            <div className="text-white w-95 mx-10 text-center">
                <h1 className="text-3xl font-bold my-8">Day-2</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {day2.map((el, i) => (
                        <div key={i} className="border-2 border-cyan-500 rounded-md p-4" style={{ backgroundImage: 'url("https://images.pexels.com/photos/8472147/pexels-photo-8472147.jpeg?auto=compress&cs=tinysrgb&w=600")', backgroundSize: 'cover' }}>
                            <h2 className="text-xl font-bold mb-4">Exercise No: {i + 1}</h2>
                            <h3 className="text-lg font-bold mb-2">Exercise Name: {el.name}</h3>
                            <details className="mb-2" open>
                                <summary className="text-lg font-medium">Instructions</summary>
                                <p className="text-md">{el.description}</p>
                            </details>
                            <h3 className="text-lg font-bold mb-2">
                                No of sets: {el.sets}
                            </h3>
                            {el.reps ? (
                                <h3 className="text-lg font-bold">No of Reps: {el.reps}</h3>
                            ) : (
                                <h3 className="text-lg font-bold">Duration: {el.duration}</h3>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Wednesday */}
            <div className="text-white w-95 mx-10 text-center">
                <h1 className="text-3xl font-bold my-8">Day-3</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {day3.map((el, i) => (
                        <div key={i} className="border-2 border-cyan-500 rounded-md p-4" style={{ backgroundImage: 'url("https://images.pexels.com/photos/4753898/pexels-photo-4753898.jpeg?auto=compress&cs=tinysrgb&w=600")', backgroundSize: 'cover' }}>
                            <h2 className="text-xl font-bold mb-4">Exercise No: {i + 1}</h2>
                            <h3 className="text-lg font-bold mb-2">Exercise Name: {el.name}</h3>
                            <details className="mb-2" open>
                                <summary className="text-lg font-medium">Instructions</summary>
                                <p className="text-md">{el.description}</p>
                            </details>
                            <h3 className="text-lg font-bold mb-2">
                                No of sets: {el.sets}
                            </h3>
                            {el.reps ? (
                                <h3 className="text-lg font-bold">No of Reps: {el.reps}</h3>
                            ) : (
                                <h3 className="text-lg font-bold">Duration: {el.duration}</h3>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Thursday */}
            <div className="text-white w-95 mx-10 text-center">
                <h1 className="text-3xl font-bold my-8">Day-4</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {day4.map((el, i) => (
                        <div key={i} className="border-2 border-cyan-500 rounded-md p-4" style={{ backgroundImage: 'url("https://images.pexels.com/photos/8170745/pexels-photo-8170745.jpeg?auto=compress&cs=tinysrgb&w=600")', backgroundSize: 'cover' }}>
                            <h2 className="text-xl font-bold mb-4">Exercise No: {i + 1}</h2>
                            <h3 className="text-lg font-bold mb-2">Exercise Name: {el.name}</h3>
                            <details className="mb-2" open>
                                <summary className="text-lg font-medium">Instructions</summary>
                                <p className="text-md">{el.description}</p>
                            </details>
                            <h3 className="text-lg font-bold mb-2">
                                No of sets: {el.sets}
                            </h3>
                            {el.reps ? (
                                <h3 className="text-lg font-bold">No of Reps: {el.reps}</h3>
                            ) : (
                                <h3 className="text-lg font-bold">Duration: {el.duration}</h3>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Friday */}
            <div className="text-white w-95 mx-10 text-center">
                <h1 className="text-3xl font-bold my-8">Day-5</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {day5.map((el, i) => (
                        <div key={i} className="border-2 border-cyan-500 rounded-md p-4" style={{ backgroundImage: 'url("https://images.pexels.com/photos/8472147/pexels-photo-8472147.jpeg?auto=compress&cs=tinysrgb&w=600")', backgroundSize: 'cover' }}>
                            <h2 className="text-xl font-bold mb-4">Exercise No: {i + 1}</h2>
                            <h3 className="text-lg font-bold mb-2">Exercise Name: {el.name}</h3>
                            <details className="mb-2" open>
                                <summary className="text-lg font-medium">Instructions</summary>
                                <p className="text-md">{el.description}</p>
                            </details>
                            <h3 className="text-lg font-bold mb-2">
                                No of sets: {el.sets}
                            </h3>
                            {el.reps ? (
                                <h3 className="text-lg font-bold">No of Reps: {el.reps}</h3>
                            ) : (
                                <h3 className="text-lg font-bold">Duration: {el.duration}</h3>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Saturday */}
            <div className="text-white w-95 mx-10 text-center">
                <h1 className="text-3xl font-bold my-8">Day-6</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {day6.map((el, i) => (
                        <div key={i} className="border-2 border-cyan-500 rounded-md p-4" style={{ backgroundImage: 'url("https://images.pexels.com/photos/4753898/pexels-photo-4753898.jpeg?auto=compress&cs=tinysrgb&w=600")', backgroundSize: 'cover' }}>
                            <h2 className="text-xl font-bold mb-4">Exercise No: {i + 1}</h2>
                            <h3 className="text-lg font-bold mb-2">Exercise Name: {el.name}</h3>
                            <details className="mb-2" open>
                                <summary className="text-lg font-medium">Instructions</summary>
                                <p className="text-md">{el.description}</p>
                            </details>
                            <h3 className="text-lg font-bold mb-2">
                                No of sets: {el.sets}
                            </h3>
                            {el.reps ? (
                                <h3 className="text-lg font-bold">No of Reps: {el.reps}</h3>
                            ) : (
                                <h3 className="text-lg font-bold">Duration: {el.duration}</h3>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-20">
                <p className="mt-6 font-bold text-2xl leading-8 text-teal-400 text-center">
                    NOTE: Day-7 is Rest Day which is must. Do Repeat this plan for next 4 weeks for better results.</p>
            </div>
            <div onClick={() => navigate("/expert")}>
                <img style={{ float: 'right', width: "87px", fontSize: "70px", marginRight: "-18%", position: "fixed", top: "70%", left: "93.3%" }} src={bot} />
            </div>

        </div>
    )
};

export default Plan;