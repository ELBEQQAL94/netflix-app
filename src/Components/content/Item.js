import React from 'react';

const Item = ({src, showMeTrailler,index}) => {
    return (
        <div 
            className="item" 
            style={{background: `url(${src}) center`}}
            onClick={() => showMeTrailler(index)}
        >
            <h2>n</h2>
            <h3>Lorem Ipsum</h3>
        </div>
    );
};

export default Item;