import './Form1.css'

import {useState} from 'react'

const Form1 = ({ user }) => {

    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form enviado")
        console.log(name)
        console.log(email)
    }
    
    return (
        <div>
            {/** Formulário simples */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='Digite o seu nome' 
                        onChange={handleName}
                        value={name}
                    />
                </div>
                <input type="submit" value="Enviar"/>

                {/** Label envolvendo input */}
                {/** Simplificando a manipulação do state */}
                <label>
                    <span>E-mail</span>
                    <input 
                        type="email" 
                        name='email' 
                        placeholder='Digite o seu e-mail' 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default Form1
