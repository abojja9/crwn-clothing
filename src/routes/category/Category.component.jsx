import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/ProductCard.component";
import "./Category.styles.scss"

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState([]);
    
    // console.log(category, categoriesMap, products)
    useEffect(() => {
        setProducts(categoriesMap[category]);    
    }, [category, categoriesMap])

    return (
        <Fragment>
        <h2 className="category-title">{category.toUpperCase()}</h2>
        <div className='category-container'>
            
            {   products &&
                products.map((product) =>(
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
        </Fragment>
    )
}

export default Category;
