import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// bootstrap
import { Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const LoginPage = ({setLoginState}) => {
  const navigate = useNavigate();
  const loginUser = () => {
    setLoginState(true);
    navigate('/');
  }
  return (
    <div>
      <Container>
      <Box className='login-box'
        component="form"
        sx={{
          '& > :not(style)': { m: 2, width: '70%' },
        }}
        noValidate
        autoComplete="off"
      >
      <TextField id="user_id" label="아이디를 입력하세요." variant="standard" />
      <TextField id="user_pw" label="비밀번호를 입력하세요." variant="standard" />
      <Button variant="contained" disableElevation onClick={loginUser}>
        로그인
      </Button>
      </Box>
      </Container>
    </div>
  )
}

export default LoginPage