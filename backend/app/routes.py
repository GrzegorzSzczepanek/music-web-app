# backend/app/routes.py
from flask import Blueprint, jsonify
from .models import Song

main = Blueprint('main', __name__)

@main.route('/api/music', methods=['GET'])
def get_music():
    try:
        # Log statement to verify endpoint hit
        print("Endpoint /api/music hit")

        songs = Song.query.all()
        
        # Log statement to verify query execution
        print(f"Query executed, number of songs retrieved: {len(songs)}")

        songs_list = [
            {
                'id': song.id,
                'title': song.title,
                'artist': song.artist,
                'album': song.album,
                'image': song.album_image,
                'release_date': song.release_date,
                'target': song.artist_id,
                'url': song.link
            }
            for song in songs
        ]

        # Log statement to verify data preparation
        print(f"Songs list prepared: {songs_list}")

        return jsonify(songs_list)
    except Exception as e:
        # Log the exception message
        print(f"Error occurred: {e}")
        return jsonify({"error": "Internal Server Error"}), 500

@main.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({'message': 'Hello from Flask!'})

@main.route('/api/items', methods=['GET'])
def get_items():
    items = [
        {'id': 1, 'name': 'Jan'},
        {'id': 2, 'name': 'paweł'},
        {'id': 3, 'name': 'drugi'}
    ]
    return jsonify(items)
