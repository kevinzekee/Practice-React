import '../styles/landing.css'
import HomeButton from '../components/HomeButton';
import ShowCode from '../components/ShowCode';
import { useState } from 'react';

const codeBlock =
`import { useState } from 'react';
function CounterPage(){
    const [count, setCount] = useState(0);

    function addCount(){
        setCount(count + 1);
    }

    return(
        <div className='main-container'>
            <h4>Output: </h4>
            <p>You have clicked the button <strong>{count}</strong> times!</p>
            <button onClick={addCount}>Click Me!</button>
        </div>
        )
    }

export default CounterPage;`

function CounterPage(){
    const [count, setCount] = useState(0);

    function addCount(){
        setCount(count + 1);
    }


    return(
        <div className='main-container'>
            <div className='second-container'>
                <h1>React Hooks: useState</h1>
                <p>In order to not deal with constantly reloading pages to reflect updated values, you can access what's called a useState Hook in React. 
                    It is part of the React Hooks API that lets you use local component state, and re-render the component to reflect the update locally, meaning you don't have to reload
                    the webpage all over.
                </p>
                <p>A simple application is a counter. useState is commonly initialized in an array destructuring syntax, <strong>const [count, setCount] = useState(0)</strong> where:
                <ul>
                    <li>const initializes a constant binding</li>
                    <li>count is a variable and the current state value</li>
                    <li>setCount is an initialized function, called to update the value of count</li>
                    <li>both of which are set to 0</li>
                    <li>and useState(0) initializes the state with a value of 0</li>
                </ul>
                </p>
                <h4>Output: </h4>
                <p>You have clicked the button <strong>{count}</strong> times!</p>
                <button onClick={addCount}>Click Me!</button>
                <br></br>
                <h4>Code:</h4>
                <ShowCode codeString={codeBlock}/>
                <br></br>
                <HomeButton/>
            </div>
        </div>
    )
}

export default CounterPage;

