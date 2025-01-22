export default function Footer() {
  return (
    <>
      <footer className="pt-3 footer">
        <div className="justify-content-lg-between align-items-center row">
          <div className="mb-4 mb-lg-0 col-lg-6">
            <div className="copyright text-center text-lg-start text-muted text-sm">
              Copyright ©{" "}
              <script>document.write(new Date().getFullYear())</script>
              &nbsp;The green republic by 
              <a
                href=""
                className="text-dark ms-1"
                target="_blank"
              >
                Creative Tim
              </a>
              .
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="justify-content-center justify-content-lg-end nav nav-footer">
              <li className="nav-item">
                <a
                  href="https://www.creative-tim.com"
                  className="text-muted text-sm nav-link"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.creative-tim.com/presentation"
                  className="text-muted text-sm nav-link"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.creative-tim.com/blog"
                  className="text-muted text-sm nav-link"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.creative-tim.com/license"
                  className="text-muted text-sm nav-link pe-0"
                  target="_blank"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}


