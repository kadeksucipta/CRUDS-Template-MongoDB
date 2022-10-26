import { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

  const [Homeapi, setHomeapi] = useState([])
  const [keyword, setKeyword] = useState("")

  useEffect(() => {
    fetchHomeapi()
  }, [])
  
  const fetchHomeapi = (formData) => {
    fetch(`http://localhost:3000/api/v4/products_v4`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setHomeapi(data)
    })
  }

  const deleteHandler = (_id) => {
    fetch(`http://localhost:3000/api/v4/products_v4/${_id}`, {

      method: "DELETE"
    }) 
      .then(() => fetchHomeapi())
  }

  // const searchHandler = (name) => {
  //   fetch(`http://localhost:3000/api/v4/products_v4/?q=${name}`, {
      
  //     method: "GET"
  //   }) 
  //     .then(() => fetchHomeapi())
  // }

  return(
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..."/>
      </div>

        <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
        {Homeapi.map((item, index) => (
          <tr key={index}>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td className="text-right">{item.price}</td>
            <td className="text-center">
              <Link to={{
                pathname: "/detail", 
                state: item._id
              }} className="btn btn-sm btn-info">Detail</Link>
              <Link to={{
                pathname: "/edit",
                state: item
              }} className="btn btn-sm btn-warning">Edit</Link>
              <Link onClick={() => deleteHandler(item._id)} to="#" className="btn btn-sm btn-danger">Delete</Link>
            </td>
          </tr>
        ))}
        </tbody>    
        
      </table>
      
    </div>
  )
}

export default Home;