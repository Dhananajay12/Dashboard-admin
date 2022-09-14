import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Users from './pages/Users.jsx';
import Analytics from './pages/Analytics.jsx';

import Course from './pages/Course.jsx';
import CourseList from './pages/CourseList.jsx';
import SingleUser from './pages/SingleUser';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<Users />} />
          
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Course />} />
          <Route path="/productList" element={<CourseList />} />
          <Route path="/singleuser" element={<SingleUser />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;