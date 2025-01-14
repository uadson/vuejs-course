import { useState } from 'react'

const ListsRendering = () => {

    const [list, setItems] = useState([
        {id: 1, lang: "Django"},
        {id: 2, lang: "FastAPI"},
        {id: 3, lang: "Flask"},
        {id: 4, lang: "Streamlit"},
        {id: 5, lang: "Django REST Framework"},
        {id: 6, lang: "Django Ninja"},
    ])

    const deleteRandom = () => {
        // 7 => items number list
        const randomNumber = Math.floor(Math.random() * 7)
        setItems((prevItems) => {
            return prevItems.filter((item) => randomNumber !== item.id)
        })
    }

    return (
        <div>
            <h1>Lists Rendering</h1>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.lang}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random language</button>
        </div>
    )
}

export default ListsRendering