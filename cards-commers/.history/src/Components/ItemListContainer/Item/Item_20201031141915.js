import React from 'react';
import './Item.css'

function Item({listProducts}){
    return <div className="Item"> 
    {/*Image*/}
        <div class="ItemSectionImage"></div>
        {/*details*/}
        <div className="ItemSectionDetails"></div>
        {/*Cost*/}
        <div className="ItemSectionCost"></div>
    </div>

}

export default Item;