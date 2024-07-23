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
    user_id = get_jwt_identity()
    print(user_id)
    song_id = request.json.get('song_id')

    user = User.query.get(user_id)
    song = Song.query.get(song_id)

    if not user or not song:
        return jsonify({"error": "User or song not found"}), 404

    user.liked_songs.append(song)
    db.session.commit()

    return jsonify({"message": "Song liked successfully"}), 200
