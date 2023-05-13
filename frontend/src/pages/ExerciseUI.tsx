import React from 'react'
let data = [
    {
        "_id": {
            "$oid": "645e1723b0003d2e8072d79f"
        },
        "id": 1,
        "exercise_name": "Dumbbell Curl",
        "videoURL": [
            "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-curl-front.mp4#t=0.1",
            "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-curl-side.mp4#t=0.1"
        ],
        "steps": [
            "Stand up straight with a dumbbell in each hand at arm's length.",
            "Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder.",
            "Lower to original position and repeat with opposite arm"
        ],
        "Category": "Dumbbells",
        "Difficulty": "Beginner",
        "Force": "Pull",
        "Grips": "Underhand",
        "target": {
            "Primary": [
                "Biceps"
            ]
        },
        "youtubeURL": "https://www.youtube.com/embed/P1FqV-oFn5M",
        "details": "\nHow To Perform the Dumbbell Bicep CurlSetupGrab two dumbbells and stand tall with your shoulder blades pulled back and your chest poked out. You can start with either the dumbbells in front of your quads or off to the sides of your legs. Whichever is more comfortable. Also, whichever will allow you to fully extend your elbows at the bottom of each rep.Use a shoulder width or slightly inside of shoulder width stance. Performing Begin the rep by flexing your elbows. Try to touch your forearms to your biceps at the very top of the movement. Then begin the eccentric. Make sure to fully extend your elbows at the bottom of each rep so you get a full range of motion. It is easy to use momentum on a bicep curl. We want our muscles and not momentum to do the work. So make sure you keep these strict. If you find yourself swinging the weight up, then your biceps have hit fatigue and it's time to end the set.\n"
    },
    {
        "_id": {
            "$oid": "645e1723b0003d2e8072d7a2"
        },
        "id": 4,
        "exercise_name": "Kettlebell Concentration Curl",
        "videoURL": [
            "https://media.musclewiki.com/media/uploads/videos/branded/male-kettlebell-concentration-curl-front.mp4#t=0.1",
            "https://media.musclewiki.com/media/uploads/videos/branded/male-kettlebell-concentration-curl-side.mp4#t=0.1"
        ],
        "steps": [
            "Sitting on a chair with your legs apart, rest your arm against your thigh and hold the kettlebell with your arm extended towards the floor.",
            "Bending your arm at the elbow, lift the kettlebell until your palm faces your shoulder.",
            "Lower to the starting position and repeat."
        ],
        "Category": "Kettlebells",
        "Difficulty": "Intermediate",
        "Force": "Pull",
        "Grips": "Underhand",
        "target": {
            "Primary": [
                "Biceps"
            ]
        },
        "youtubeURL": ""
    },
    {
        "_id": {
            "$oid": "645e1723b0003d2e8072d7c4"
        },
        "id": 38,
        "exercise_name": "TRX Curl",
        "videoURL": [
            "https://media.musclewiki.com/media/uploads/videos/branded/male-trx-curl-front.mp4#t=0.1",
            "https://media.musclewiki.com/media/uploads/videos/branded/male-trx-curl-side.mp4#t=0.1"
        ],
        "steps": [
            "Hold the TRX straps with an underhand grip and lean back and away from the anchor point.",
            "Keep your elbows high as you flex your elbows. Pull your fists toward your forehead."
        ],
        "Category": "TRX",
        "Difficulty": "Beginner",
        "Force": "Pull",
        "Grips": "Underhand",
        "target": {
            "Primary": [
                "Biceps"
            ]
        },
        "youtubeURL": ""
    },
    {
        "_id": {
            "$oid": "645e1723b0003d2e8072d7df"
        },
        "id": 65,
        "exercise_name": "Scorpion Twist Pose",
        "videoURL": [
            "https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-scorpion-twist-pose-front.mp4#t=0.1",
            "https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-scorpion-twist-pose-side.mp4#t=0.1"
        ],
        "steps": [
            "Begin in a downward-facing dog pose.",
            "Slowly lift one leg up towards the ceiling, keeping your hips level and your toes pointed.",
            "Bend your lifted leg and try to touch your toes to the back of your head.",
            "Once you have a firm grip with your toes, slowly begin to twist your torso towards the lifted leg.",
            "Keep your hands and feet firmly planted on the ground as you hold the pose for a few breaths. Release the pose and repeat on the other side."
        ],
        "Category": "Yoga",
        "Difficulty": "Beginner",
        "Force": "Hold",
        "target": {
            "Primary": [
                "Chest"
            ],
            "Secondary": [
                "Biceps"
            ],
            "Tertiary": [
                "Lower back"
            ]
        },
        "youtubeURL": ""
    }
]
function ExerciseUI() {
    return (
        <div className='text-white'>
            <h1 className="text-4xl font-bold mb-4 text-center ">Workout Exercises</h1>
            <p className="text-gray-600 mb-4 mx-20 text-white">
                This workout includes a variety of exercises targeting different muscle groups. Follow the steps below to perform each exercise correctly. These exercises are designed to improve strength, flexibility, and overall fitness. Make sure to warm up before starting the workout and listen to your body to prevent any injuries. Remember to breathe properly and maintain proper form throughout the exercises. If you have any underlying health conditions or concerns, consult with a healthcare professional before engaging in this workout routine. Enjoy your workout and stay committed to your fitness journey!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">


                {data.map((exercise) => (

                    <div key={exercise._id.$oid} className="p-4 border border-gray-300 rounded text-white">

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
                                <h3 className=" font-medium text-teal-400 inline">Target 👇</h3>
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
            </div>
        </div>
    )
}

export default ExerciseUI