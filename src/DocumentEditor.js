import React from 'react';

const DocumentEditor = (props)=> {
  return (
    <textarea
      value={props.document.content}
      onChange={(event) => {
        props.handleChange(event.target.value);
      }}
    />
  );
};

export default DocumentEditor;