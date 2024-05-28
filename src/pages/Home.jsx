import React from 'react'
import { useAppSelector } from '../hooks/hooks';
import { authService } from '../services/authServices';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import MiniDrawer from '../components/MiniDrawer';

export const Home = () => {
  const { email } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <MiniDrawer>
        <h1>Home</h1>
    </MiniDrawer>
  )
}
{/* <button onClick={() => {
        logout();
        navigate("/login");
      }}>logout</button> */}