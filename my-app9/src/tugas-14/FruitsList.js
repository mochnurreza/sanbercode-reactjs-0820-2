import React, { useContext, useEffect } from 'react';
import {FruitsContext} from './FruitsContext';
import './FruitsList.css'
import axios from 'axios';

const FruitsList = (props) => {
    const [ dataBuah, setDaftarBuah ] = useContext(FruitsContext)
    useEffect(() => {
        if (dataBuah === null) {
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDaftarBuah(res.data.map(el => {
              return {
                id: el.id,
                name: el.name,
                price: el.price,
                weight: el.weight
              }
            }))
          })
          .catch(err => {
            console.log(err.response)
          })
        }
      }, [dataBuah])
    return(
        <div className="content-wrapper">
      <h1>Data Buah</h1>
      <table className="table" border="1" cellPadding="15" cellSpacing="0">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {
            dataBuah !== null && dataBuah.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td>{el.weight/1000} kg</td>
                  <td>
                    <button className="btn btn-ubah" onClick={props.edit} value={el.id}>Ubah</button>
                    <button className="btn btn-hapus" onClick={props.delete} value={el.id}>Hapus</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

    )
}

export default FruitsList;