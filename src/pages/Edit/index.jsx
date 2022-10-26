import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Input from "../../components/Input";

const Edit = () => {

  const {state} = useLocation()
  const [Editapi, setEditapi] = useState([])
  const [name, setName] = useState(state.name)
  const [price, setPrice] = useState(state.price);
	const [stock, setStock] = useState(state.stock);
	const [image, setImage] = useState(null);
	const [status, setStatus] = useState(state.status);
	const [message, setMessage] = useState("");

  useEffect(() => {
    fetchEditapi()
  }, [])
  
  // const fetchEditapi = () => {
  //   fetch(`http://localhost:3000/api/v4/products_v4`)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setEditapi(data)
  //   })
  // }

  const fetchEditapi = async (formData) => {
    const response = await fetch (
      `http://localhost:3000/api/v4/products_v4/${state._id}`,
      {
        method: "PUT",
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
		const formData = new FormData();
		formData.append("name", name);
		formData.append("price", price);
		formData.append("stock", stock);
		formData.append("status", status);
		if (image) formData.append("image", image, image.name);
    fetchEditapi(formData)
	};

  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
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
            name="stock"
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

          <button
            onClick={() => submitHandler()}
            className="btn btn-primary">Simpan
          </button>

      </div>
    </div>
  )
}

export default Edit;