# Node JS Excercises

### 1. Simple HTTP Server
- Create a Node.js server that responds with "Hello, World!" when accessed.
- Exercise: Modify the server to respond with JSON `{ "message": "Hello, World!" }`.

### 2. File System Operations
- Write a script that creates a text file, writes data, reads it, and then deletes it.
- Exercise: Modify it to use asynchronous functions (fs.promises).

### 3. Basic Express Server
- Create an Express server with two routes:

    / → Returns "Welcome to my API"

    /about → Returns "This is a simple API"

- Exercise: Add a /users route that returns a JSON list of users.

### 4. Read Environment Variables
- Create a script that reads a value from .env and logs it.
- Exercise: Modify this to read multiple environment variables like DB_HOST, DB_USER.

- Hint *
    - Install `npm install dotenv` to read .env data   

### 5. Simple API Request with Axios
- Use Axios to fetch data from an API (e.g., JSONPlaceholder).
- Exercise: Modify it to fetch only user names instead of full objects.