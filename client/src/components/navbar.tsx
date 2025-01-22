const Navbar = () => {
  return (
    <nav className="top-0 z-index-3 position-sticky shadow blur py-3 border-radius-sm end-0 navbar navbar-expand-lg start-0">
      <div className="px-1 container">
        <a className="font-weight-bolder ms-lg-0 navbar-brand" href="https://www.creative-tim.com/astro">The Green Republic</a>
        <button className="shadow-none ms-2 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="mt-2 navbar-toggler-icon">
            <span className="bar1 navbar-toggler-bar"></span>
            <span className="bar2 navbar-toggler-bar"></span>
            <span className="bar3 navbar-toggler-bar"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="ms-auto navbar-nav">
            <li className="nav-item">
              <a className="d-flex align-items-center font-weight-bold text-dark me-2 nav-link" aria-current="page" href="/astro-ecommerce/">
                Shop
              </a>
            </li>           
            <li className="nav-item">
              <a className="d-flex align-items-center font-weight-bold text-dark me-2 nav-link" aria-current="page" href="/">
                Contact
              </a>
            </li>
            <li className="dropdown nav-item">
              <a className="d-flex align-items-center font-weight-bold text-dark dropdown-toggle me-2 nav-link" aria-current="page" id="pagesExample" data-bs-toggle="dropdown" aria-expanded="false">
               Members 
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesExample">
                <li><a className="dropdown-item" href="/astro-ecommerce/landing/">Login</a></li>
                <li><a className="dropdown-item" href="/astro-ecommerce/product/">Register</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
