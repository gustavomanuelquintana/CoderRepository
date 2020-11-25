import React from "react";

export default function ButtonsCount({ suma, onClick, counter, counterState }) {
  let signo = suma ? "+" : "-";

  let amount = suma ? counter + 1 : counter - 1;

  return (
    <button onClick={onClick(amount)} className="btn btn-warning">
      {signo}
    </button>
  );
}
