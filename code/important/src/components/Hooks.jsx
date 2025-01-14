import { useState } from 'react'

const Hooks = () => {
    let someData = 10

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Hooks</h1>
            <div>
                <h2>No hooks</h2>
                <p>Some data: {someData}</p>
                <button onClick={() => (someData = 15)}>Change value</button>
            </div>
            <div>
                <h2>With hooks</h2>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>
    )
}

export default Hooks
