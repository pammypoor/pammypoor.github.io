import React from "react";
import About from "../../components/about/about";
import Landing from "../../components/landing/landing";
import NavBar from "../../components/nav-bar/nav-bar";
import StickyScroll from "../../components/sticky-scroll/sticky-scroll";
import StickySocials from "../../components/sticky-socials/sticky-socials";

import "./Home.css";





class Home extends React.PureComponent {
    render() {
        return (
            <div className = "home-wrapper">
                <div className="nav-bar-wrapper">
                    <NavBar/>
                </div>
                <div className="sticky-wrapper">
                    <StickySocials/>
                    <StickyScroll/>
                </div>
                <div className="landing-wrapper">
                    <Landing/>
                </div>
                <div className="about-wrapper" id="about">
                    <About/>
                </div>
            </div>
        )
    }
}

export default Home;