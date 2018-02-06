import React from 'react';

const DocumentItem = (props)=> {
  return (
    <li
      onClick={() => { props.clickHandler(props.index) }}
    >
      {props.title}
    </li>
  );
};

export default DocumentItem;