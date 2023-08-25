import { useState, useEffect } from "react";

const width = screen.width;

const Navbar = () => {
  if (width < 1200) {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
      if (menu) {
        document.querySelector(".navbar-overlay").style.display = "block";
        document.querySelector(".hamburger-holder img").src =
          "icon-menu-close.svg";
        document.querySelector(".blur-overlay").style.display = "block";
      } else {
        document.querySelector(".navbar-overlay").style.display = "none";
        document.querySelector(".hamburger-holder img").src = "icon-menu.svg";
        document.querySelector(".blur-overlay").style.display = "none";
      }
    }, [menu]);

    return (
      <div className="navbar-mobile">
        <div className="logo-holder-mobile">
          <img src="logo.svg" alt="logo" />
        </div>
        <div className="hamburger-holder">
          <img
            src="icon-menu.svg"
            alt="hamburger menu"
            onClick={() => setMenu((prev) => !prev)}
          />
        </div>
        <div className="navbar-overlay">
          <div className="navigation-links-mobile">
            <a href="#">Home</a>
            <a href="#">New</a>
            <a href="#">Popular</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
          </div>
        </div>
        <div className="blur-overlay"></div>
      </div>
    );
  } else {
    return (
      <div className="navbar-desktop">
        <div className="logo-holder-desktop">
          <img src="logo.svg" alt="logo" />
        </div>
        <div className="navigation-links-desktop">
          <a href="#">Home</a>
          <a href="#">New</a>
          <a href="#">Popular</a>
          <a href="#">Trending</a>
          <a href="#">Categories</a>
        </div>
      </div>
    );
  }
};

export default Navbar;
