import React from 'react';

const DocumentEditor = (props)=> {
  return (<div>
    {props.document.content}
  </div>);
};

export default DocumentEditor;