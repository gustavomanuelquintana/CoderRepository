import React from "react";
import {TrashIcon} from '../icons/index';

export const ButtonPrimary = ({ text,onClick,type }) => (
<button className="btn btn-primary" onClick={onClick}>{text}</button>
);

export const ButtonDark = ({ text,onClick,type }) => (
    <button className="btn btn-dark" onClick={onClick}>{text}</button>
    );