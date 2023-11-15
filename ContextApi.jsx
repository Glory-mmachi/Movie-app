import { createContext, useContext, useState, useEffect } from "react";
import { api_key } from "./config";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const url = "https://api.themoviedb.org/3";
  // https://api.themoviedb.org/3/discover/movie
  const fetchMovies = async (type) => {
    const res = await fetch(`${url}${type}?api_key=${api_key}`);
    const data = await res.json();
    setMovie(data.results);
    setSelectedMovie(data.results[0]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle(darkMode? 'dark':'light');
  };

  return (
    <ThemeContext.Provider
      value={{ movies, fetchMovies, selectedMovie, toggleTheme, darkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
