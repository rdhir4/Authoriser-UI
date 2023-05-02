import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Auth/LoginForm/login-form.component';
import ProfileComponent from '../Profile/profile.component';

const AppRoutes = () => (
      <Routes>
        <Route path='/'
        element={<Navigate to = '/logIn' replace/>}
        />
        <Route path='/logIn'
        element={<Login/>}
        />
        <Route
          path="/profile"
          element={<ProfileComponent/>}
        />
      </Routes>
);

export default AppRoutes;
