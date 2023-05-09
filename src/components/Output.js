import React, { useContext } from 'react';
import {AppContext} from "../App";
import {TextField} from "@mui/material";

const Output = () => {
    const { inputFields, image1 } = useContext(AppContext);

    return (
        <div>
            <p>Номер: <b>{inputFields.number} </b></p>
            <p>Название: {inputFields.name}</p>
            <p>Заказчик: {inputFields.costumer}</p>
            <p>Дата составления заявки: {inputFields.dateOne.toLocaleDateString()}</p>
            <p>Менеджер проекта: {inputFields.manager}</p>
            {inputFields.mountOrNot === "mount" ? (
                <p>Монтаж по адресу: {inputFields.address}</p>
            ) : inputFields.mountOrNot === "send" ? (
                <p>Отправить по адресу: {inputFields.address}</p>
            ) : inputFields.mountOrNot === "self" ? (
                "Заказчик заберет сам"
            ) : (
                "Непонятно что с ней потом делать"
            )}
            {image1 && <img src={image1} alt="Габариты" />}

        </div>
    );
};

export default Output;
