import React, { useState } from 'react';
import './Average.css'; // Import CSS file for styling
import jsonData from './sample.json'; // Import JSON data file

function AverageCalculator() {
  const [numberType, setNumberType] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(0);
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);

  const fetchData = (type) => {
    const data = jsonData[type];
    setNumbers(data.numbers);
    setAverage(data.avg);
    setWindowPrevState(data.windowPrevState);
    setWindowCurrState(data.windowCurrState);
  };

  return (
    <div className="average-calculator-container">
      <h1>Average Calculator</h1>
      <select value={numberType} onChange={(e) => setNumberType(e.target.value)}>
        <option value="">Select Number Type</option>
        <option value="odd">Odd</option>
        <option value="even">Even</option>
        <option value="average">Average</option>
      </select>
      <button onClick={() => fetchData(numberType)}>Fetch Numbers</button>
      <div className="result-container">
        <h2>Previous State: {windowPrevState.join(', ')}</h2>
        <h2>Current State: {windowCurrState.join(', ')}</h2>
        <h2>Numbers: {numbers.join(', ')}</h2>
        <h2>Average: {average}</h2>
      </div>
    </div>
  );
}

export default AverageCalculator;
