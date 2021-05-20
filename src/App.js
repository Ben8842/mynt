import "./App.css";
import React, { Component } from "react";
import Background from "./img/MYNTone.jpeg";
import Backgroundtwo from "./img/MYNTtwo.jpeg";
import logomynt from "./img/logoM.PNG";
import { Link } from "react-scroll";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
  }

  togglemenu() {
    console.log("hello toggle");
    if (this.state.menu === true) {
      this.setState({ menu: false });
    } else if (this.state.menu === false) {
      this.setState({ menu: true });
    }
    console.log(this.state.menu);
  }

  render() {
    const menuextended = (
      <div className="header">
        <div className="left">
          <div> Home</div>
          <div>News & Events</div>
          <div> About Us</div>
          <div>Contact Us</div>
          <div>Boards & Committees</div>
        </div>
        <div className="right">
          <div>DATA & RESEARCH</div>
          <div>LEGISLATIVE FISCAL IMPACTS</div>
          <div>GEOGRAPHY & MAPPING</div>
          <div>PROGRAMS & SERVICES</div>
        </div>
      </div>
    );

    return (
      <div className="App">
        <div className="header">
          <div className="left"></div>
          <div className="right">
            <div className="rightlink">
              {" "}
              <Link className="headerlink" to="about" spy={false} smooth={true}>
                About
              </Link>
            </div>
            <div className="rightlink">EVENTS</div>
            <div className="rightlink">BOARDS & COMMITTEES</div>
          </div>
        </div>
        {this.state.menu ? menuextended : null}

        <div
          className="searchbanner"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h6>testing</h6>
        </div>
        <div
          className="searchbanner"
          style={{
            backgroundImage: `url(${Backgroundtwo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h6>testing</h6>
        </div>

        <div className="mainlinks">
          <h3>FOOTER test</h3>
        </div>
        <div className="footer">
          <div className="leftfooter">
            <h6>TESTING</h6>
            <h6>More TESTING</h6>
          </div>
          <div className="middlefooter">
            <h6>middle Test</h6>
            <h6>middle Test</h6>
            <h6>middle Test</h6>
            <h6>middle Test</h6>
            <h6>middle Test</h6>
          </div>
          <div className="rightfooter">
            <h6>Right TESTING</h6>
            <h6>Right TESTING</h6>
            <h6>Right TESTING</h6>
            <h6>Right TESTING</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
