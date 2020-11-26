import React from "react";
import {TrashIcon,BuyIcon} from '../icons/index';

export const ButtonPrimary = ({ text,onClick,type }) => (
<button className="btn btn-primary ml-4" onClick={onClick}>{text}</button>
);

export const ButtonDark = ({ text,onClick,type }) => (
    <button className="btn btn-dark btn-block " onClick={onClick}>{text}<TrashIcon width={"20px"} /></button>
    );

export const ButtonSuccess = ({ text,onClick,type }) => (
    <button className="btn btn-success btn-block ml-4" onClick={onClick}>{text}<BuyIcon width={"20px"} /></button>
    );

export const ButtonDanger = ({ text,onClick,type }) => (
    <button className="btn btn-danger mr-2" onClick={onClick}>{text}</button>
    );