import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ShowCode(props){    
    return(
    <SyntaxHighlighter language='javascript' style={oneDark}>
        {props.codeString}
    </SyntaxHighlighter>
    )
}

export default ShowCode