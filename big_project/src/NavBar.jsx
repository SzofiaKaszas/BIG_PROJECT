import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-3">
      <a className="navbar-brand font-weight-bold" href="#">
        🎬 Video Lejátszó
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="index.html">Főoldal <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Kategóriák</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Újdonságok</a>
            </li>
        </ul>

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Keresés..."
            aria-label="Keresés"
          />
          <button className="btn btn-info my-2 my-sm-0" type="submit">
            Keresés
          </button>
        </form>
      </div>
    </nav>
  );
}
