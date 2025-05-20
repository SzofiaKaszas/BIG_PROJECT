import "./navBar.css";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <span className="navbar-brand">Video lejatszo</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">idk</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">idk</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">idk</a>
                    </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}