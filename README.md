# Pink Blog

A simple React blog application for learning and experimenting with CRUD operations, routing, and custom hooks.

## Features

- View all blog posts
- Create new blog posts
- View blog post details
- Delete blog posts
- Responsive dark UI with pink accents
- Custom hooks for data fetching
- Error handling for network requests
- 404 Not Found page

## Technologies Used

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [JSON Server](https://github.com/typicode/json-server) ( mock backend)
- [npm](https://www.npmjs.com/) (Node package manager)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/NuhaG/pink-blog
   cd pink-blog
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the React development server:**
   ```
   npm start
   ```

4. **Start JSON Server for the backend:**
   ```
   npx json-server --watch data/db.json --port 8000
   ```

### Folder Structure

```
src/
  App.js
  Navbar.js
  home.js
  BlogList.js
  blogDetails.js
  create.js
  notFound.js
  useFetch.js
  index.js
  index.css
data/
  db.json
build/
  ...
```

## Usage

- Visit `http://localhost:3000` to view the app.
- Visit `http://localhost:8000/blogs` to view the mock API.
- Create, view, and delete blog posts from the UI.

## Credits

This project is based on the [Net Ninja's React Tutorial](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d).
