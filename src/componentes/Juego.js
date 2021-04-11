import React from 'react';
import Tablero from './Tablero';

class Juego extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true, 
        };
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';   
        this.setState({      
          squares: squares,      
          xIsNext: !this.state.xIsNext,    
        });  
    };

    reiniciarJuego(){
        this.setState({      
            squares: Array(9).fill(null),
            xIsNext: true,  
        });  
    }
    
    render() {
      const winner = calculateWinner(this.state.squares);
      let status="";
      if (winner) {
        status = 'Gandor: ' + winner;
      } else {
        status = 'Jugador Siguiente: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
          <div className="">
            <div>
                <h1 className="text-center texto titulo"> Ta Te Tsoft</h1>
            </div>
            <div>
                <div className="container ">
                    <h4 className=".fs-3 text texto">{status}</h4>
                    <div className="d-inline-block">
                        <Tablero
                            squares={this.state.squares}
                            onClick={(i) => this.handleClick(i)}
                        />
                    </div>
                    <button className="d-inline-block btn btn-outline-light inicio btn-lg texto" onClick={() =>this.reiniciarJuego()}>Nuevo Juego</button>
                </div>
            </div>
          </div>
      );
    }
  }

  export default Juego;

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }