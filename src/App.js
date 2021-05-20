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
          <button onClick={() => this.togglemenu()}>menu</button>
          <button>Who We Are</button>
          <button> What We Do</button>
          <button>How We Do It</button>
          <button>Boards & Committees</button>
        </div>
        <div className="right">
          <div>Invest the Cash, Spend the Crypto</div>
          <div>Make Rewards Better</div>
          <div>Your Rewards, Your Choice</div>
        </div>
      </div>
    );

    return (
      <div className="App">
        <div className="header">
          <div className="centerthetop">Invest the Cash, Spend the Crypto</div>

          <div className="left">
            <div
              id="logomynt"
              className="searchbanner"
              style={{
                backgroundImage: `url(${logomynt})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="right">
            <div className="rightlink">
              <button onClick={() => this.togglemenu()}>menu</button>
              <Link
                className="headerlink"
                to="welcome"
                spy={false}
                smooth={true}
              >
                Welcome
              </Link>
            </div>
            <div className="rightlink">
              <Link
                className="headerlink"
                to="product"
                spy={false}
                smooth={true}
              >
                Product
              </Link>
            </div>
            <div className="rightlink">
              <Link
                className="headerlink"
                to="footer"
                spy={false}
                smooth={true}
              >
                footer
              </Link>
            </div>
          </div>
        </div>
        {this.state.menu ? menuextended : null}

        <div
          id="product"
          className="searchbanner"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          id="welcome"
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

        <div className="mainlinks" id="footer">
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
