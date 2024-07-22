# backend/app/routes.py
from flask import Blueprint, request, jsonify
from flask import session
from flask_login import current_user, login_required
from .models import Song, User
from . import db

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
    

@main.route('/api/new-releases', methods=['GET'])
def get_new_releases():
    try:
        songs = Song.query.order_by(Song.release_date.desc()).limit(10).all()
        songs_list = [
            {
                'id': song.id,
                'title': song.title,
                'artist': song.artist,
                'artist_id': song.artist_id,
                'album': song.album,
                'image': song.album_image,
                'release_date': song.release_date,
                'target': song.artist_id,
                'url': song.link
            }
            for song in songs
        ]
    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({"error": "Internal Server Error"}), 500
    return jsonify(songs_list)


@main.route('/api/like_song', methods=['POST'])
@login_required
def like_song():
    try:
        data = request.get_json()
        song_id = data.get('song_id')

        if not song_id:
            return jsonify({'success': False, 'message': 'No song ID provided.'}), 400

        song = Song.query.get(song_id)
        if not song:
            return jsonify({'success': False, 'message': 'Song not found.'}), 404

        if song in current_user.liked_songs:
            return jsonify({'success': False, 'message': 'Song already liked.'}), 400

        current_user.liked_songs.append(song)
        db.session.commit()

        return jsonify({'success': True, 'message': 'Song added to liked songs.'}), 200
    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({"error": "Internal Server Error"}), 500


@main.route('/api/current_user_session', methods=['GET'])
def get_current_user_session():
    try:
        user_id = session.get('user_id')
        if not user_id:
            return jsonify({"error": "User not logged in"}), 401
        return jsonify({'user': user_id})
    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({"error": "Internal Server Error"}), 500


@main.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({'message': 'Hello from Flask!'})
