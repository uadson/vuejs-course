const ChangeMessageStage = ({handleMessage}) => {
    const messages = ["Oi", "Olá", "Tudo bem?"]
    return (
        <div>
            <h3>ChangeMessageStage</h3>
            <div>
                <button onClick={() => handleMessage(messages[0])}>1</button>
                <button onClick={() => handleMessage(messages[1])}>2</button>
                <button onClick={() => handleMessage(messages[2])}>3</button>
            </div>
        </div>
    )
}

export default ChangeMessageStage