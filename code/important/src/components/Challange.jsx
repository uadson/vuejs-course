const Challange = () => {
  
  function sumNumbers () {
    let first = parseInt(document.getElementById('firstNumber').innerText)
    let second = parseInt(document.getElementById('secondNumber').innerText)

    console.log(first + second)
  }

  return (
    <div>
      <div id="firstNumber">13</div>
      <div id="secondNumber">14</div>
      <button onClick={sumNumbers}>Mostra soma no console</button>
    </div>
  )
}

export default Challange