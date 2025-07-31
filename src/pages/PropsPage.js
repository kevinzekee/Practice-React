import '../styles/landing.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import HomeButton from '../components/HomeButton';
import ShowCode from '../components/ShowCode';

function Welcome(props){
  return <span>Welcome, {props.name}</span>

}

const codeBlock = 
`function Welcome(props){
  return <span>Welcome, {props.name}</span>

}

function PropsPage(){
  return(
    <div className="main-container">
      <Welcome name="Mumei"/>
      <Welcome name="Kronii"/>
      <Welcome name="Gigi"/>
      <Welcome name="Cece"/>
      <br></br>
    </div>
  )
}

export default PropsPage;`

function PropsPage(){
  return(
    <div className="main-container">
      <div className='second-container'>
        <h1>Props in React</h1>
        <p>
          This is a basic way of implementing props in React. This is like passing a variable in a function when it is being called (It is technically a function under the hood), only this time, you are calling a 
          <strong> React Component.</strong> Call the React Component <strong>"Welcome"</strong> and pass the <strong>'name'</strong> prop. In the Welcome function, make sure 
          you require the function to receive the 'props' object and return the props object with the name attached hence: props.name.

        </p>
        <h4>Output:</h4>
        <Welcome name="Mumei"/>
        <br></br>
        <Welcome name="Kronii"/>
        <br></br>
        <Welcome name="Gigi"/>
        <br></br>
        <Welcome name="Cece"/>

        <h4>Code:</h4>
        <ShowCode codeString={codeBlock}/>
        <br></br>
        <HomeButton/>
        </div>
    </div>
    
  )
}

export default PropsPage;