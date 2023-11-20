import './App.css';
import { Routes, Route  } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import LoginPage from "./page/LoginPage";
import Navbar from "./component/Navbar";
import PrivateRoute from "./Route/PrivateRoute";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

// 1. 전체상품 페이지, 로그인, 상품상세페이지
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 4. 상품 디테일을 눌렀을때, 로그인이 안되어있을때 로그인 페이지가 먼저 나온다
// 5. 로그인이 되어있을 경우 상품 디테일 페이지를 볼 수 있다
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다.
// 8. 로그인을 하면 로그아웃버튼 생성 로그아웃 하면 로그인 버튼 생성
// 9. 상품을 검색할 수 있다
function App() {
  const [loginState, setLoginState] = useState(false) //true면 로그인

  useEffect(() => {
    console.log(loginState)
  },[loginState]);
  
  return (
    <div>
      <Navbar loginState ={loginState} setLoginState={setLoginState}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<LoginPage setLoginState={setLoginState}/>}/>
        <Route path="/product/:id" element={<PrivateRoute loginState={loginState}/>}/>
      </Routes>
    </div>
  );
}

export default App;
