import React from "react";
import "./PlaylistSideBar.css";

interface PlaylistSideBarProps {
    playlistId: number;
}

const PlaylistSideBar: React.FC<PlaylistSideBarProps> = ({playlistId}) => {
    return (
        <div className="playlist-sidebar">
        <h2>Playlists</h2>
        <ul>
            <li>
            <a href="/playlist/1">{playlistId}</a>
            </li>
            <li>
            <a href="/playlist/2">Playlist 2</a>
            </li>
            <li>
            <a href="/playlist/3">Playlist 3</a>
            </li>
        </ul>
        </div>
    );
};

export default PlaylistSideBar;