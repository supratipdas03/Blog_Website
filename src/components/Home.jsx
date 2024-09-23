import React from "react";
import MessiImage from "../assets/messi.jpg";
import Messi_Image from "../assets/messi2.jpg";
import RonaldoImage from "../assets/ronaldo.jpg";
import Ronaldo_Image from "../assets/ronaldo-image.jpg";
import TechImage from "../assets/tech.jpg";
import AIImage from "../assets/ai-image.jpg";
import ViratImage from "../assets/Virat_Kohli.jpg";
import Virat_Img from "../assets/vieighteen.png";
import InternetImage from "../assets/5g.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <body data-new-gr-c-s-check-loaded="14.1186.0" data-gr-ext-installed="">
        <div className="container">
          <header className="border-bottom lh-1 py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-4">
                <Link
                  to="/"
                  className="blog-header-logo text-body-emphasis text-decoration-none text-size"
                >
                  Bloggspedia
                </Link>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center">
                <a className="link-secondary" href="#" aria-label="Search">
                  {/* <IoSearchOutline /> */}
                </a>
                <a className="btn btn-primary" href="#">
                  Sign up
                </a>
              </div>
            </div>
          </header>

          <div className="nav-scroller py-1 mb-3 border-bottom">
            <nav className="nav nav-underline justify-content-between">
              <a className="nav-item nav-link link-body-emphasis" href="#">
                Food
              </a>
              <Link to="" className="nav-item nav-link link-body-emphasis">
                Technology
              </Link>
              <a className="nav-item nav-link link-body-emphasis" href="#">
                Lifestyle
              </a>
              <a className="nav-item nav-link link-body-emphasis" href="#">
                Fitness
              </a>
              <Link to="" className="nav-item nav-link link-body-emphasis">
                Sports
              </Link>
              {/* <a className="nav-item nav-link link-body-emphasis" href="#">
                News
              </a> */}
              <a className="nav-item nav-link link-body-emphasis" href="#">
                Affiliate
              </a>
              <a className="nav-item nav-link link-body-emphasis" href="#">
                Health
              </a>
              <a className="nav-item nav-link link-body-emphasis" href="#">
                Travel
              </a>
            </nav>
          </div>
        </div>

        <main className="container">
          <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary big-blog-img">
            <div className="col-lg-6 px-0 ">
              <h1 className="display-4 fst-italic textz">
                The Technological Revolution: Shaping Our Future
              </h1>
              <p className="lead my-3 textz">
                In our fast-paced digital age, technology continues to evolve at
                an unprecedented rate, revolutionizing the way we live....
              </p>
              <p className="lead mb-0">
                <Link
                  to="/BlogPost3"
                  className="text-body-emphasis fw-bold text-decoration-none"
                >
                  <span className="textz">Continue reading</span>
                  <FaArrowRight className="textz" />
                </Link>
              </p>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary-emphasis">
                    Sports
                  </strong>
                  <h3 className="mb-0 size">
                    Virat Kohli: The King of Cricket
                  </h3>
                  <p className="card-text mb-auto top">
                    When we talk about modern-day cricketing legends, one name
                    that shines brightly is Virat Kohli.
                  </p>
                  <Link
                    to="/BlogPost5"
                    className="icon-link gap-1 icon-link-hover stretched-link text-decoration-none"
                  >
                    Continue reading
                    <FaArrowRight />
                  </Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    src={ViratImage}
                    alt=""
                    className=""
                    width="200"
                    height="261"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success-emphasis">
                    Technology
                  </strong>
                  <h3 className="mb-0 size">
                    How 5G Technology is Transforming Connectivity and
                    Communication
                  </h3>
                  <p className="mb-auto top">
                    The rollout of 5G technology marks a pivotal moment in....
                  </p>
                  <Link
                    to="/BlogPost6"
                    className="icon-link gap-1 icon-link-hover stretched-link text-decoration-none"
                  >
                    Continue reading
                    <FaArrowRight />
                  </Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    src={InternetImage}
                    alt=""
                    className=""
                    width="200"
                    height="261"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-md-8">
              <div>
                <h4 className="fst-italic">Our posts</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/BlogPost4"
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    >
                      <img src={AIImage} alt="" width="25%" height="50%" />
                      <div className="col-lg-8">
                        <h6 className="mb-0">
                          The Impact of Artificial Intelligence on Modern
                          Industries
                        </h6>
                        <small className="text-body-secondary">
                          July 07, 2024
                        </small>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/BlogPost3"
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    >
                      <img
                        src={TechImage}
                        alt="Technology"
                        width="25%"
                        height="50%"
                      />
                      <div className="col-lg-8">
                        <h6 className="mb-0">
                          The Technological Revolution: Shaping Our Future
                        </h6>
                        <small className="text-body-secondary">
                          July 06, 2024
                        </small>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/BlogPost1"
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    >
                      <img
                        src={Messi_Image}
                        alt="Lionel Messi"
                        width="25%"
                        height="96"
                      />
                      <div className="col-lg-8">
                        <h6 className="mb-0">
                          The Legacy of Lionel Messi: A Footballing Genius
                        </h6>
                        <small className="text-body-secondary">
                          July 05, 2024
                        </small>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/BlogPost2"
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    >
                      <img
                        src={Ronaldo_Image}
                        alt="Cristiano Ronaldo"
                        width="25%"
                        height="50%"
                      />
                      <div className="col-lg-8">
                        <h6 className="mb-0">
                          Cristiano Ronaldo: The Unstoppable Force of Football
                        </h6>
                        <small className="text-body-secondary">
                          July 04, 2024
                        </small>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/BlogPost5"
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    >
                      <img
                        src={Virat_Img}
                        alt="Cristiano Ronaldo"
                        width="25%"
                        height="50%"
                      />
                      <div className="col-lg-8">
                        <h6 className="mb-0">
                          Virat Kohli: The King of Cricket
                        </h6>
                        <small className="text-body-secondary">
                          July 08, 2024
                        </small>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="position-sticky" style={{ top: "2rem" }}>
                <div className="p-4 mb-3 bg-body-tertiary rounded">
                  <h4 className="fst-italic">About</h4>
                  <p className="mb-0">
                    Welcome to Bloggspedia, a modern and user-friendly platform
                    designed for writers, creators, and readers alike.
                  </p>
                </div>

                <div>
                  <h4 className="fst-italic">Recent posts</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        to="/BlogPost1"
                        className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      >
                        <img
                          src={MessiImage}
                          alt="Lionel Messi"
                          width="25%"
                          height="96%"
                        />
                        <div className="col-lg-8">
                          <h6 className="mb-0">
                            The Legacy of Lionel Messi: A Footballing Genius
                          </h6>
                          <small className="text-body-secondary">
                            July 05, 2024
                          </small>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                        to="/BlogPost2"
                      >
                        <img
                          src={RonaldoImage}
                          alt="Cristiano Ronaldo"
                          width="25%"
                          height="50%"
                        />
                        <div className="col-lg-8">
                          <h6 className="mb-0">
                            Cristiano Ronaldo: The Unstoppable Force of Football
                          </h6>
                          <small className="text-body-secondary">
                            July 04, 2024
                          </small>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                        to="/BlogPost5"
                      >
                        <img
                          src={ViratImage}
                          alt="Cristiano Ronaldo"
                          width="25%"
                          height="50%"
                        />
                        <div className="col-lg-8">
                          <h6 className="mb-0">
                            Cristiano Ronaldo: The Unstoppable Force of Football
                          </h6>
                          <small className="text-body-secondary">
                            July 04, 2024
                          </small>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
              >
                Bloggspedia
              </a>
              <span className="mb-3 mb-md-0 text-body-secondary">
                © 2024 Company, Inc
              </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-body-secondary" href="#">
                  <FaSquareXTwitter className="ico" />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-secondary" href="#">
                  <FaInstagram className="ico" />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-secondary" href="#">
                  <FaSquareFacebook className="ico" />
                </a>
              </li>
            </ul>
          </footer>
        </div>

        <script
          src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        ></script>
      </body>
    </>
  );
};

export default Home;
