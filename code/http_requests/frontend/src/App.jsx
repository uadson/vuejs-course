import {useEffect, useState} from 'react'

import './App.css'

const baseUrl = "http://127.0.0.1:8002/products-api/v1/products"

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(baseUrl)
      const data = await response.json()
      setProducts(data)
    }
    fetchData()
  },[])
  return (
    <>
      <div>
        <h1>Products List</h1>
        <p>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                Drum: {product.name} - Price: $ {product.price}
              </li>
            ))}
          </ul>
        </p>
      </div>
    </>
  )
}

export default App
