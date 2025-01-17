import styles from './Cars.module.css'

const Cars = () => {
    
    const cars = [
        {
            "id": 1,
            "brand": "Tesla",
            "status": "Novo"
        },
        {
            "id": 2,
            "brand": "BYD",
            "status": "Usado"
        },
        {
            "id": 3,
            "brand": "GWM",
            "status": "Novo"
        }
    ]

    return (
        <>
            <ul className={styles.cars_list}>
                {cars.map((car) => (
                   <li key={car.id}>Marca: {car.brand} | Situação: {car.status}</li> 
                ))}
            </ul>
        </>
    )
}

export default Cars
