import React from "react";

import "./Home.css";

import Header from "../../components/Header/Header";
import Skills from "../../components/Skills/Skills";

class Home extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className = "home-wrapper">
                <div  className = "home-header">
                    {<Header/>}
                </div>
                <div className = "about-wrapper">
                    <div className="skills-wrapper">
                        {<Skills/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;