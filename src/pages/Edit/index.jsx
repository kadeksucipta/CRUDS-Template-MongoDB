import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../components/Input";

const Edit = () => {

  const [Editapi, setEditapi] = useState([])
  const { productsId } = useParams
  const [name, setName] = useState("")
  const [price, setPrice] = useState(1000);
	const [stock, setStock] = useState(0);
	const [image, setImage] = useState(null);
	const [status, setStatus] = useState(false);
	const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetchEditapi()
  // }, [])
  
  const fetchEditapi = () => {
    fetch(`http://localhost:3000/api/v4/products_v4`, {
      method:"put",

    })
    .then(res => res.json())
    .then(data => {
      setEditapi(data)
    })
  }

  // const handleNamaChange = (query) => {
  //   setNama(query)
  // }

 

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
		// updateProducts(productsId, formData).then((result) => {
		// 	setMessage("Data product berhasil diubah");
		// });
	};

  const fillUp = (products) => {
    setName(products.name)
    setPrice(products.price);
		setStock(products.stock);
		setStatus(products.status);
  }


  useEffect(() => {
    fetchEditapi()
  }, []);

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

          <button
            onClick={() => submitHandler()}
            type="submit"
            className="btn btn-primary">Simpan
          </button>

      </div>
    </div>
  )
}

export default Edit;

// onChange={handleNamaChange}