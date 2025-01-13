const TemplateExpressions = () => {
    const name = "Foo"
    const data = {
        age: 31,
        job: "Software Developer"
    }

    return (
        <div>
            <h1>TemplateExpressions</h1>
            <h2>Hello {name}, what's up ?</h2>
            <h3>Hello {name}, what's up ?</h3>
            <h4>Your position is {data.job}.</h4>
            <h5>{2000 + 25}</h5>
            <h6>{console.log('React is cool :)')}</h6>
        </div>
    )
}

export default TemplateExpressions
