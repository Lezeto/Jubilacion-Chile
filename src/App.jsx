import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Header from "./Header";
import "./Index.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  return (
    <div>
      <Header onNavigate={setActiveSection} />
      <div className="app">
        <Sidebar onNavigate={setActiveSection} />
        <Content activeSection={activeSection} />
      </div>
    </div>
  );
}
