const Events = () => {
    
    const handleMyEvent = () => {
        console.log('Button clicked')
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Something</h1>
        } else {
            return <h1>Nothing</h1>
        }
    }
    
    return (
        <div>
            <h1>Events</h1>
            <div>
                <button onClick={handleMyEvent}>Click here</button>
            </div>
            <div>
                <button onClick={() => {
                    console.log('Button clicked 2')
                }}>Click here too</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events