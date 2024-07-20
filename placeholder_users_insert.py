import sqlite3

# Connect to SQLite database
conn = sqlite3.connect('backend/instance/database.db')
cursor = conn.cursor()

# Generate placeholder user data
placeholder_users = [
    {
        "email": "artist1@example.com",
        "username": "artist1",
        "password": "password1"
    },
    {
        "email": "artist2@example.com",
        "username": "artist2",
        "password": "password2"
    },
    {
        "email": "artist3@example.com",
        "username": "artist3",
        "password": "password3"
    },
    {
        "email": "artist4@example.com",
        "username": "artist4",
        "password": "password4"
    },
    {
        "email": "artist5@example.com",
        "username": "artist5",
        "password": "password5"
    },
]

# Insert placeholder user data into the database
for user in placeholder_users:
    cursor.execute("""
        INSERT INTO user (email, username, password)
        VALUES (?, ?, ?)
    """, (user["email"], user["username"], user["password"]))

# Commit the transaction
conn.commit()

# Close the connection
conn.close()
