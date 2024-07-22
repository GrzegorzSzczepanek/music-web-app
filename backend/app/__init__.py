from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_cors import CORS
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
DB_NAME = "database.db"

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'hjshjhdjah kjshkjdhjs'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  # Change this!
    db.init_app(app)

    jwt = JWTManager(app)

    # Enable CORS for the app
    CORS(app, supports_credentials=True)

    from .auth import auth
    app.register_blueprint(auth, url_prefix='/')
    
    from .routes import main
    app.register_blueprint(main)

    from .models import User

    with app.app_context():
        db.create_all()

    return app

def create_database(app):
    if not path.exists('website/' + DB_NAME):
        db.create_all(app=app)
        print('Created Database!')
