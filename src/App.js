import React from 'react';
import './App.css';
import Contact from '../src/components/Contact';
import './components/Contact.css';

function App() {
  return (
    <div>
      <Contact
        name="Himeur Malik"
        avatar="https://randomuser.me/api/portraits/men/85.jpg"
      />
    </div>
  );
}

export default App;
