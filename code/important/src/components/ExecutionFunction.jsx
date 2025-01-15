const ExecutionFunction = ({ showMessage }) => {
  return (
    <div>
        <h1>Props como função</h1>
        <button onClick={showMessage}>Clique aqui para executar a função</button>
        <p id="msg"></p>
    </div>
  )
}

export default ExecutionFunction