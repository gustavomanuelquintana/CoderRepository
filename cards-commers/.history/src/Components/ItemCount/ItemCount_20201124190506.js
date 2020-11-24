import React, {useState} from 'react';
import ButtonsCount from './ButtonsCount/ButtonsCount';
import ViewCount from './ViewCount/ViewCount';
import AgregarCount from './AgregarCount/AgregarCount';


    const styleContain={
        display:"flex",
        alignItems: "center",
        justifyContent: "start",
    }
    const styleBox = {
        color:"black",
        borderRadius:"3px",
        marginRight:"10px",
        fontWeight:"bold",
        fontSize:"1.3em",
        lineHeight:"15px",
        display:"flex",
        width:"100px",
        height:"30px",
    }
    const boxAdd ={
        fontWeight: "bold",
        fontSize: "1.1em",
        color: "red",
    }
    export default function ItemCount({onAdd,item,stock,initial}) {
        const [counter, counterState] = useState(initial);

    const onClickButton = (amount) => {
        return () => {
            let total = (amount < 0) ? 0 : amount;
            let limiter = (total > stock) ? stock: total;
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

        <div  className="box-add" style={boxAdd}> <AgregarCount onAdd={onAdd} {...{counter}}/> </div>
        </div>
        );
}