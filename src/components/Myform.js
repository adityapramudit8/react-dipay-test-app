import React from 'react';
import '../App.css';
import { Control, Form } from 'react-redux-form';

class MyForm extends React.Component {
  handleSubmit(val) { 
    console.log(val)
  }

  render() {
    return (
      <>
      <h1>Tambah Barang Dipay</h1>
      <Form className="form-style" model="user" onSubmit={(val) => this.handleSubmit(val)}>
        <label>Nama Barang</label><br/>
        <Control.text className="input-style" model=".nama" /><br/>
        <label>Deskripsi</label><br/>
        <Control.text className="input-style" model=".deskripsi" /><br/>
        <label>Gambar</label><br/>
        <Control.text className="input-style" model=".gambar" /><br/>
        <label>Harga</label><br/>
        <Control.text className="input-style" model=".harga" /><br/>
        <br/>
        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn">Submited</button>
      </Form>
      </>
    );
  }
}

// No need to connect()!
export default MyForm;