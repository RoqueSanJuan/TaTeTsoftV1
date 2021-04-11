import React from 'react';
import Cuadro from './Cuadro';

class Tablero extends React.Component {

  renderSquare = (i) => {
    return (
      <Cuadro
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  
    render() {
      return (
        <div>
          <div>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}

export default Tablero;