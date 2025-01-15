const DestructuringProps = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h1>DestructuringProps</h1>
        <div>
            <h5>Forma mais utilizada</h5>
            <div>
                <h6>Detalhes do carro</h6>
                <ul>
                    <li>Marca: {brand}</li>
                    <li>KM: {km}</li>
                    <li>Cor: {color}</li>
                    {newCar && <li>Condição: Novo</li>}
                    {!newCar && <li>Condição: Usado</li>}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default DestructuringProps