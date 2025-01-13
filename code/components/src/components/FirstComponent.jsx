import SecondComponent from "./SecondComponent"

const FirstComponent = () => {
    return (
        <div>
            <h1>Component Hierarchy</h1>
            <h2>First Component</h2>
            <SecondComponent />
        </div>
    )
}

export default FirstComponent
