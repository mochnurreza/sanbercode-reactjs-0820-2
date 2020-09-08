import React,{Component} from 'react';
import './List.css';


  class List extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            dataHargaBuah: [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ],
            input:{
              nama:"",
              harga:"",
              berat:""
            },
            index: -1
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteDataBuah = this.deleteDataBuah.bind(this);
      }

      handleChange(event){
        let input = {...this.state.input}
        input[event.target.name] = event.target.value
        this.setState({
          input
        })
      }

      editForm = (event) => {
        let index = event.target.value
        let buah = this.state.dataHargaBuah[index]
        this.setState({ input:{
          nama:buah.nama,
          harga:buah.harga,
          berat:buah.berat}, index})
      }

      deleteDataBuah(event){
        let index= event.target.value
        let newDataBuah = this.state.dataHargaBuah
        let EditDaftarBuah = newDataBuah[this.state.index]
        newDataBuah.splice(index, 1)
        if(EditDaftarBuah !== undefined){
          var newIndex = newDataBuah.findIndex((val)=>val===EditDaftarBuah)
          this.setState({
            dataHargaBuah:newDataBuah,
            index:newIndex
          })
          }else{
            this.setState({dataHargaBuah:newDataBuah})
        }
      }

      handleSubmit(event){
        event.preventDefault()
        let input = this.state.input
        if(input['nama'] && input['harga'] && input['berat']){
          let newDaftarBuah = this.state.dataHargaBuah
          let index = this.state.index
          if(index===-1){
            newDaftarBuah = [...newDaftarBuah,input]
          }
          else{
            newDaftarBuah[index]=input
          }
          this.setState({
            dataHargaBuah: newDaftarBuah,
            input:{
              nama:"",
              harga:"",
              berat:""
            },
            index: -1
          })
        }
      }
    
      render(){
        return(
          <>
            <h1>Tabel Harga Buah</h1>
            <table>
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
                    this.state.dataHargaBuah.map((val, index)=>{
                      return(                    
                        <tr key={index}>
                          <td>{val.nama}</td>
                          <td>{val.harga}</td>
                          <td>{val.berat/1000}kg</td>
                          <td>
                            <button value={index} onClick={this.editForm}>Edit</button>
                            <button value={index} onClick={this.deleteDataBuah}>Delete</button>
                          </td>
                        </tr>
                      )
                    })
                  }
              </tbody>
            </table>
            <form onSubmit={this.handleSubmit}>
            <label>Name buah:</label>
            <input type="text" name='nama' value={this.state.input.nama} onChange={this.handleChange} placeholder="Nama buah" /> <br />
            <label>Harga buah:</label>
            <input type="text" name='harga' value={this.state.input.harga} onChange={this.handleChange} placeholder="Harga buah" /> <br />
            <label>Berat buah:</label>
            <input type="text" name='berat' value={this.state.input.berat} onChange={this.handleChange} placeholder="Berat buah" /> <br />
            <button>Submit</button>
            </form>
          </>
        )
      }
  }

  export default List;