
const ChildrenProps = ({ children, propTest}) => {
  return (
    <div>
        <h1>ChildrenProps</h1>
        <h2>Funciona como Container</h2>
        <h3>Título</h3>
        {children}
        <p>{propTest}</p>
    </div>
  )
}

export default ChildrenProps