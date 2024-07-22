import React, { useEffect } from 'react';
import MusicTile from '../../common/MusicTile/MusicTile';
import styles from './Home.module.css';
import { fetchNewReleases } from '../../../services/api';
import NewReleases from '../NewReleases/NewReleases';

interface Song {
  title: string;
  artist: string;
  album: string;
  image: string;
  release_date: string;
  genre: string;
  artist_id: number;
  url: string;
  id: number;
}


interface HomeProps {
  searchResults: Song[];
  setCurrentSong: React.Dispatch<React.SetStateAction<string>>;
}

interface NewReleasesProps {
  newReleases: Song[];
  setCurrentSong: any;
}


const Home: React.FC<HomeProps> = ({ searchResults, setCurrentSong }) => {


  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((song, index) => (
            <MusicTile
              song={song}
              setCurrentSong={setCurrentSong}
            />
          ))
        ) : (
          <NewReleases setCurrentSong={setCurrentSong} />
          
        )}
      </div>
    </div>
  );
};

export default Home;
