import React from 'react';

function Box(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      <h3>{props.children}</h3>
    </button>
  );
}

export default Box;
