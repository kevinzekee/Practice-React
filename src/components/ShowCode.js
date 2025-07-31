function ShowCode(props) {
  return (
    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <SyntaxHighlighter
        language='javascript'
        style={oneDark}
        wrapLongLines={true}
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
