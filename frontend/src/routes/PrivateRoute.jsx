import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const showToastErrorMessage = () => {
    toast.error('Please Login First !!', {
      position: toast.POSITION.TOP_CENTER
    });
  };
  let token = localStorage.getItem("token")
  // console.log(token)
  if (token) {
    return children
  } else {

    showToastErrorMessage()
    return <> <Navigate to={'/signin'} state={location.pathname} replace={true}/> <ToastContainer autoClose={2000} /></>
  }

}
export default PrivateRoute;
// const location = useLocation(); console.log(location);
// return(!auth?:children)