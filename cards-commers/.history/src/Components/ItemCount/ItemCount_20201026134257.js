import React from 'react';
import buttonsCount from './ButtonsCount/ButtonsCount';
import viewCount from './ViewCount/ViewCount';
import agregarCount from './AgregarCount/AgregarCount';


export default ItemCount() {
    return (
        <div class="section-car">   
        <div class="box-count"> 
            <buttonsCount /> <viewCount /> <buttonsCount />
        </div>

        <div class="box-add"> <agregarCount /> </div>
        </div>
        );

}


