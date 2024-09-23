import React from "react";
import { Link } from "react-router-dom";
import RonaldoIamge from "../assets/ronaldo-image.jpg";
import Messi_Image from "../assets/messi2.jpg";
import AIImage from "../assets/ai-image.jpg";
import InternetImg from "../assets/5ginternate.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const BlogPost2 = () => {
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
            Cristiano Ronaldo: The Unstoppable Force of Football
          </h1>
          <hr className="nav-underline" />
          <div className="date">
            Jul 04, 2024 10:00 AM IST
            <div className="share">
              <FaSquareFacebook className="ico" />
              <FaSquareXTwitter className="ico" />
            </div>
          </div>
          <hr className="nav-underline mb-2.5" />
          <img src={RonaldoIamge} alt="" width="100%" className="post-image" />
          <p className="para">
            Cristiano Ronaldo is a name synonymous with excellence in the world
            of football. His extraordinary skill, unwavering determination, and
            insatiable hunger for success have propelled him to legendary
            status, making him one of the greatest players to ever grace the
            pitch.
          </p>
          <br />

          <p className="para">
            From his beginnings as a young talent in Madeira, Portugal, to
            becoming a global icon, Ronaldo's journey has been nothing short of
            remarkable. His incredible athleticism, lightning-fast speed, and
            pinpoint accuracy make him a force to be reckoned with on the field.
          </p>
          <br />

          <p className="para">
            Ronaldo's prolific goal-scoring ability is unrivaled. He has
            shattered records, leaving defenders and goalkeepers in despair with
            his powerful strikes and signature leaping headers. His ability to
            rise to the occasion in crucial moments has earned him a reputation
            as a big-game player, capable of changing the course of a match
            single-handedly.
          </p>
          <br />

          <p className="para">
            Beyond his remarkable skills, Ronaldo is also an embodiment of
            perseverance and resilience. He has faced numerous challenges and
            setbacks throughout his career, but it is his unwavering
            determination to bounce back stronger that sets him apart. Ronaldo's
            relentless work ethic and commitment to self-improvement have
            allowed him to maintain an incredibly high level of performance for
            over a decade.
          </p>
          <br />

          <p className="para">
            Off the pitch, Ronaldo's impact extends far beyond football. His
            charismatic personality, philanthropy, and dedication to making a
            difference in the lives of others have earned him admiration and
            respect worldwide. He has used his platform to raise awareness for
            charitable causes, demonstrating that his impact reaches beyond the
            boundaries of the beautiful game.
          </p>
          <br />

          <p className="para">
            In 2018, Ronaldo made a high-profile move to Juventus, showcasing
            his versatility and adaptability by excelling in different leagues.
            Despite achieving numerous individual and team honors throughout his
            career, Ronaldo's hunger for success remains insatiable. He
            continues to set new goals and push the boundaries of what is
            achievable on the football field.
          </p>
          <br />

          <p className="para">
            Cristiano Ronaldo's legacy is secure, leaving an indelible mark on
            the sport he loves. His impact will continue to be felt long after
            he hangs up his boots. We are fortunate to witness the greatness of
            Cristiano Ronaldo, an unstoppable force whose influence will be
            remembered for generations to come.
          </p>
          <br />
          <hr className="nav-underline" />
          <h2 className="recomend">Our recommended Blogs</h2>

          <div className="blog-cards">
            <div className="card">
              <img src={Messi_Image} className="card-imag" alt="" />
              <div className="card-body">
                <h5 className="card-title">
                  The Legacy of Lionel Messi: A Footballing Genius
                </h5>
                <p className="card-text">
                  Lionel Messi is a name that resonates with football fans
                  across the globe. His remarkable journey from a young boy in
                  Rosario, Argentina, to....
                </p>
                <Link to="/BlogPost1" className="btn btn-primary">
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

export default BlogPost2;
