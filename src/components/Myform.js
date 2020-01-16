import React from 'react';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form';

class MyForm extends React.Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  }

  render() {
    return (
      <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
        <label>Nama Barang</label><br/>
        <Control.text model=".nama" /><br/>
        <label>Deskripsi</label><br/>
        <Control.text model=".deskripsi" /><br/>
        <label>Gambar</label><br/>
        <Control.text model=".gambar" /><br/>
        <label>Harga</label><br/>
        <Control.text model=".harga" /><br/>
        <button>Submited</button>
      </Form>
    );
  }
}

// No need to connect()!
export default MyForm;