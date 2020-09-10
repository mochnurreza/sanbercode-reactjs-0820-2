import React, { useContext, useState } from 'react';
import {FruitsContext} from './FruitsContext';
import axios from 'axios';
import FruitsList from './FruitList';

const FruitsForm = () => {
    const [dataBuah, setDaftarBuah] = useState(null);
    const [inputName, setInputName] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [inputWeight, setInputWeight] = useState('');
    const [selectedId, setSelectedId] = useState(0);
    const [statusForm, setStatusForm] = useState('create');

    const handleChange = (event) =>{
        let data = event.target.value

        switch (data) {
            case 'name' :
                {
                setInputName(event.target.value);
                break;
                }
            case 'price' :
                {
                setInputPrice(event.target.value);
                break;
                }
            case 'weight' :
                {
                setInputWeight(event.target.value);
                break;
                }
             default:
                {break;}
            
        }
    }

    const handleSubmit = (event) => {
        event.prevenDefault();
        let name = inputName;
        let price = inputPrice;
        let weight = inputWeight;

        if (name.replace(/\s/g, '') !== '') {
            if (statusForm === 'create') {
                axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name,price,weight}).then(res =>{
                    setDaftarBuah([...dataBuah, { id: res.data.id, name, price, weight }])
                })
            }else if (statusForm === 'edit'){
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {name,price,weight})
                .then(res => {
                    let buah = dataBuah.find(el => el.id === selectedId)
                    buah.name = name
                    buah.price = price
                    buah.weight = weight
          
                    setDaftarBuah([...dataBuah])
                  })
            }
            setStatusForm('create')
            setSelectedId(0)
            setInputName('')
            setInputPrice('')
            setInputWeight('')

        }      
    }
    const handleEdit = (event) => {
        event.preventDefault();
    
        let idBuah = parseInt(event.target.value)
        let buah = dataBuah.find(item => item.id === idBuah)
        setInputName(buah.name)
        setInputPrice(buah.price)
        setInputWeight(buah.weight)
        setSelectedId(idBuah)
        setStatusForm('edit')
    }
    const handleDelete = (event) => {
        let idBuah = parseInt(event.target.value)
    
        let newBuah = dataBuah.filter(el => el.id !== idBuah)
    
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res => {
          console.log(res)
        })
    
        setDaftarBuah([...newBuah])
    }
    return (
        <React.Fragment>
          <div className="content-wrapper">
            <FruitsList edit={handleEdit} delete={handleDelete}/>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nama</label>
                <input type="text" name="name" value={inputName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Harga</label>
                <input type="text" name="price" value={inputPrice} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Berat</label>
                <input type="text" name="weight" value={inputWeight} onChange={handleChange} />
              </div>
    
              <button className="btn btn-tambah">
                Simpan
              </button>
            </form>
          </div>
        </React.Fragment>
      )
      
}

export default FruitsForm;