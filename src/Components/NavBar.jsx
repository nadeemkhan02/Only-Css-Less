import React from "react";

const NavBar = () => {
  return (
    <>
      <div id="NavBar">
        <ul>
          <li id="n1">subscribe</li>
          <li id="n2">Large</li>
          <li id="n3">
            <p className="fa fa-search" />
            <button type="button">Signup</button>
          </li>
        </ul>
      </div>
      <div id="nav-item">
        <ul>
          <li>World</li>
          <li>U.S.</li>
          <li>Technology</li>
          <li>Design</li>
          <li>Culture</li>
          <li>Business</li>
          <li>Politics</li>
          <li>Opinion</li>
          <li>Science</li>
          <li>Health</li>
          <li>Style</li>
          <li>Travel</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
