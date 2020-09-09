import React from 'react';

function Item(props) {
  return (
    <React.Fragment>
      <td>{props.buah.name}</td>
      <td>{props.buah.price}</td>
      <td>{props.buah.weight/1000} kg</td>
    </React.Fragment>
  )
}
export default Item;