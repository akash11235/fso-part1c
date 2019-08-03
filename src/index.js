import React, { useState } from "react";
import ReactDOM from "react-dom";
const Display = ({ counter }) => <div> {counter} </div> //arrow function version and destructured prop.
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)
const App = props => {
  const [counter, setCounter] = useState(0);
  const setToValue = (value) => setCounter(value)
  
  return (
  <div>
  <Display counter={counter}/>
  <Button onClick={() => setToValue(counter+1)} text='plus'/>
  <Button onClick={() => setToValue(counter-1)} text='minus'/>
  <Button onClick={() => setToValue(0)} text='zero'/>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));