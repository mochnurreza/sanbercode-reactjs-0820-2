import React, {Component} from 'react';
import './tugas9.css';

class Tugas9 extends Component{
    render(){
        return(
            <>
            <form action="" method="POST">
              <fieldset>
                  <h1>Form Pembelian Buah</h1>
              <p>
                  <label id="pelanggan">Nama Pelanggan:</label>
                  <input type="text" name="nama" placeholder="nama" />
              </p>
              <p>
                  <legend>Daftar Item:</legend>
                  <label>
                  <p><input type='checkbox' name='buah1' value='semangka' />Semangka</p>
                  </label>
                  <label>
                  <p><input type='checkbox' name='buah2' value='jeruk' />Jeruk</p>
                  </label>
                  <label>
                  <p><input type='checkbox' name='buah3' value='nanas' />Nanas</p>
                  </label>
                  <label>
                  <p><input type='checkbox' name='buah4' value='salak' />Salak</p>
                  </label>
                  <label>
                  <p><input type='checkbox' name='buah5' value='anggur' />Anggur</p>
                  </label>
                  
              </p>
              <p>
                  <input type="submit" name="submit" value="Kirim" />
              </p>
              </fieldset>
              </form>
            </>
        )
    }
}
  
  export default Tugas9;
  