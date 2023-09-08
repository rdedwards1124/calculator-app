// import './App.css';
// import React, {useState} from 'react'
// import Add from './Components/Add';
// import Subtract from './Components/Subtract';
// import Multiply from './Components/Multiply';
// import Divide from './Components/Divide';

// function App() {
//   let equation = ()=>{
//     let answer = ""
//     let userInput1 = ""/* The number the user put into the 1st input box */
//     let userInput2 = ""/* The number the user put into the 2nd input box */

//     if("user-selects-plus-from-drop-menu"){
//       // Use the Add Function
//     }
//     if("user-selects-minus-from-drop-menu"){
//       // Use the Subtract Function
//     }
//     if("user-selects-times-from-drop-menu"){
//       // Use the Multiply Function
//     }
//     if("user-selects-divide-from-drop-menu"){
//       // Use the Divide Function
//     }
//     answer = "" /* The result from one of the functions */
//     return answer
//   }

//   const handleSubmit = (e)=>{
//     e.preventDefault()
//   }
// // 3 state values
// // state value for 1 and 2
// //---- attach to onchange
// // state for 3 wil be blank
// //---- set state to handlesub function to the answer.
//   return (
//     <div>
//       <form className="form">
//         <input type="text" className="space-around"/> {/* User inputs 1st number here */}
//         <select className="space-around"> {/* User chooses to add, subtract, multiply, or divide their numbers */}
//           <option value="plus">plus</option>
//           <option value="minus">minus</option>
//           <option value="times">times</option>
//           <option value="divide">divided by</option>
//         </select>
//         <input type="text" className="space-around"/> {/* User inputs 2nd number here */}
//         <button className="space-around" onClick={(e)=>{handleSubmit(e)}}>equals</button> {/* The button to activate the equation function */}
//         <input className="space-around"/> {/* This displays the answer to the equation */}
//       </form>
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [number1, setNumber1] = useState('');
//   const [number2, setNumber2] = useState('');
//   const [result, setResult] = useState('');

//   const handleNumber1Change = (e) => {
//     setNumber1(e.target.value);
//   };

//   const handleNumber2Change = (e) => {
//     setNumber2(e.target.value);
//   };

//   const handleAddition = () => {
//     const sum = Number(number1) + Number(number2);
//     setResult(`Result: ${sum}`);
//   };

//   const handleSubtraction = () => {
//     const difference = Number(number1) - Number(number2);
//     setResult(`Result: ${difference}`);
//   };

//   const handleMultiplication = () => {
//     const product = Number(number1) * Number(number2);
//     setResult(`Result: ${product}`);
//   };

//   const handleDivision = () => {
//     const quotient = Number(number1) / Number(number2);
//     setResult(`Result: ${quotient}`);
//   };

//   return (
//     <div className="App">
//       <h2>Arithmetic Calculator</h2>
//       <input type="number" placeholder="Enter number 1" value={number1} onChange={handleNumber1Change} />
//       <input type="number" placeholder="Enter number 2" value={number2} onChange={handleNumber2Change} />
//       <br />
//       <button onClick={handleAddition}>Add</button>
//       <button onClick={handleSubtraction}>Subtract</button>
//       <button onClick={handleMultiplication}>Multiply</button>
//       <button onClick={handleDivision}>Divide</button>
//       <br />
//       {result && <p>{result}</p>}
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////

import React, { useState, ChangeEvent } from "react";
import "./App.css";

function App() {
   const [number1, setNumber1] = useState<string>("");
   const [number2, setNumber2] = useState<string>("");
   const [operation, setOperation] = useState<string>("");
   const [result, setResult] = useState<string>("");

   const handleNumber1Change = (e: ChangeEvent<HTMLInputElement>) => {
       setNumber1(e.target.value);
   };

   const handleNumber2Change = (e: ChangeEvent<HTMLInputElement>) => {
       setNumber2(e.target.value);
   };

   const handleOperationChange = (e: ChangeEvent<HTMLSelectElement>) => {
       setOperation(e.target.value);
   };

   const handleCalculate = () => {
       let calculationResult;

       switch (operation) {
           case "+":
               calculationResult = Number(number1) + Number(number2);
               break;
           case "-":
               calculationResult = Number(number1) - Number(number2);
               break;
           case "*":
               calculationResult = Number(number1) * Number(number2);
               break;
           case "/":
               calculationResult = Number(number1) / Number(number2);
               break;
           default:
               return;
       }

       setResult(`Result: ${calculationResult}`);
   };

   return (
       <div className="App">
           <h2>Arithmetic Calculator</h2>
           <input
               type="number"
               placeholder="Enter number 1"
               value={number1}
               onChange={handleNumber1Change}
           />
           <input
               type="number"
               placeholder="Enter number 2"
               value={number2}
               onChange={handleNumber2Change}
           />
           <br />
           <select value={operation} onChange={handleOperationChange}>
               <option value="">Select Operation</option>
               <option value="+">Add</option>
               <option value="-">Subtract</option>
               <option value="*">Multiply</option>
               <option value="/">Divide</option>
           </select>
           <br />
           <button onClick={handleCalculate} disabled={!operation}>
               Calculate
           </button>
           <br />
           {result && <p>{result}</p>}
       </div>
   );
}

export default App;




/*

            <select value={operation} onChange={handleOperationChange}>
                <option value="">Select Operation</option>
                <option value="+">Add</option>
                <option value="-">Subtract</option>
                <option value="*">Multiply</option>
                <option value="/">Divide</option>
            </select>

*/