import { NavLink } from 'react-router-dom';
import './index.scss';
import gambar from "./react.png"

const Navigation = () => {
  return (
    <div>
      <div className="navbar">
        {/* <h4 className="navbar-brand">React x Express</h4> */}
        <img src={gambar} maxwidth= "100%" width="170" height="35"alt="" />
 
        <ul className="link-wrapper">
          <li className="link">
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li className="link">
            <NavLink to="/tambah">Tambah</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;