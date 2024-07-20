import sqlite3

# Connect to SQLite database
conn = sqlite3.connect('backend/instance/database.db')
cursor = conn.cursor()

# Generate placeholder song data
placeholder_songs = [
    {
        "title": "Placeholder Song 1",
        "artist": "Artist 1",
        "album": "Album 1",
        "album_image": "https://picsum.photos/200/300?random=1",
        "release_date": "2020-01-01",
        "genre": "Pop",
        "artist_id": 1,
        "link": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        "title": "Placeholder Song 2",
        "artist": "Artist 2",
        "album": "Album 2",
        "album_image": "https://picsum.photos/200/300?random=2",
        "release_date": "2020-02-01",
        "genre": "Rock",
        "artist_id": 2,
        "link": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        "title": "Placeholder Song 3",
        "artist": "Artist 3",
        "album": "Album 3",
        "album_image": "https://picsum.photos/200/300?random=3",
        "release_date": "2020-03-01",
        "genre": "Jazz",
        "artist_id": 3,
        "link": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
        "title": "Placeholder Song 4",
        "artist": "Artist 4",
        "album": "Album 4",
        "album_image": "https://picsum.photos/200/300?random=4",
        "release_date": "2020-04-01",
        "genre": "Classical",
        "artist_id": 4,
        "link": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
        "title": "Placeholder Song 5",
        "artist": "Artist 5",
        "album": "Album 5",
        "album_image": "https://picsum.photos/200/300?random=5",
        "release_date": "2020-05-01",
        "genre": "Hip Hop",
        "artist_id": 5,
        "link": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
]

# Insert placeholder song data into the database
for song in placeholder_songs:
    cursor.execute("""
        INSERT INTO song (title, artist, album, album_image, release_date, genre, artist_id, link)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, (song["title"], song["artist"], song["album"], song["album_image"], song["release_date"], song["genre"], song["artist_id"], song["link"]))

# Commit the transaction
conn.commit()

# Close the connection
conn.close()
