import { createContext, useContext, useState, useEffect } from "react";
import { api_key } from "./config";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const url = "https://api.themoviedb.org/3";
  // https://api.themoviedb.org/3/discover/movie
  // https://api.themoviedb.org/3/search/movie?api_key=322b422e6361cbc7abf4bfb1ad497d15

  const fetchMovies = async (type) => {
    const res = await fetch(
      `${url}${type}?api_key=${api_key}&query=${searchKey}`
    );
    const data = await res.json();
    setMovie(data.results);
    setSelectedMovie(data.results[0]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        movies,
        fetchMovies,
        selectedMovie,
        toggleTheme,
        darkMode,
        setSearchKey,
        searchKey,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
