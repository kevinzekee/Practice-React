import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ShowCode(props) {
  return (
    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <SyntaxHighlighter
        language='javascript'
        style={oneDark}
        wrapLongLines={true} // this helps with mobile
        customStyle={{
          borderRadius: '6px',
          fontSize: '0.9rem',
          padding: '16px',
        }}
      >
        {props.codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default ShowCode;