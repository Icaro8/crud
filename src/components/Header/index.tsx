import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/">Profile</Link>
        </li>
      </ul>
    </header>
  );
}
