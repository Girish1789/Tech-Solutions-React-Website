import React, { useState } from "react";
import { Code2, ArrowRight, Menu, X } from "lucide-react";
import "../css/Header.css"

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Portfolio", "#portfolio"],
  // ["AI Solution", "#aisolution"],
  ["Career", "#career"],
  ["Contact", "#contact"],
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="fixed-header">
      <div className="nav-wrap">
        <a
          className="brand"
          href="#home"
          onClick={close}
          aria-label="Tech Solutions"
        >
          <span className="brand-mark">
            <Code2 size={22} fill="currentColor" />
          </span>
          <span className="brand-name">
            Tech <b>Solutions</b>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          className={`nav-links ${open ? "nav-links-open" : ""}`} 
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a
            className="nav-donate mobile-donate"
            href="#contact"
            onClick={close}
          >
            Talk to us <ArrowRight size={17} />
          </a>
        </nav>
        <a className="nav-donate desktop-donate" href="#donate">
          Talk to us <ArrowRight size={17} />
        </a>
      </div>
    </header>
  );
};
export default Header;
