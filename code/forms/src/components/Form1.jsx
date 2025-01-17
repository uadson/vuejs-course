import './Form1.css'

const Form1 = () => {
    return (
        <div>
            {/** Formulário simples */}
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name='name' placeholder='Digite o seu nome' />
                </div>
                <input type="submit" value="Enviar"/>
                
                {/** Label envolvendo input */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name='email' placeholder='Digite o seu e-mail'/>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default Form1
