import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <div className="App">
      <Contact
        name="Tiffany Morales"
        avatar="https://randomuser.me/api/portraits/women/76.jpg"
        online
      />
    </div>
    <div className="App">
      <Contact
        name="Jacqueline Riley"
        avatar="https://randomuser.me/api/portraits/women/66.jpg"
      />
    </div>
    <div className="App">
      <Contact
        name="Louella Woods"
        avatar="https://randomuser.me/api/portraits/women/34.jpg"
        online
      />
    </div>
    </>
  );
}

export default App;
