import { useEffect, useState } from "react";
import HomeButton from "../components/HomeButton";
import ShowCode from "../components/ShowCode";
import '../styles/landing.css';

const codeBlock =
`function TimerPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 0.01);
    }, 10); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-container">
      <h1>Timer</h1>
      <span>
        {count.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,})}{' '}seconds
      </span>
    </div>
  );
}

export default TimerPage;`

function TimerPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 0.01);
    }, 10); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-container">
      <div className="second-container">
        <h1>Timer</h1>
        <p>This is a basic implementation of the useEffect Hook in React. useEffect is used for side effects. A side effect is an effect that happens outside a component,
          unlike useState where it directly re-renders a component, useEffect only runs after a component render.
        </p>
        <h4>Output</h4>
        <span>
          {count.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,})}{' '}seconds
        </span>
        <h4>Code: </h4>
        <ShowCode codeString={codeBlock}/>
        <br></br>
        <HomeButton/>
        </div>
    </div>
  );
}

export default TimerPage;
