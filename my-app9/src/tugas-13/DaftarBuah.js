import React, {useState, useEffect} from "react";
import'./DaftarBuah.css'
import axios from 'axios';

const DaftarBuah = () => {
    const [dataBuah, setDaftarBuah] = useState(null);
    const [inputName, setInputName] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [inputWeight, setInputWeight] = useState('');
    const [selectedId, setSelectedId] = useState(0);
    const [statusForm, setStatusForm] = useState('create');
    const [isLoading, setIsLoading] = useState(true)
  

    useEffect(() => {
        if (dataBuah === null) {
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDaftarBuah(res.data.map(el => { return {
              id: el.id,
              name: el.name,
              price: el.price,
              weight: el.weight
            } }))
          })
          .then(res => {
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err.response)
          })
        }
      }, [dataBuah])
    
      const handleChange = (event) => {
        let namedData = event.target.name;
    
        switch(namedData) {
          case "name":
          {
            setInputName(event.target.value)
            break;
          }
          case "price":
          {
            setInputPrice(event.target.value)
            break;
          }
          case "weight":
          {
            setInputWeight(event.target.value)
            break;
          }
        default:
          {break;}
        }
      }


      const handleEdit = (event) => {
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
      const handleSubmit = (event) => {
        event.preventDefault();
    
        let name = inputName;
        let price = inputPrice;
        let weight = inputWeight;
    
        if (name.replace(/\s/g, '') !== '') {
          if (statusForm === 'create') {
            axios.post('http://backendexample.sanbercloud.com/api/fruits', {name, price, weight})
            .then(res => {
              setDaftarBuah([...dataBuah, { id: res.data.id, name, price, weight }])
            })
          } else if (statusForm === 'edit') {
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {name, price, weight})
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
    
      if (isLoading) {
        return <p>Loading...</p>
      }
      return (
        <React.Fragment>
          <div className="content-wrapper">
            <h1>Daftar Buah</h1>
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
                            <button className="btn btn-ubah" onClick={handleEdit} value={el.id}>Ubah</button>
                            <button className="btn btn-hapus" onClick={handleDelete} value={el.id}>Hapus</button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
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
    

  export default DaftarBuah;