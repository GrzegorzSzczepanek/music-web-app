// src/pages/HomePage.tsx
import React from 'react';
import Home from '../components/specific/Home/Home';
import MainLayout from '../components/layout/MainLayout';

const HomePage: React.FC = () => {
  
  const MainContainer = {
    maxHeight: '100vh',
  }
  
  return (
    <div style={MainContainer}>
      
      <MainLayout>
        <Home />
      </MainLayout>

    </div>
  );
};

export default HomePage;
