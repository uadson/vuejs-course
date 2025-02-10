import { useEffect, useState, useRef } from 'react'

import './css/Form.css'

import ProductsTable from './ProductsTable'

const apiUrl = import.meta.env.VITE_PRODUCTS_API_URL

const Form = () => {

    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const contentEndRef = useRef(null)

    // Barra de rolagem
    const scrollToBottom = () => {
        contentEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [products])

    // GET - no custom hook
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(apiUrl)
            const data = await response.json()
            setProducts(data)
        }
        fetchData()
    }, [])

    // POST
    const handleSubmit = async (e) => {
        e.preventDefault()

        const product = {
            name,
            price
        }

        // no custom hook
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })

        const addedProduct = await response.json()

        setProducts((prevProducts) => [...prevProducts, addedProduct])

        setName("")
        setPrice("")

    }
    return (
        <>
            <div className="container-fluid form-div">
                <div className="card">
                    <div className="card-header fs-3">
                        Add Products
                    </div>
                    <div className="card-body">
                        <form className='row g-3' onSubmit={handleSubmit}>
                            <div className="col-10">
                                <label>
                                    Name:
                                    <input type="text"
                                        className='form-control input-name'
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='Type a product name' />
                                </label>
                            </div>
                            <div className="col-md-2">
                                <label>
                                    Price:
                                    <input type="text"
                                        className='form-control'
                                        name='price'
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder='0.00' />
                                </label>
                            </div>
                            <div className="col">
                                <button type="submit" className='btn btn-primary'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ProductsTable products={products} contentEndRef={contentEndRef} />
        </>
    )
}

export default Form
