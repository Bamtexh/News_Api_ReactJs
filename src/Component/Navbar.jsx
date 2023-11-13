import News_icon from "../Component/Assets/News_icon.png"
import "../App.css"

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top  bg-light">
  <div className="container-fluid">
    <div className="fw-bold badge bg-dark fs-4 p-2" href="#">BamNews<img className="mx-2" src={News_icon}/></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link fw-bold" onClick={() =>setCategory("technology")}>Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold" onClick={() =>setCategory("business")}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold" onClick={() =>setCategory("entertainment")}>Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold" onClick={() =>setCategory("health")}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  fw-bold" onClick={() =>setCategory("sports")}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  fw-bold" onClick={() =>setCategory("Science")}>Science</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar