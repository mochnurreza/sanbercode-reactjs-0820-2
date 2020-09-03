import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <form action="" method="POST">
            <fieldset>
            <p>
                <label>Nama Pelanggan:</label>
                <input type="text" name="nama" placeholder="nama" />
            </p>
            <p>
                <label>Daftar Item:</label>
                <p><input type='checkbox' name='buah1' value='semangka' />Semangka</p>
                <p><input type='checkbox' name='buah2' value='jeruk' />Jeruk</p>
                <p><input type='checkbox' name='buah3' value='nanas' />Nanas</p>
                <p><input type='checkbox' name='buah4' value='salak' />Salak</p>
                <p><input type='checkbox' name='buah5' value='anggur' />Anggur</p>
            </p>
            <p>
                <input type="submit" name="submit" value="Kirim" />
            </p>
            </fieldset>
            </form>
    </div>
  );
}

export default App;
