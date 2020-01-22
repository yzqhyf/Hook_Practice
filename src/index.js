import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleLeftClick = () => {
    setCount(count => count + 1);
  };

  const handleRightClick = () => {
    setCount(count => count - 1);
  };

  return (
    <div>
      <h1>this is code sample for useState</h1>
      <h2>count: {count}</h2>

      <button onClick={handleLeftClick}>count++</button>
      <button onClick={handleRightClick}>count--</button>
    </div>
  );
};

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <span>{date.toLocaleTimeString()}</span>
    </div>
  );
};

const Alert = () => {
  // const [message, setMessage]=useState('');
  let useStateVariable = useState("");
  const message = useStateVariable[0];
  const setMessage = useStateVariable[1];

  const handleClick = () => {
    setTimeout(() => {
      alert(`this is aysnc alert ${message}`);
    }, 3000);
  };

  const handleChange = e => {
    setMessage(e.target.value);
  };

  return (
    <>
      <input value={message} onChange={handleChange} />
      <button onClick={handleClick}>Alert</button>
    </>
  );
};

ReactDOM.render(
  <div>
    <Count />
    <Clock />
    <Alert />
  </div>,
  document.getElementById("root")
);
