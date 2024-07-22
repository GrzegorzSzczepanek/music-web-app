from flask import Flask, request, jsonify
from flask_cors import CORS
from .app.models import User

from flask import g

app = Flask(__name__)
CORS(app)

@app.before_request
def load_user():
    session_token = request.cookies.get('session')
    if session_token:
        user = User.query.filter_by(session_token=session_token).first()
        if user:
            g.user_id = user.id
        else:
            g.user_id = None
    else:
        g.user_id = None

@app.route('/api/some_protected_route')
def protected_route():
    if g.user_id:
        return f"Hello user {g.user_id}"
    else:
        return "Unauthorized", 401

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    # Here you should add logic to store the user in the database
    return jsonify({'message': 'User created successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)
