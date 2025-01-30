import {useEffect, useState} from 'react'
// custom hook
import {handleCrud} from './hooks/handleCrud'

import './App.css'

const url = "http://127.0.0.1:8000/products-api/v1/products"

function App() {
  const [products, setProducts] = useState([])
  
  // GET - custom hook
  const {data: items, httpConfig} = handleCrud(url)
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // GET - no hook
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     setProducts(data)
  //   }
  //   fetchData()
  // },[])

  // POST
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    // no hook
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
        
    //   },
    //   body: JSON.stringify(product)
    // })

    // // Carregamento dinâmico
    // const addedProduct = await response.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct])
    httpConfig(product, "POST")
    setName("")
    setPrice("")
  }

  return (
    <>
      <div>
        <h1>Products List</h1>
        <h3>Add Products</h3>
        <div className="add-product">
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
              </label>
              <label>
                Price:
                <input type="text" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
              </label>
              <input type="submit" value="Send" />
            </form>
          </div>
          <div>
            <ul className='products-list'>
              {items && items.map((product) => (
                <li key={product.id}>
                  Drum: {product.name} - Price: $ {product.price}
                </li>
              ))}
            </ul>
          </div>
      </div>
    </>
  )
}

export default App
