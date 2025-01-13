const TemplateExpressions = () => {
    const name = "Foo"
    const data = {
        age: 31,
        job: "Software Developer"
    }

    return (
        <div>
            <h2>Hello {name}, what's up ?</h2>
            <h3>Your position is {data.job}.</h3>
            <h4>{2000 + 25}</h4>
            <h5>{console.log('React is cool :)')}</h5>
        </div>
    )
}

export default TemplateExpressions
