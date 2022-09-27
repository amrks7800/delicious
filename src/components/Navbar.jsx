import { Header, Nav, Input } from "./styledNav";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ value, setValue }) => {
  const ref = useRef(null);

  return (
    <Header>
      <div id="logo">
        <h1>Delicious</h1>
      </div>

      <form action="">
        <Input
          placeholder="search for recipes"
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          ref={ref}
        />
        <NavLink to="/search">
          <button
            type="submit"
            onClick={() => {
              ref.current.value = "";
            }}>
            <FaSearch className="icon" />
            Search
          </button>
        </NavLink>
      </form>

      <Nav>
        <ul>
          <li>
            <NavLink to="/cuisine/italian">italian</NavLink>
          </li>
          <li>
            <NavLink to="/cuisine/american">american</NavLink>
          </li>
          <li>
            <NavLink to="/cuisine/Thai">Thai</NavLink>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

export default Navbar;
