import axios from "axios"

export const getWorkouts=()=>{
    return axios.get("http://localhost:8080/workouts")
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
};