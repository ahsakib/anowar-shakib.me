import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleScroll = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute("href").substring(1);
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileNav(false); // Close mobile menu after navigating
  };

  return (
    <header>
        <div className="header">
          <div className="logo">

          </div>
          <div onClick={() => setMobileNav(!mobileNav)} className="mobile-nav">
            <FaBars />
          </div>
          <ul className={`menubar ${mobileNav ? "mobilenav-activate" : ""}`}>
            <li>
              <a onClick={handleScroll} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={handleScroll} href="#skill">
                Skill
              </a>
            </li>
            <li>
              <a onClick={handleScroll} href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a onClick={handleScroll} href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://with.zonayed.me"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="btn-download"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
    </header>
  );
}

export default Header;
