import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './index.scss';

const Detail = () => {

  const [Detailapi, setDetailapi] = useState([])
  const {state} = useLocation()


  useEffect(() => {
    fetchDetailapi()
  }, [])
  
  const fetchDetailapi = () => {
    fetch(`http://localhost:3000/api/v4/products_v4/${state}`)
    .then(res => res.json())
    .then(data => {
      setDetailapi(data)
    })
  }

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
      
          <tbody>
          <tr>
            <td>ID</td>
            <td>{Detailapi._id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{Detailapi.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{Detailapi.price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>{Detailapi.stock}</td>
          </tr>
        </tbody>
        
      </table>
    </div>
  )
}

export default Detail;