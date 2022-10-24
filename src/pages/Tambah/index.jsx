import { useEffect, useState } from "react";
import Input from '../../components/Input';
import axios from "axios";
import React from "react";
import './index.scss';

const Tambah = () => {

  const [Tambahapi, setTambahapi] = React.useState({});
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(1000);
	const [stock, setStock] = React.useState(0);
	const [image, setImage] = React.useState(null);
	const [status, setStatus] = React.useState(false);
	const [message, setMessage] = React.useState("");


  const fetchTambahapi = async (formData) => {
    const response = await fetch(
      `http://localhost:3000/api/v4/products_v4`,
      {
        method: "POST",
        body: formData
      }
    );
    const result = await response.json();
    return result;
  };
  

  const nameHandler = (event) => {
    setName(event.target.value)
  }

  const priceHandler = (event) => {
    setPrice(parseInt(event.target.value))
  }

  const stockHandler = (event) => {
    setStock(parseInt(event.target.value))
  }

  const imageHandler = (event) => {
    setImage(event.target.files[0])
  }

  const statusHandler = (event) => {
    setStatus(event.target.checked)
  }

  const submitHandler = () => {
    console.log("masuk")
		const formData = new FormData();
		formData.append("name", name);
		formData.append("price", price);
		formData.append("stock", stock);
		formData.append("status", status);
		if (image) formData.append("image", image, image.name);
    // fetch(`http://localhost:3000/api/v4/products_v4`, {
    //   method: "POST",
    //   body: formData
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    // }).catch(error => {
    //   console.log(error)
    // })
	};

  // const fillUp = (products) => {
  //   setName(products.name)
  //   setPrice(products.price);
	// 	setStock(products.stock);
	// 	setStatus(products.status);
  // }

  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        {/* <form onSubmit={event => event.preventDefault()}> */}
        <Input 
            name="name"
            type="text"
            placeholder="Nama Produk..."
            label="Nama"
            onChange={nameHandler}
            value={name}/>

          <Input 
            name="price"
            type="number"
            placeholder="Harga Produk..."
            label="Harga"
            onChange={priceHandler}
            value={price}/>

          <Input 
            name="Stock"
            type="number"
            placeholder="Stock Produk..."
            label="Stock"
            onChange={stockHandler}
            value={stock}/>

          <Input 
            name="image_url"
            type="file"
            accept="image/*"
            onChange={imageHandler}/>
            
          <Input 
            name="status"
            type="checkbox"
            label="Active"
            onChange={statusHandler}
            checked={status}/> 

          <button onClick={() => submitHandler()} className="btn btn-primary">Simpan</button>
        {/* </form> */}
      </div>
    </div>
  )
}

export default Tambah;