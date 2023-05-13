import { GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS, WorkoutActionTypes } from "./actionTypes"
// import { PayloadAction } from "@reduxjs/toolkit";

interface Workout { id: Number, exercise_name: String, videoURL: string[], steps: string[], Category: String, Difficulty: String, Force: String, Grips: String, target: Object, youtubeURL: String, details: String }

interface initState {
    isLoading: boolean,
    isError: boolean,
    workouts: Workout[]
}
const initialState: initState = {
    isLoading: false,
    isError: false,
    workouts: []
}

export const reducer = (state = initialState,action:WorkoutActionTypes) => {
    switch (action.type) {
        case GET_REQUEST:
            return { ...state, isLoading: true }
        case GET_REQUEST_SUCCESS:
            return { ...state, isLoading: false, workouts: action.payload.data }
        case GET_REQUEST_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return state
    }
}