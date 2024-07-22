import React, { useEffect } from 'react';
import MusicTile from '../../common/MusicTile/MusicTile'; // Adjust the import according to your file structure
import './NewReleases.css';
import { fetchNewReleases } from '../../../services/api'; // Adjust the import according to your file structure

interface Song {
  image: string;
  title: string;
  release_date: string;
  genre: string;
  artist: string;
  artist_id: number;
  url: string;
  id: number;
}

interface NewReleasesProps {
  setCurrentSong: any;
}

const NewReleases: React.FC<NewReleasesProps> = ({ setCurrentSong }) => {

    const [newReleases, setNewReleases] = React.useState<Song[]>([]);

    useEffect(() => {
    const fetchReleases = async () => {
        const releases = await fetchNewReleases();
        setNewReleases(releases);
    };

    fetchReleases();
    }, []);

  return (
    <div className='container'>
      <h1>Welcome to the Music App</h1>
      <h2>New Releases</h2>
      <div>
        {newReleases.map((song, index) => (
            <div>
                <MusicTile key={index} song={song} setCurrentSong={setCurrentSong} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
