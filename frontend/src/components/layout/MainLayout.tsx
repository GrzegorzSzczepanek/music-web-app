// src/components/layout/MainLayout.tsx
import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer';
import SearchBar from '../common/SearchBar/SearchBar';
import PlaylistSideBar from '../common/PlaylistSideBar/PlaylistSideBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  
  return (
    <div>
      <Header />
      <SearchBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
