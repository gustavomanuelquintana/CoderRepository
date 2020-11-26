import React from "react";

export const ButtonPrimary = ({ text,onClick,type }) => (
<button className="btn btn-primary" onClick={onClick}>{text}</button>
);