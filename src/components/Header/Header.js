import React from "react";
import { GoogleLogin } from "react-google-login";
import { Link } from "@reach/router";
import "../home.css";
import HeroSVG from "../svgs/Hero";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithubAlt,
//   faFacebook,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";

import {
  loginUser,
  useUserDispatch,
  useUserState,
} from "../../Context/UserContext";

const Header = function Header() {
  const userDispatch = useUserDispatch();
  const responseGoogle = (response) => {
    loginUser(userDispatch, undefined, response);
  };

  const { isAuthenticated } = useUserState();

  return (
    <div className="super">
      <div className="banner">
        <div className="banner-text">
          <h1>
            {" "}
            We're always in the <br /> mood for food
          </h1>
          <p>
          Track your calories with our poweful text search and image search and stay fit!
          </p>
          <Link to="/search" class="btn">
            Search Food{" "}
          </Link>
          {!isAuthenticated && (
            <GoogleLogin
              className="login"
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          )}
        </div>
        <div>
          <HeroSVG width={"40rem"} />
        </div>
      </div>

      {/* <div className="social-media">
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon width={"24px"} className="icon" icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="https://github.com/hitgo00/2-Foodpedia">
              <FontAwesomeIcon className="icon" icon={faGithubAlt} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;
