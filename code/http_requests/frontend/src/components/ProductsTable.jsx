import './css/ProductsTable.css'

const ProductsTable = ({ products, contentEndRef }) => {
    console.log(products)
    return (
        <>
            <div className="table-div">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col id-col">
                                ID
                            </div>
                            <div className="col name-col">
                                Name
                            </div>
                            <div className="col price-col">
                                Price
                            </div>
                        </div>
                    </div>
                    <div className="card-body table-conf">
                        <table className='table'>
                            <tbody>
                                {products && products.map((product) => (
                                    <tr>
                                        <td key={product.id}>{product.id}</td>
                                        <td key={product.id}>{product.name}</td>
                                        <td key={product.id}>{product.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div ref={contentEndRef}></div>
                </div>
            </div>
        </>
    )
}

export default ProductsTable
