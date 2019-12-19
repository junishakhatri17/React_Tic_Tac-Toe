import React from 'react';
import ReactDom from 'react-dom';
import './App.css';


export default class TicTac extends React.Component {    
render() {
    return(
        <div>
            <div className='puzzle'>
            {
             <Board />
            }
            </div>
        </div>
    );
}
}
function calculateWinner(arr) {
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
        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            console.log("---------winner");
            return arr[a];
        }
      }
      return null;
}
 class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { board: [null, null, null, null, null, null, null, null, null], isEnabled: true};
    }
    cellClickHandler(index) {
        this.setState({
            isEnabled: !this.state.isEnabled
        })

        let arr = this.state.board;
        if(arr[index] == null) {
            arr[index] = this.state.isEnabled ? 'O' : 'X'
            this.setState({board: arr});
        }
    }
            render() {
                const winner = calculateWinner(this.state.board);
                    let status;
                    if (winner) {
                    status = 'Winner: ' + winner;
                    alert("you are")
                    }
                const squares = this.state.board.map((val, index) => {
                    return (
                      <Cell  value={val} onCellClickChange={() => this.cellClickHandler.bind(this, index)}/>
                    );
                });
                return (
                  <div className='board'> 
                    {squares}
                  </div>
                );
              }
}

class Cell extends React.Component {  
    render() {
      //const cls = this.props.value === 0 ? 'square' : 'square';
      const arr = this.props.board;
      return (
        <div className="square" key={this.props.index} onClick={this.props.onCellClickChange()}>{this.props.value}</div>
      );
    }
}