import React from 'react'
import { GoogleLogin } from "react-google-login";
import index from "../images/banner.png";
import bg from "../images/bg.png"
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithubAlt,faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons';

const responseGoogle = (response) => {
    console.log(response);
};

const Header =  function Header() {
    return (
        <div className="super">
        <div className="banner">
        <div className="banner-text">
            <h1> We're always in the <br/> mood for food</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ab minima 
                excepturi sint libero temporibus numquam aspernatur deleniti quia. 
                Voluptas architecto incidunt, quaerat dolorum vel.</p>
            <a href="/search" class="btn">Search Food </a>
            <GoogleLogin className="login"
            clientId="850634064633-r2q201m4thuruahn6fc82nl21o0b14dl.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />
        </div>
            <div className="banner-img">
                <img src={index} alt="logo"/>
            </div>
        </div>
    
        <div className="social-media">
        <ul>
            <li><a href="#"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
            <li><a href="#"><FontAwesomeIcon className="icon" icon={faFacebook} /></a></li>
            <li><a href="https://github.com/hitgo00/2-Foodpedia"><FontAwesomeIcon className="icon" icon={faGithubAlt} /></a></li>
        </ul>
    </div>
    <div className="bg"><img src={bg} alt=""/></div>
    </div>
    )
}

export default Header;