import Hero from "./Hero";
import Nav from "./Nav";
import { useTheme } from "../../ContextApi";

export default function Header() {
  const { setSearchKey} = useTheme();

  const searchMovies = (e) => {
    e.preventDefault();
    setSearchKey(e.target.value);
  };
  
  return (
    <>
      <Nav />

      <div className="header container">
        {/* header section */}
        <h2>MovieApp</h2>
        <form onSubmit={searchMovies}>
          <input 
            type="text"
            placeholder="Search Movies"
             
            onChange={(e) => searchMovies(e)}   
            

          />
          <button className="btn btn-search">Search</button>
        </form>
      </div>
      <Hero />
    </>
  );
}
