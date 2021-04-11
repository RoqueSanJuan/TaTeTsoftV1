import React from 'react';

function Cuadro(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

export default Cuadro; 