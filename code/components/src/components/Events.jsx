const Events = () => {
    
    const handleMyEvent = () => {
        console.log('Button clicked')
    }
    
    return (
        <div>
            <h1>Events</h1>
            <div>
                <button onClick={handleMyEvent}>Click here</button>
            </div>
        </div>
    )
}

export default Events