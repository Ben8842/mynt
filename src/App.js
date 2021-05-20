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

  toggleContent() {
    console.log("hello toggle");
  }

  render() {
    const whoWeAre = (
      <div>
        PAYMYNT is a movile commerce and fintech company based in greater
        Boston.
      </div>
    );

    const whatWeDo = (
      <div>
        PAYMYNT provides consumers with a better way to Shop, Earn, Spend and
        Invest.
      </div>
    );

    const whyWeDo = (
      <div>
        PAYMYNT is developing an unified mobile commerce platform to
        assist/help/guide/ the underserved and underbanked improve their
        financial well-being. Currently, 55 million Americans (15% of the U.S
        population) live paycheck to paycheck and are unable to utilize
        traditional banking services.
      </div>
    );

    const howWeDo = (
      <div>
        The PAYMYNT platform has many unique features beginnning with URSA, a
        patent-pending univerals rewards shopping app that earns consumers
        "Found Money" refunds which comes in the form of cash back and MYNT
        crypto rewards for shopping online or in-store. The "Found Money'
        consumers earn, can seamlessly be invested into INVESTMYNT's high yield
        micro-investing products. MYNT's stable token rewards have many uses,
        such as a medium of exchange and a store of value. MYNT's can also be
        transferred ontio the MYNT Bankless Smart Card and spent wherever Visa
        is accepted or held on as a cold storage wallet. To further our
        initiatives, PAYMYNT will be introducting the PAYMYNT BankCard which
        members can easily entroll by using their Found Money as their opening
        balance and can simply transfer their cash back balances each time they
        shop and earn. "
      </div>
    );

    const motto = (
      <div>
        <div>Invest the Cash, Spend the Crypto</div>
        <div>Make Rewards Better</div>
        <div>Your Rewards, Your Choice</div>
      </div>
    );

    const menuextended = (
      <div className="header">
        <div className="left">
          <button onClick={() => this.togglemenu()}>menu</button>
          <button>Who We Are</button>
          <button> What We Do</button>
          <button> Why We Do</button>
          <button>How We Do It</button>
          <button>Our Motto</button>
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
