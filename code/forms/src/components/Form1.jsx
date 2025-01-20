import './Form1.css'

import {useState} from 'react'

const Form1 = ({ user }) => {

    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form enviado")
        console.log(name)
        console.log(email)
        console.log(bio)
        console.log(role)

        // Clear form
        setName("")
        setEmail("")
        setBio("")
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

                <label>
                    <span>Bio</span>
                    <textarea
                        name="bio"
                        placeholder='Descrição do usuário'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                        >
                    </textarea>
                </label>

                <label>
                    <span>Selecione uma Função</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="admin">Administrador</option>
                        <option value="dev">Desenvolvedor</option>
                        <option value="dba">DBA</option>
                        <option value="desg">Designer UI/UX</option>
                    </select>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default Form1
