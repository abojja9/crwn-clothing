import React from 'react'
import "./CategoryItem.styles.scss"

const CategoryItem = ({category}) => {
    const {id, imageUrl, title} = category;
    return (
        <div className="category-container" key={id}>
        <div className='background-image' style={{
          backgroundImage: `url(${imageUrl})`
          }}/>
        <div className="category-body-container" key={id}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
        </div>

    )
}

export default CategoryItem;