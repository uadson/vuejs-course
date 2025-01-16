import styles from './CssModules.module.css'


const CssModules = () => {
  return (
    <div>
        <p className={styles.css_class_module}>Este parágrafo contém estilos que foram atribuídos através da técnica de "nome-do-componente".module.css</p>
    </div>
  )
}

export default CssModules