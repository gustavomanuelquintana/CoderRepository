import React, {useState} from 'react';
import ButtonsCount from './ButtonsCount/ButtonsCount';
import ViewCount from './ViewCount/ViewCount';
import AgregarCount from './AgregarCount/AgregarCount';


    const styleContain={
        display:"flex",
        margin: "-10px auto",
    }
    const styleBox = {
        color:"black",
        border:"1px solid lightgrey",
        borderRadius:"5px",
        marginRight:"10px",
        fontWeight:"bold",
        fontSize:"1.1em",
        lineHeight:"15px",
        display:"flex",
        justifyContent:"center",
        width:"100px",
        height:"30px",
    }
    const boxAdd ={
        fontWeight: "bold",
        fontSize: "1em",
        color: "red",
    }
    export default function ItemCount({onAdd,item,availableProducts,initial}) {
        const [counter, counterState] = useState(initial);
        const [itemcart, setItemcart] = useState([]);


        const handleAddProducts = item =>{
            return console.log(item);         
        }

    const onClickButton = (amount) => {
        return () => {
            let total = (amount < 0) ? 0 : amount;
            let limiter = (total > availableProducts) ? availableProducts: total;
            counterState(limiter);

        }
    }

    let props = {counter, counterState}

    return (
        <div className="section-car" style={styleContain}>   
        <div className="box-count" style={styleBox}> 
            <ButtonsCount suma={false} onClick={onClickButton} {...props} />
             <ViewCount value={counter}/> 
             <ButtonsCount suma={true} onClick={onClickButton}  {...props}/>
        </div>

        <div  className="box-add" style={boxAdd}> <AgregarCount onAdd= {handleAddProducts} {...{counter}}/> </div>
        </div>
        );
}


