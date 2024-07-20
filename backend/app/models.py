from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from . import db

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    
class Artist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    bio = db.Column(db.String(100))
    artist_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
class Song(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    artist = db.Column(db.String(100))
    album = db.Column(db.String(100))
    album_image = db.Column(db.String(100))
    release_date = db.Column(db.String(100))
    genre = db.Column(db.String(100))
    artist_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    link = db.Column(db.String(100))
    
# Association table
playlist_song = db.Table('playlist_song',
    db.Column('playlist_id', db.Integer, db.ForeignKey('playlist.id'), primary_key=True),
    db.Column('song_id', db.Integer, db.ForeignKey('song.id'), primary_key=True)
)

class Playlist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))
    songs = db.relationship('Song', secondary=playlist_song, lazy='subquery',
                            backref=db.backref('playlists', lazy=True))