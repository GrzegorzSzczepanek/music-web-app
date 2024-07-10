# app/routes.py
from flask import Blueprint, jsonify

main = Blueprint('main', __name__)

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
