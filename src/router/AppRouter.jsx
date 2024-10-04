import React, { Component } from 'react';
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";

import AboutPage from '../pages/AboutPages';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import AllCoursePage from '../pages/AllCoursePage';
import RefundPage from '../pages/RefundPage';
import TremsPage from '../pages/TremsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';

class AppRouter extends Component {
  render() {
    return (
      
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/service" element={<AllServicePage />} />
          <Route exact path="/course" element={<AllCoursePage />} />
          <Route exact path="/portfolio" element={<PortfolioPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/refund" element={<RefundPage />} /> 
          <Route exact path="/trems" element={<TremsPage />} /> 
          <Route exact path="/projectdetails" element={<ProjectDetailPage />} />
          <Route exact path="/coursedetails" element={<CourseDetailsPage />} />
        </Routes>
   
    );
  }
}

export default AppRouter;
