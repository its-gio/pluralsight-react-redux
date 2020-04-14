import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

function Header() {
  return (
    <nav>
      <h1>Milk</h1>
      <div>
        <Button>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </Button>
        {" | "}
        <Button>
          <NavLink to="/about">About</NavLink>
        </Button>
      </div>
    </nav>
  );
}

export default Header;
