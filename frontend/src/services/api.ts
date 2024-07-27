import { i } from "vite/dist/node/types.d-aGj9QkWt";

const API_URL = 'http://localhost:5000/api';

export const fetchSongs = async () => {
  const response = await fetch(`${API_URL}/music`);
  return response.json();
}

export const fetchNewReleases = async () => {
  const response = await fetch(`${API_URL}/new-releases`);
  return response.json();
}

export const likeSong = async (songId: number) => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/like_song`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ song_id: songId })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error('There was an error liking the song!', error);
  }
};


export const fetchLikedSongs = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found');
    return;
  }
  try {
    const response = await fetch(`${API_URL}/liked_songs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error('There was an error liking the song!', error);
  }
};


export const fetchUserData = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was an error fetching user data', error);
  }
};

