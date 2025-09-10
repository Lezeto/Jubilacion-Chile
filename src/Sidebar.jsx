import React from "react";

export default function Sidebar({ onNavigate }) {
  return (
    <>
      {/* Checkbox oculto para mobile */}
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />

      {/* Botón menú solo visible en mobile */}
      <label htmlFor="menu-toggle" className="sidebar-toggle">
        Menú
      </label>

      <aside className="sidebar">
        <h2>Jubilación en Chile</h2>
        <nav>
          <ul>
            <li><button onClick={() => onNavigate("como-jubilar")}>Cómo jubilar</button></li>
            <li><button onClick={() => onNavigate("requisitos")}>Requisitos</button></li>
            <li><button onClick={() => onNavigate("anticipada")}>Jubilación anticipada</button></li>
            <li><button onClick={() => onNavigate("invalidez")}>Pensión de invalidez</button></li>
            <li><button onClick={() => onNavigate("retiro-vs-renta")}>Retiro programado vs renta vitalicia</button></li>
            <li><button onClick={() => onNavigate("otros")}>Otros temas</button></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
