import React, { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollToTop from './components/ScrollToTop';
import ToggleSwitch from './components/ToggleSwitch';
import NeboEngineering from './components/NeboEngineering';
import ChatBot from './components/ChatBot';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

import Dashboard from './pages/Admin/Dashboard';
import UploadImage from './pages/Admin/UploadBlogs';
import Images from './pages/Admin/UploadedBlogs';
import Login from "./pages/Admin/Login";
import AdminGuard from "./pages/Admin/AdminGuard";

const MainLayout: React.FC<{
  toggleSiteMode: () => void;
}> = ({ toggleSiteMode }) => {
  const location = useLocation();

 const isAdminRoute =
  window.location.hash.startsWith('#/admin') ||
  window.location.hash.startsWith('#/login');

  return (
    <>
      <ScrollToTop />

      <div className="relative min-h-screen overflow-x-hidden">
        {!isAdminRoute && (
          <>
            <AnimatedBackground />
            <Navbar onSwitchToEngineering={toggleSiteMode} />
          </>
        )}

        <Routes>
          {/* Public Website */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Admin Panel */}
        <Route path="/login" element={<Login />} />

<Route
  path="/admin"
  element={
    <AdminGuard>
      <Dashboard />
    </AdminGuard>
  }
/>

<Route
  path="/admin/upload"
  element={
    <AdminGuard>
      <UploadImage />
    </AdminGuard>
  }
/>

<Route
  path="/admin/images"
  element={
    <AdminGuard>
      <Images />
    </AdminGuard>
  }
/>
</Routes>
        {!isAdminRoute && (
          <>
            <Footer />
            <ChatBot />
          </>
        )}
      </div>
    </>
  );
};

const App: React.FC = () => {
  const [isEngineeringMode, setIsEngineeringMode] = useState(() => {
    const savedMode = localStorage.getItem('neboSiteMode');
    return savedMode === 'engineering';
  });

  const toggleSiteMode = () => {
    setIsEngineeringMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem(
        'neboSiteMode',
        newMode ? 'engineering' : 'it-solutions'
      );
      return newMode;
    });
  };

  if (isEngineeringMode) {
    return (
      <Router>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="fixed top-4 right-2 sm:top-6 sm:right-6 z-[9999] flex flex-col gap-3 items-end">
            <div className="it-glass p-1.5 sm:p-2 rounded-full shadow-lg scale-[0.85] sm:scale-100 origin-top-right">
              <ToggleSwitch
                isEngineering={isEngineeringMode}
                onToggle={toggleSiteMode}
              />
            </div>
          </div>

          <Routes>
            <Route
              path="*"
              element={
                <div className="min-h-screen w-full">
                  <NeboEngineering
                    onSwitchToIT={toggleSiteMode}
                  />
                </div>
              }
            />
          </Routes>

          <ChatBot />
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <MainLayout toggleSiteMode={toggleSiteMode} />
    </Router>
  );
};

export default App;