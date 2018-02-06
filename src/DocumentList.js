import React from 'react';

const DocumentList = (props)=> {

  const docListItems = props.docs.map((d, i) => {
    return (<li key={i}>{d.title}</li>);
  });

  return (
    <ul>
      {docListItems}
    </ul>
  );
};

export default DocumentList;