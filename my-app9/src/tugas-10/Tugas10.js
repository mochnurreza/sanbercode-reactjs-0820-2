import React, {Component} from 'react';
import { ItemBuah } from './ItemBuah';
import './tugas10.css';

  let dataHargaBuah = [
            {nama: "Semangka", harga: 10000, berat: 1000},
            {nama: "Anggur", harga: 40000, berat: 500},
            {nama: "Strawberry", harga: 30000, berat: 400},
            {nama: "Jeruk", harga: 30000, berat: 1000},
            {nama: "Mangga", harga: 30000, berat: 500}
          ]
class Tugas10 extends Component {
    render(){
          return(
            <>
            <fieldset className="table">
            <h1>Tabel Harga Buah</h1>
            <table border="1px">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>berat</th>
                    </tr>
                </thead>
                 <tbody>
                 {dataHargaBuah.map(el =>{
                 return(
                     <ItemBuah buah={el} />
                 )     
                })}
                </tbody>
            </table>
            </fieldset>
            
            </>
          )
    }
}



export default Tugas10;