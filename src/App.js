import './App.css';
import React, {useState} from 'react'

function App() {
  return (
    <div>
      <form className="form">
        <input type="text" className="space-around"/>
        <select className="space-around">
          <option>plus</option>
          <option>minus</option>
          <option>times</option>
          <option>divided by</option>
        </select>
        <input type="text" className="space-around"/>
        <button className="space-around">equals</button>
        <input className="space-around"/>
      </form>
    </div>
  );
}

export default App;
