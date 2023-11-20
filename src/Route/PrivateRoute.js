import React from 'react';
import ProductDetailPage from "../page/ProductDetailPage";
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({loginState}) => {
  return (
    loginState == true?<ProductDetailPage/> : <Navigate to="/login" />
  )
}

export default PrivateRoute