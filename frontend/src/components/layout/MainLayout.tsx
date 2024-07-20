import React, { useState } from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import SearchBar from '../common/SearchBar/SearchBar';
import PlaylistSideBar from '../common/PlaylistSideBar/PlaylistSideBar';
import styles from './MainLayout.module.css';
import SearchBarSideStuff from '../common/SearchBarSideStuff/SearchBarSideStuff';
import Player from '../common/Player/Player';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [currentSongLink, setCurrentSongLink] = useState<string>("");

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navbar}>
        <Header />
      </div>
      <div className={styles.searchbar}>
        <SearchBar onSearch={setSearchResults} />
      </div>
      <div className={styles.searchBarSideStuff}>
        <SearchBarSideStuff />
      </div>
      <main className={styles.main}>
        {React.cloneElement(children as React.ReactElement<any>, { searchResults, setCurrentSongLink })}
      </main>
      <aside className={styles.sidebar}>
        <PlaylistSideBar playlistId={1} />
      </aside>
      <div className={styles.footer}>
        <Player currentSongLink={currentSongLink} />
      </div>
    </div>
  );
};

export default MainLayout;
