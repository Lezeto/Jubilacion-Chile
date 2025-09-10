import React from "react";
import logo from "./logo.png";

export default function Header({ onNavigate }) {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="header-center">
        <ul>
          <li><button onClick={() => onNavigate("inicio")}>Inicio</button></li>
          <li><button onClick={() => onNavigate("quien-soy")}>Quién soy</button></li>
          <li><button onClick={() => onNavigate("videos")}>Videos</button></li>
          <li><button onClick={() => onNavigate("contacto")}>Contacto</button></li>
        </ul>
      </nav>
    </header>
  );
}
