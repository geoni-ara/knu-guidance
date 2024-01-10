import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ changePageForBoardList }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // 서버에서 이메일과 비밀번호 일치 여부를 확인
      const { data: users } = await axios.get(`http://localhost:3001/user`);
  
      if (users.length > 0) {
        const user = users.find(user => user.email === email && user.password === password);
  
        if (user) {
          const response = await axios.post('http://localhost:3001/user', {
            email: email,
            password: password,
          });
          localStorage.setItem('accessToken', response.headers['authorization']);
          localStorage.setItem('refreshToken', response.headers['refresh-token']);
          changePageForBoardList();
        } else {
          alert('이메일 또는 비밀번호가 올바르지 않습니다.');
        }
      } else {
        alert('이메일 또는 비밀번호가 올바르지 않습니다11.');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  
  

  return (
    <div className="board-wrapper">
      <div style={{ display: 'flex' }}>
        <div style={{ width: '10%' }}>Email</div>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '10%' }}>Password</div>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button onClick={handleLogin}>로그인</button>
        <button onClick={changePageForBoardList}>돌아가기</button>
      </div>
    </div>
  );
};

export const auth = axios.create({
  baseURL: 'http://localhost:3001',
});

auth.interceptors.request.use((config) => {
  config.headers['authorization'] = localStorage.getItem('accessToken');
  config.headers['refresh-token'] = localStorage.getItem('refreshToken');
  return config;
});

auth.interceptors.response.use(
  (response) => {
    if (response.headers['authorization']) {
      localStorage.removeItem('accessToken');
      localStorage.setItem('accessToken', response.headers['authorization']);
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data.error === 'INVALID_TOKEN') {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      alert('토큰이 만료되었습니다. 다시 로그인해주세요');
    }
    return Promise.reject(error);
  }
);

export default Login;
