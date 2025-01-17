const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {job}</li>
            {
                age > 18 ? (
                    <p><strong>Está habilitado(a) para tirar carteira de habilitação</strong></p>
                ) : (
                    <p><strong>Não está habilitado(a) para tirar carteira de habilitação</strong></p>
                )
            }
            <hr />
        </ul>
    </div>

  )
}

export default UserDetails