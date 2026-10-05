import "../styles/Navbar.css";

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar">

      <div className="logo">
        🎬 BookMyShow
      </div>

      <input
        type="text"
        placeholder="Search Movies..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className="signin-btn">
        Sign In
      </button>

    </nav>
  );
}

export default Navbar;