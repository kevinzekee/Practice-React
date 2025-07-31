
import { useState } from 'react';
import '../styles/landing.css';
import HomeButton from '../components/HomeButton';
import ShowCode from '../components/ShowCode';


const codeBlock = 
`  
function TemperatureInput({ label, value, onChange }){
    return(
        <div>
            <label>{label}:{' '}
                <input 
                type='number'
                value={value}
                onChange = {(e) => onChange(e.target.value)}/>
            </label>
        </div>
    )
}


function TemperaturePage(){
    const [temperature, setTemperature] = useState(' ')
    const fahrenheit = temperature ? ((parseFloat(temperature) * 9) / 5 + 32).toFixed(1) : '';

    return(
        <div className='main-container'>
            <TemperatureInput label='Celcius' value={temperature} onChange={setTemperature}/>
            <p>Converted Temp is: {fahrenheit}C</p>
        </div>
    )
}

export default TemperaturePage;
`


function TemperatureInput({ label, value, onChange }){
    return(
        <div>
            <label>{label}:{' '}
                <input 
                type='number'
                value={value}
                onChange = {(e) => onChange(e.target.value)}/>
            </label>
        </div>
    )
}


function TemperaturePage(){
    const [temperature, setTemperature] = useState(0)
    const fahrenheit = temperature ? ((parseFloat(temperature) * 9) / 5 + 32).toFixed(1) : 0;

    return(
        <div className='main-container'>
            <div className='second-container'>
                <h1>React Hooks: useState</h1>
                <p>This is another application of useState.
                    In the code synatx of the TemperatureInput function, curly braces are used to initalize props of label, value and onChange.
                    onChange is an input attribute, it contains the "e" event object which calls the onChange function, which gets the value from e.target.value
                </p>
                <h4>Output:</h4>
                <h5>Temp Converter</h5>
                <TemperatureInput label='Celcius' value={temperature} onChange={setTemperature}/>
                <p>Converted Temp is: {fahrenheit} °F</p>
                
                <h4>Code:</h4>
                <ShowCode codeString = {codeBlock}/>
                <br></br>
                <HomeButton/>
            </div>
        </div>
    )
}

export default TemperaturePage;