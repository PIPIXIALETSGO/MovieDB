import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/movie";
import Filter from "./components/filter";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filter, setFilter] = useState([]);
 
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(() => {
    getData();
  }, []);

  const apiKey = "b36c9e256fe258742637f68f10df1c95";

  const getData = async () => {
    const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=";
    const data = await fetch(baseURL + apiKey);
    const movies = await data.json();
    setPopular(movies.results);
    setFilter(movies.results);
  };

  

  return (
      
    <div className="App">
      <div className="bg"></div>
      <Filter
        popular={popular} 
        setFilter={setFilter}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popularMovies">
        <AnimatePresence>
          {filter.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
      </div>
  );
}

export default App;
