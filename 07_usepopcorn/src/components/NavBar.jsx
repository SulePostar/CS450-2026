import Logo from "./Logo";
import Search from "./Search";
import Results from "./Results";

const NavBar = ({ count, onSearch }) => {

  // const handleSearch = results => {
  //   onSearch(results);
  // }

  return (
    <nav className="nav-bar">
      <Logo />
      <Search onSearch={onSearch} />
      <Results count={count} />
    </nav>
  );
}

export default NavBar;