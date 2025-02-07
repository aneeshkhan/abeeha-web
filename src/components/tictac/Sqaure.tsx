function Sqaure({clickedValue,onSquareClick}) {

  return (
    <div>
      <button onClick={onSquareClick} type="submit" className="btn  btn-square">{clickedValue}</button>
    </div>
  )
}

export default Sqaure
