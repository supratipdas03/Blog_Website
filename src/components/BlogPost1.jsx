import React from "react";
import { Link } from "react-router-dom";
import MessiImage from "../assets/messi2.jpg";
import Ronaldo_Image from "../assets/ronaldo-image.jpg";
import InternetImg from "../assets/5ginternate.jpg";
import AIImage from "../assets/ai-image.jpg";
import TechImage from "../assets/tech.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const BlogPost1 = () => {
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
              <a className="nav-item nav-link link-body-emphasis" href="#">
                Technology
              </a>
              <a className="nav-item nav-link link-body-emphasis" href="#">
                Lifestyle
              </a>
              <a className="nav-item nav-link link-body-emphasis" href="#">
                Fitness
              </a>
              <a className="nav-item nav-link link-body-emphasis" href="#">
                Sports
              </a>
              <a className="nav-item nav-link link-body-emphasis" href="#">
                News
              </a>
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
          <h1 className="post-title">
            The Legacy of Lionel Messi: A Footballing Genius
          </h1>
          <hr className="nav-underline" />
          <div className="date">
            Jul 05, 2024 11:27 AM IST
            <div className="share">
              <FaSquareFacebook className="ico" />
              <FaSquareXTwitter className="ico" />
            </div>
          </div>
          <hr className="nav-underline mb-2.5" />
          <img src={MessiImage} alt="" width="100%" className="post-image" />
          <p className="para">
            Lionel Messi is a name that resonates with football fans across the
            globe. His remarkable journey from a young boy in Rosario,
            Argentina, to becoming one of the most iconic figures in the history
            of the sport is a testament to his unparalleled talent and work
            ethic.
          </p>
          <br />
          <p className="para">
            From his early days at Barcelona's La Masia academy to his rise to
            prominence as the linchpin of the first team, Lionel Messi has
            consistently defied the odds and redefined what it means to be a
            footballer. His agility, precise dribbling, and exceptional
            goal-scoring ability have earned him numerous accolades and a place
            in the hearts of millions of fans.
          </p>
          <br />
          <p className="para">
            Messi's impact extends far beyond the pitch. He is a symbol of
            perseverance, dedication, and humility, traits that have endeared
            him to people of all ages. On the international stage, Messi's
            leadership as the captain of the Argentina national team has been an
            inspiration, despite the challenges and expectations that come with
            representing his country.
          </p>
          <br />
          <p className="para">
            In 2021, Lionel Messi made a historic move to Paris Saint-Germain
            after an illustrious career at FC Barcelona, leaving an indelible
            mark on both clubs. His continued success at the highest level
            serves as a testament to his unwavering passion for the game.
          </p>
          <br />
          <p className="para">
            As we reflect on the legacy of Lionel Messi, we celebrate a player
            who transcends the boundaries of sport and embodies the true spirit
            of football. His extraordinary talent and sportsmanship have left an
            indelible mark on the beautiful game, ensuring that his name will be
            revered for generations to come.
          </p>
          <br />
          <p className="para">
            Whether it’s the magic of his left foot or the joy he brings to
            spectators around the world, Lionel Messi's impact on football
            cannot be overstated. He remains a living legend, a source of
            inspiration, and a shining example of what it means to pursue
            greatness with integrity and grace.
          </p>
          <br />
          <hr className="nav-underline" />
          <h2 className="recomend">Our recommended Blogs</h2>

          <div className="blog-cards">
            <div className="card">
              <img src={Ronaldo_Image} className="card-imag" alt="" />
              <div className="card-body">
                <h5 className="card-title">
                  Cristiano Ronaldo: The Unstoppable Force of Football
                </h5>
                <p className="card-text">
                  Cristiano Ronaldo is a name synonymous with excellence in the
                  world of football. His extraordinary....
                </p>
                <Link to="/BlogPost2" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>

            <div className="card">
              <img src={AIImage} className="card-imag" alt="" />
              <div className="card-body">
                <h5 className="card-title">
                  The Impact of Artificial Intelligence on Modern Industries
                </h5>
                <p className="card-text">
                  Artificial Intelligence has emerged as a transformative
                  technology across various industries, revolutionizing
                </p>
                <Link to="/BlogPost4" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>

            <div className="card">
              <img src={InternetImg} className="card-imag" alt="" />
              <div className="card-body">
                <h5 className="card-title">
                  How 5G Technology is Transforming Connectivity and
                  Communication
                </h5>
                <p className="card-text">
                  The rollout of 5G technology marks a pivotal moment in the
                  evolution of connectivity and communication.
                </p>
                <Link to="/BlogPost6" className="btn btn-primary">
                  Read More
                </Link>
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

export default BlogPost1;
