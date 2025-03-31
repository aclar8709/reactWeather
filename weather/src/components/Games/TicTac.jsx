import { useState } from "react";
import './tictac.css'

function Block({ value, onSquareClick }) {
    return (
        <button className="block" onClick={onSquareClick}> {value}</button>
    );
}
function TicTacToe() {
    const [blocks, setBlocks] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState("X");

    function handleClick(i) {
        const nextBlocks = blocks.slice();
        if (nextBlocks[i] != null || winner) return;
        
        nextBlocks[i] = turn;
        if (turn === "X") {
            setTurn("O");
            
        }
        else {
            setTurn("X");
        }
        setBlocks(nextBlocks);
    }
    function calculateWinner(blocks){
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
        for(let i = 0; i < lines.length; i ++){
            const [a,b,c] = lines[i];
            if(blocks[a] && blocks[a] === blocks[b] && blocks[a] === blocks[c]){
                console.log(a + " " + b + " " + c);
                return blocks[a];
            }
        }
    }    
    function startOver(){
        setBlocks(Array(9).fill(null));
        setTurn('X');
    }
    const winner = calculateWinner(blocks);
    let status;
    if(winner){
        status = "Winner: " + winner;
    }
    else
    {
        status = "Next Player: " + turn;
    }
    return (
        <>
            <p>{status}</p>
            <div className="board">
                <Block value={blocks[0]} onSquareClick={() => handleClick(0)} />
                <Block value={blocks[1]} onSquareClick={() => handleClick(1)} />
                <Block value={blocks[2]} onSquareClick={() => handleClick(2)} />
                <Block value={blocks[3]} onSquareClick={() => handleClick(3)} />
                <Block value={blocks[4]} onSquareClick={() => handleClick(4)} />
                <Block value={blocks[5]} onSquareClick={() => handleClick(5)} />
                <Block value={blocks[6]} onSquareClick={() => handleClick(6)} />
                <Block value={blocks[7]} onSquareClick={() => handleClick(7)} />
                <Block value={blocks[8]} onSquareClick={() => handleClick(8)} />
            </div>
            <button className="startOver" onClick={() => startOver()}>Start Over</button>
        </>

    );
}
export default TicTacToe;