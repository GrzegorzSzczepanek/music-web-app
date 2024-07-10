// src/pages/HomePage.tsx
import React from 'react';
import Home from '../components/specific/Home/Home';
import MainLayout from '../components/layout/MainLayout';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

export default HomePage;
