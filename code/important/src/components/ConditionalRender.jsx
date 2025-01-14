import { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(true)

    // Vai utilizar if ternário
    const [name, setName] = useState("Bar")

    return (
        <div>
            <h4>Conditional Rendering</h4>

            {x && <p>x is true because<code> const [x] = useState(true)</code></p>}
            
            
            { name === "Foo" ? (
                <div>
                    <p>My real name is Foo</p>
                </div>
            ) : (
                <div>
                    <p>My real name is...</p>
                </div>
            )}
            <button onClick={() => setName("Foo")}>Click here and discover the real name</button>
        </div>
    )
}

export default ConditionalRender
