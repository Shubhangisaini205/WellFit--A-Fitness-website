import React, { useEffect } from "react";
import { Navigate } from "react-router";
// import { useToast } from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ children }) => {
  // const toast = useToast()
  const showToastErrorMessage = () => {
    toast.error('Please Login First !!', {
      position: toast.POSITION.TOP_CENTER
    });
  };
  let token = localStorage.getItem("token")
  console.log(token)
  if (token) {
    return children
  } else {

    showToastErrorMessage()
    return <> <Navigate to="/signin" /> <ToastContainer autoClose={2000} /></>
  }

}
export default PrivateRoute;