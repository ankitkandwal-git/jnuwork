import './index.css'

const Header=()=>{
   <nav class="nav-container">
    <div className="header-container">
    <img
        alt="wave"
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="header-names">
        <li className="list">
            <link to="/about" className="nav-items">About</link>
        </li>
        <li className="list">
            <link to="/" className="nav-items">Home</link>
        </li>
        <li className="list">
            <link to="/Contact" className="nav-items">Contact</link>
        </li>
    </ul>
   </nav>
}
export default Header