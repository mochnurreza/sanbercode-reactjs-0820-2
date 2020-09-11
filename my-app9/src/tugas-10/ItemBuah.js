import React from 'react';

export function ItemBuah (props) {

  return (
    <tr>
      <td>{props.buah.nama}</td>
      <td>{props.buah.harga}</td>
      <td>{props.buah.berat/1000}kg</td>
    </tr>
  )

}
