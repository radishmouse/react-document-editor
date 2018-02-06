import React from 'react';
import DocumentItem from './DocumentItem';

const DocumentList = (props)=> {

  const docListItems = props.docs.map((d, i) => {
    return (
      <DocumentItem
        key={i}
        index={i}
        title={d.title}
        clickHandler={props.clickHandler}
      />
    );
  });

  return (
    <ul>
      {docListItems}
    </ul>
  );
};

export default DocumentList;