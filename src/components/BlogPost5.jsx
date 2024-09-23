import React from "react";
import { Link } from "react-router-dom";
import Virat_Img from "../assets/vieighteen.png";
import Messi_Image from "../assets/messi2.jpg";
import AIImage from "../assets/ai-image.jpg";
import InternetImg from "../assets/5ginternate.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const BlogPost5 = () => {
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
          <h1 className="post-title">Virat Kohli: The King of Cricket</h1>
          <hr className="nav-underline" />
          <div className="date">
            Jul 08, 2024 09:30 PM IST
            <div className="share">
              <FaSquareFacebook className="ico" />
              <FaSquareXTwitter className="ico" />
            </div>
          </div>
          <hr className="nav-underline mb-2.5" />
          <img src={Virat_Img} alt="" width="100%" className="post-image" />
          <p className="para">
            When we talk about modern-day cricketing legends, one name that
            shines brightly is Virat Kohli. Known for his unparalleled
            consistency, aggressive batting style, and exceptional leadership,
            Kohli has rightfully earned the title of "King of Cricket." Let's
            delve into the remarkable journey of this cricketing maestro and
            explore why he stands tall as a true legend of the game.
          </p>
          <br />
          <p className="para">
            Virat Kohli's cricketing journey began in the streets of Delhi,
            where he honed his skills and nurtured his passion for the game. It
            didn't take long for Kohli to make a mark in the cricketing world
            with his impressive performances at the junior level. His
            determination, focus, and hunger for success set him apart from his
            peers from an early age.
          </p>
          <br />

          <p className="para">
            Kohli's talent and hard work paid off when he made his international
            debut for India in 2008. His aggressive batting style and ability to
            chase down targets under pressure soon became his trademark. Kohli's
            rise to prominence was meteoric, and he quickly established himself
            as one of the finest batsmen in the world across all formats of the
            game.
          </p>
          <br />
          <p className="para">
            What sets Virat Kohli apart from his contemporaries is his sheer
            consistency and hunger for runs. Kohli has shattered numerous
            records and set new benchmarks in the world of cricket. From scoring
            centuries at an unprecedented pace to leading India to memorable
            victories, Kohli's list of achievements is nothing short of
            extraordinary. <br />
            <br />
            Kohli's insatiable appetite for runs has seen him break records held
            by cricketing giants of the past. His ability to chase down targets,
            anchor innings, and accelerate when needed has made him a nightmare
            for opposition bowlers. Kohli's passion for the game is evident in
            every stroke he plays and every match he captains.
          </p>
          <br />

          <p className="para">
            In 2017, Virat Kohli took over the reins of the Indian cricket team
            as the captain in all formats. His leadership skills, tactical
            acumen, and never-say-die attitude have earned him respect and
            admiration from players and fans alike. Under Kohli's captaincy,
            India has scaled new heights and achieved remarkable success on the
            international stage. <br />
            <br />
            Kohli's ability to lead from the front, motivate his teammates, and
            make bold decisions under pressure is a testament to his leadership
            qualities. Whether it's setting aggressive fields, rotating bowlers
            cleverly, or marshaling the batting lineup, Kohli's captaincy has
            injected a new sense of belief and purpose into the team.
          </p>
          <br />

          <p className="para">
            As Virat Kohli continues to mesmerize cricketing aficionados with
            his sublime batting exploits and inspirational leadership, his
            legacy in the annals of cricket is already secure. The King of
            Cricket has transcended boundaries, broken barriers, and redefined
            the art of batting with his masterful stroke play and unwavering
            determination. <br />
            <br />
            With numerous accolades, records, and milestones to his name, Virat
            Kohli's journey is a testament to hard work, passion, and unwavering
            commitment to excellence. As the King of Cricket, Kohli's reign
            shows no signs of abating, and his impact on the game will be felt
            for generations to come.
          </p>
          <br />

          <hr className="nav-underline" />
          <h2 className="recomend">Our recommended Blogs</h2>

          <div className="blog-cards">
            <div className="card">
              <img src={Messi_Image} className="card-imag" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/BlogPost1" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>

            <div className="card">
              <img src={AIImage} className="card-imag" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/BlogPost4" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>

            <div className="card">
              <img src={InternetImg} className="card-imag" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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

export default BlogPost5;
