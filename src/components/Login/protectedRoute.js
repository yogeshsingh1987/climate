import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {onAuthStateChanged, auth} from '../../firebase'

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth , user => {
      console.log("onAuthStateChanged: ", user);
      if(user && user?.uid){
        setIsAuthenticated(true);
      }
      setShow(true);
    })
  }, [])
  return(
    show && (isAuthenticated ? children : <Navigate to="/login" />)
  )
};
export default ProtectedRoute;