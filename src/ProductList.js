import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'

export default function ProductList() {
    
    let [productList, setProductList] = useState([])
    fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
        .then(Response=>Response.json())
        .then(data=>setProductList(data))

    const [showProduct, setShowProduct] = useState(true)

  return (
    <div>
        
        {showProduct && <button onClick={()=>setShowProduct(false)}>隱藏產品</button>}
        {!showProduct && <button onClick={()=>setShowProduct(true)}>顯示產品</button>}

        <Title mainTitle="選擇要購買的產品"/>

        <div>
            {
                showProduct && productList.map(product=>(
                    <div key={product.id}>
                        {product.name}<br/>
                        <Link to={'/ProductDetail/'+ product.id}>
                        <img src={process.env.PUBLIC_URL + '/logo/' + product.image} width={300}/><br/>
                        </Link>
                        {product.price}<br/>
                        {product.description}<br/>
                    </div>    
                ))
            }
        </div>
    </div>
  )
}
