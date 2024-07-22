from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from .models import Song, User
from . import db

main = Blueprint('main', __name__)

@main.route('/api/music', methods=['GET'])
def get_music():
    try:
        songs = Song.query.all()
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
        return jsonify(songs_list)
    except Exception as e:
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
        return jsonify({"error": "Internal Server Error"}), 500
    return jsonify(songs_list)

@main.route('/api/like_song', methods=['POST'])
@jwt_required()
def like_song():
    data = request.get_json()
    print(f"Received data: {data}")
    song_id = data.get('song_id')
    user_id = get_jwt_identity()

    print(f"Received song_id: {song_id}, user_id: {user_id}")

    if not song_id or not user_id:
        return jsonify({'success': False, 'message': 'Song ID or user ID not provided.'}), 400

    user = User.query.get(user_id)
    if not user:
        return jsonify({'success': False, 'message': 'Invalid user ID.'}), 401

    song = Song.query.get(song_id)
    if not song:
        return jsonify({'success': False, 'message': 'Song not found.'}), 404

    if song not in user.liked_songs:
        user.liked_songs.append(song)
        db.session.commit()

    return jsonify({'success': True, 'message': 'Song liked successfully!'}), 200
