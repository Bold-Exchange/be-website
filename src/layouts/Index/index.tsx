import { Outlet } from "umi";
export default function Layout() {
  return (
    <>
      <header className="home_nav_two">
        <nav className="navbar fixed-top navbar-expand-lg navbar_two">
          <div className="container">
            <a className="navbar-brand" href="#/">
              <img
                src="assets/images/Bold_Logo-white.svg"
                alt="Bold Exchange Logo"
                style={{ width: "150px" }}
              />
            </a>
            <div className="d-flex flex-row order-2 order-lg-3 user_info">
              <div className="group_btn d-none d-sm-block">
                <a href="#/login" className="group_link log_in registration">
                  LOG IN
                </a>
                <a href="#/register" className="group_link registration hover">
                  SIGN UP
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navDefault"
                aria-controls="navDefault"
                aria-expanded="false"
                aria-label="Toggle navigation"
                id="toggleIcon"
              >
                <span className="bar_one"></span>
                <span className="bar_two"></span>
                <span className="bar_three"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end order-3 order-lg-2"
              id="navDefault"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    HOME
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="index.html">
                        HOME
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index-two.html">
                        HOME TWO
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="user-portfolio.html">
                        Admin Panel
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="play.html">
                    HOW TO PLAY
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="faq.html">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pd_right" href="contact.html">
                    CONTACT US
                  </a>
                </li>
                <li className="nav-item d-block d-sm-none">
                  <a className="nav-link registration" href="login.html">
                    LOG IN
                  </a>
                </li>
                <li className="nav-item d-block d-sm-none">
                  <a className="nav-link registration hover" href="signup.html">
                    SIGN UP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer>
        <div className="container">
          <div className="row footer_nav d-flex align-items-center">
            <div className="col-lg-7">
              <ul className="nav justify-content-center justify-content-sm-start">
                <li className="nav-item">
                  <a className="nav-link ml-0" href="contact.html">
                    CONTACT US
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TERMS OF USE
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PRIVACY POLICY
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <ul className="nav justify-content-center justify-content-sm-start justify-content-lg-end">
                <li className="nav-item">
                  <a className="nav-link ml-0" href="#">
                    <img
                      src="assets/images/footer/apple_store.png"
                      alt="Download from Apple Store"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mr-0" href="#">
                    <img
                      src="assets/images/footer/google_store.png"
                      alt="Download from Google Play Store"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row footer_copyright d-flex align-items-center">
            <div className="col-lg-7 text-center text-sm-start">
              <p className="para">
                Copyright &#169; 2021. Made with passion by{" "}
                <a href="https://themeforest.net/user/Bold Exchange/portfolio">
                  Bold Exchange
                </a>
              </p>
            </div>
            <div className="col-lg-5 text-center text-sm-start text-lg-end">
              <p className="para">All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>

      <a href="#" className="scrollToTop">
        <i className="flaticon-up-chevron"></i>
      </a>
    </>
  );
}
