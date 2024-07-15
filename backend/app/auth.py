# backend/app/auth.py

from flask import Blueprint, request, jsonify
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        login_user(user, remember=True)
        return jsonify({'success': True, 'message': 'Logged in successfully!'}), 200
    return jsonify({'success': False, 'message': 'Invalid email or password.'}), 401

@auth.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({'success': True, 'message': 'Logged out successfully!'}), 200

@auth.route('/sign-up', methods=['POST'])
def sign_up():
    data = request.get_json()
    email = data.get('email')
    username = data.get('username')
    password1 = data.get('password1')
    password2 = data.get('password2')
    
    print("\n\n\n\n\n")
    print(email, username, password1, password2)

    if User.query.filter_by(email=email).first():
        return jsonify({'success': False, 'message': 'Email already exists.'}), 400
    elif len(email) < 4:
        return jsonify({'success': False, 'message': 'Email must be greater than 3 characters.'}), 400
    elif len(username) < 2:
        return jsonify({'success': False, 'message': 'Username must be greater than 1 character.'}), 400
    elif password1 != password2:
        return jsonify({'success': False, 'message': "Passwords don't match."}), 400
    elif len(password1) < 7:
        return jsonify({'success': False, 'message': 'Password must be at least 7 characters.'}), 400
    else:
        new_user = User(email=email, username=username, password=generate_password_hash(password1, method='pbkdf2:sha256'))
        db.session.add(new_user)
        db.session.commit()
        login_user(new_user, remember=True)
        return jsonify({'success': True, 'message': 'Account created!'}), 201
