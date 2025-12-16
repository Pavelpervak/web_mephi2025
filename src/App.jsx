// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import UserPage from "./pages/UserPage/UserPage";
import Header from "./components/Header/Header";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MoviePage from "./pages/MoviePage/MoviePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/profile" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;