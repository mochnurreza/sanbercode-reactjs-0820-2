import React, { useState, createContext } from 'react';

export const FruitsContext = createContext();
export const FruitsProvider = (props) => {
    const [dataBuah, setDaftarBuah] = useState(null);
    const [inputName, setInputName] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [inputWeight, setInputWeight] = useState('');
    const [selectedId, setSelectedId] = useState(0);
    const [statusForm, setStatusForm] = useState('create');
    return(
        <FruitsContext.Provider
        value = {
            [
            dataBuah,setDaftarBuah,
            inputName,setInputName,
            inputPrice,setInputPrice,
            inputWeight,setInputWeight,
            selectedId,setSelectedId,
            statusForm,setStatusForm
        ]
        }>

            {props.children}
            </FruitsContext.Provider>
    )
}