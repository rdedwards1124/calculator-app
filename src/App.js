import './App.css';
import React, {useState} from 'react'
import Add from './Components/Add';
import Subtract from './Components/Subtract';
import Multiply from './Components/Multiply';
import Divide from './Components/Divide';

function App() {
  let equation = ()=>{
    let answer = ""
    let userInput1 = ""/* The number the user put into the 1st input box */
    let userInput2 = ""/* The number the user put into the 2nd input box */

    if("user-selects-plus-from-drop-menu"){
      // Use the Add Function
    }
    if("user-selects-minus-from-drop-menu"){
      // Use the Subtract Function

    }
    if("user-selects-times-from-drop-menu"){
      // Use the Multiply Function
    }
    if("user-selects-divide-from-drop-menu"){
      // Use the Divide Function
    }
    answer = "" /* The result from one of the functions */
    return answer
  }

  return (
    <div>
      <form className="form">
        <input type="text" className="space-around"/> {/* User inputs 1st number here */}
        <select className="space-around"> {/* User chooses to add, subtract, multiply, or divide their numbers */}
          <option value="plus">plus</option>
          <option value="minus">minus</option>
          <option value="times">times</option>
          <option value="divide">divided by</option>
        </select>
        <input type="text" className="space-around"/> {/* User inputs 2nd number here */}
        <button className="space-around">equals</button> {/* The button to activate the equation function */}
        <input className="space-around"/> {/* This displays the answer to the equation */}
      </form>
    </div>
  );
}

export default App;
