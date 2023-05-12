// import axios from "axios"
// import {  SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType"
// import { Dispatch } from "redux";

// interface signupform {
//     name: string;
//     email: string;
//     age: number;
//     height: number;
//     weight: number;
//     gender: string;
//     disease: string;
//     password: string;

// }
// export const RegisterUser=(data:signupform)=>(dispatch:Dispatch)=>{
//     dispatch({type:SIGNUP_REQUEST})
//     axios.post(`http://localhost:8080/user/register`,data)
//     .then((res)=>{
//         console.log(res.data)
//         dispatch({type:SIGNUP_SUCCESS})
//     })
//     .catch((err)=>{
//         console.log(err);
//         dispatch({type:SIGNUP_FAILURE})
//     })
   
// }

import axios from "axios";
import { Dispatch ,Action} from "redux";
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";

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

export const RegisterUser = (data: SignupForm) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: SIGNUP_REQUEST });
  return axios 
    .post(`http://localhost:8080/user/register`, data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SIGNUP_FAILURE });
    });
};
