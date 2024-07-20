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
  const [currentSong, setCurrentSong] = useState<any>({
    title: 'Placeholder Song 1',
    artist: 'Artist 1',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://picsum.photos/200/300?random=1',
    release_date: '2020-01-01',
    id: 1,
  })

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
        {React.cloneElement(children as React.ReactElement<any>, { searchResults, setCurrentSong })}
      </main>
      <aside className={styles.sidebar}>
        <PlaylistSideBar playlistId={1} />
      </aside>
      <div className={styles.footer}>
        {/* {console.log(currentSong)} */}
        <Player currentSong={currentSong} />
      </div>
    </div>
  );
};

export default MainLayout;
