import "./App.css";
import React, { Component } from "react";
import Background from "./img/MYNTone.jpeg";
import logomynt from "./img/logoM.PNG";

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
            <div className="rightlink">ABOUT US</div>
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
          <h6>
            Providing independent research, analysis and resources to facilitate
            informed policy decisions and administration of services
          </h6>
        </div>

        <div className="mainlinks">
          <h3>POPULAR SERVICES AND LINKS</h3>
        </div>
        <div className="footer">
          <div className="leftfooter">
            <h6>South Carolina</h6>
            <h6>Revenue and Fiscal Affairs Office</h6>
            <div
              className="logodark"
              style={{
                backgroundImage: `url(${logomynt})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="middlefooter">
            <h6>Privacy Statement</h6>
            <h6>FOIA</h6>
            <h6>Disclosures and Reporting</h6>
            <h6>Report Fraud</h6>
            <h6>Accessibility</h6>
            <h6>Contact Us</h6>
          </div>
          <div className="rightfooter">
            <h6>MAIN OFFICE</h6>
            <h6>GEODETIC SURVEY SECTION</h6>
            <h6>Disclosures and Reporting</h6>
            <h6>HEALTH AND DEMOGRAPHICS DIVISION</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
