import React from "react";
import {TrashIcon,BuyIcon} from '../icons/index';

export const ButtonPrimary = ({ text,onClick,type }) => (
<button className="btn btn-primary" onClick={onClick}>{text}</button>
);

export const ButtonDark = ({ text,onClick,type }) => (
    <button className="btn btn-dark" onClick={onClick}>{text}<TrashIcon width={"20px"} /></button>
    );

export const ButtonSuccess = ({ text,onClick,type }) => (
    <button className="btn btn-success" onClick={onClick}>{text}<BuyIcon width={"20px"} /></button>
    );