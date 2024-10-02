import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      navigate('/home');
    } else {
      alert('نام کاربری یا رمز عبور اشتباه است');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
      <Link to="/signup" style={{ textAlign: 'left', display: 'block', marginBottom: '10px' }}>
        ثبت‌نام
      </Link>
        <h2>صفحه ورود</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required // اضافه کردن ویژگی الزامی
          />
          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required // اضافه کردن ویژگی الزامی
          />
          <Link to="/forgot-password" style={{ display: 'block', margin: '10px 0' }}>
          فراموشی رمز عبور
        </Link>
          <button type="submit">ورود</button>
        </form>
      </div>
    </div>
  );
};

export default Login;