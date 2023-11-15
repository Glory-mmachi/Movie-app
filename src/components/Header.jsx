import Hero from "./Hero";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <Nav />

      <div className="header container">
        {/* header section */}
        <h2>MovieApp</h2>
        <form action="">
          <input type="text" placeholder="Search Movies" />
          <button className="btn btn-search">Search</button>
        </form>
      </div>
      <Hero/>
    </>
  );
}
