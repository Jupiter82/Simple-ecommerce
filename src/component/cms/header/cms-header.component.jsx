import { Navbar, Button } from "react-bootstrap"
import { useState } from "react"
const CmsHeader = () =>{
    const [theme, setTheme] = useState('dark')
  const changeTheme = (e) =>{
    let value = theme === 'dark' ? 'light' : 'dark'
    setTheme(value)
  }
  //TODO: Webstorage
  const sidebarToggle = (e) => {
    e.preventDefault();
    document.body.classList.toggle("sb-sidenav-toggled");
  };
    return(
        <>
        <Navbar className={`sb-topnav`} bg={theme} variant={theme}>
        <Navbar.Brand className="ps-3" href="/admin">
          Admin Panel
        </Navbar.Brand>
        <Button size="sm" variant="link"
          onClick={sidebarToggle}
          className=" order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
        >
          <i className={`fas fa-bars text-${theme === 'light' ? 'dark' : 'light'}`}></i>
        </Button>
        <button onClick={changeTheme} variant="link" size="sm" className={`btn text-${theme === 'light' ? 'dark' :'light' }`}>
          <i className="fa fa-moon"></i>
        </button>
        <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        </div>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </Navbar>
        </>
    )
}
export default CmsHeader