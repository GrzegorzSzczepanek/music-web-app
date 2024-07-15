// src/components/layout/MainLayout.tsx
import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import SearchBar from '../common/SearchBar/SearchBar';
import PlaylistSideBar from '../common/PlaylistSideBar/PlaylistSideBar';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navbar}>
        <Header />
      </div>
      <div className={styles.searchbar}>
        <SearchBar />
      </div>
      <main className={styles.main}>
        {children}
      </main>
      <aside className={styles.sidebar}>
        <PlaylistSideBar playlistId={1} />
      </aside>
      
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
