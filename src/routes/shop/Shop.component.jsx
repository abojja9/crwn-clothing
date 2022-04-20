import { useContext } from 'react';
import ProductCard from '../../components/product-card/ProductCard.component';
import { ProductsContext } from '../../contexts/products.context';
import SHOP_DATA from '../../shop-data.json';
import './Shop.styles.scss';

const Shop = () => {
    const {products} = useContext(ProductsContext);

    console.log(products)
    return (
        <div className='products-container'>
            {/* {SHOP_DATA} */}
            {products.map((product) => (
                <ProductCard 
                key={product.id} 
                product={product}
                />
            ))}
            
        </div>
    )
}

export default Shop;
