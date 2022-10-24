import { Link } from 'react-router-dom'

const Header = props => {
    return (
      <header className="Header-header">
        <nav className="Header-navbar">
          
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/editcart">Edit Shopping Cart</Link>
            </li>
            <li className="nav-item">
              <Link to="/sortcart">Sort Shopping Cart</Link>
            </li>
            <li className="nav-item">
              <Link to="/filtercart">Filter Shopping Cart</Link>
            </li>
            
            
          </ul>
        </nav>
      </header>
    )
  }
  
  // make this component available to be imported into any other file
  export default Header