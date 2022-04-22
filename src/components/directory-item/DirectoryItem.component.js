import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./DirectoryItem.styles.scss"

const DirectoryItem = ({category}) => {
    const {id, imageUrl, title, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <div className="directory-item-container" key={id} onClick={onNavigateHandler}>
        <div className='background-image' style={{
          backgroundImage: `url(${imageUrl})`
          }}/>
        <div className="directory-item-body-container" key={id}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
        </div>

    )
}

export default DirectoryItem;