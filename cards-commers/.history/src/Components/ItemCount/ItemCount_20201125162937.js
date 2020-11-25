import React, { useState } from "react";
import ButtonsCount from "./ButtonsCount/ButtonsCount";
import ViewCount from "./ViewCount/ViewCount";
import AgregarCount from "./AgregarCount/AgregarCount";


export default function ItemCount({ onAdd, item, stock, initial }) {
  const [counter, counterState] = useState(initial);

  const onClickButton = (amount) => {
    return () => {
      let total = amount < 0 ? 0 : amount;
      let limiter = total > stock ? stock : total;
      counterState(limiter);
    };
  };

  let props = { counter, counterState };

  return (
    <div className="section-car" style={styleContain}>
      <div className="box-count" style={styleBox}>
        <ButtonsCount suma={false} onClick={onClickButton} {...props} />
        <ViewCount value={counter} />
        <ButtonsCount suma={true} onClick={onClickButton} {...props} />
      </div>

      <div className="box-add" style={boxAdd}>
        {" "}
        <AgregarCount onAdd={onAdd} {...{ counter }} />{" "}
      </div>
    </div>
  );
}
