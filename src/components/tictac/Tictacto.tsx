import {useState} from "react";
import Sqaure from "./Sqaure";
import winnerCalculation from "../../utils/winnerCalculation";
const Tictacto = ()=>{
const [squares, setSquares] = useState(Array(9).fill(null));
const [isXNext, setIsXNext] = useState(true);
let status;
const winner = winnerCalculation(squares);
console.log(squares)
if(winner){
    status = `Congratulations!  ${winner} is the winner!`;
} else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
}    
function handleClick(i) {
   if(squares[i] || winnerCalculation(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = isXNext ? "X" : "O";
    setIsXNext(!isXNext);
    setSquares(nextSquares);
}

    return (
        <>
        <div> {status} </div>
        <div className="board">
            <div className="board-row">
                <Sqaure clickedValue={squares[0]} onSquareClick={()=>handleClick(0)} />
                <Sqaure clickedValue={squares[1]} onSquareClick={()=>handleClick(1)} />
                <Sqaure clickedValue={squares[2]} onSquareClick={()=>handleClick(2)} />
            </div>
            <div className="board-row">
                <Sqaure clickedValue={squares[3]} onSquareClick={()=>handleClick(3)} />
                <Sqaure clickedValue={squares[4]} onSquareClick={()=>handleClick(4)} />
                <Sqaure clickedValue={squares[5]} onSquareClick={()=>handleClick(5)} />
            </div>
            <div className="board-row">
                <Sqaure clickedValue={squares[6]} onSquareClick={()=>handleClick(6)} />
                <Sqaure clickedValue={squares[7]} onSquareClick={()=>handleClick(7)} />
                <Sqaure clickedValue={squares[8]} onSquareClick={()=>handleClick(8)} />
            </div>
        </div>
        </>       
        
    )
}
export default Tictacto;