import React from "react";

export default function AgregarCount({ onAdd, counter }) {
  return (
    <div>
      <button
        className="btn btn-warning"
        onClick={onAdd(counter)}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}
