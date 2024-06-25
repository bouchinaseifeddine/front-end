import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const IsAuth = ({ children }) => {
    const isAuth = useSelector((state) => state.CurentUser.token);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (isAuth === "") {
        navigate('/');
      }
    }, [isAuth]);
  
    return isAuth && (
        <>
         {children }
        </>
    )
  };