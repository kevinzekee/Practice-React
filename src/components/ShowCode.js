import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ShowCode({ codeString }) {
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <SyntaxHighlighter
        language="javascript"
        style={oneDark}
        wrapLongLines={true}
        customStyle={{
          fontSize: '0.9rem',
          borderRadius: '6px',
          padding: '16px',
          marginTop: '10px',
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default ShowCode;
