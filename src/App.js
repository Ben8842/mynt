import "./App.css";
import React, { Component } from "react";
import Background from "./img/MYNTone.jpeg";
import Backgroundtwo from "./img/MYNTtwo.jpeg";
import logomynt from "./img/logoM.PNG";
import { Link } from "react-scroll";
import Matching from "./components/match.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      who: false,
      what: false,
      why: false,
      how: false,
      motto: false,
      game: false,
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

  toggleContent(id) {
    console.log("hello toggle");
    console.log(id);
    if (id === 1) {
      this.setState({
        menu: true,
        who: true,
        what: false,
        why: false,
        how: false,
        motto: false,
        game: false,
      });
    } else if (id === 2) {
      this.setState({
        menu: true,
        who: false,
        what: true,
        why: false,
        how: false,
        motto: false,
        game: false,
      });
    } else if (id === 3) {
      this.setState({
        menu: true,
        who: false,
        what: false,
        why: true,
        how: false,
        motto: false,
        game: false,
      });
    } else if (id === 4) {
      this.setState({
        menu: true,
        who: false,
        what: false,
        why: false,
        how: true,
        motto: false,
        game: false,
      });
    } else if (id === 5) {
      this.setState({
        menu: true,
        who: false,
        what: false,
        why: false,
        how: false,
        motto: true,
        game: false,
      });
    } else if (id === 6) {
      this.setState({
        menu: false,
        who: false,
        what: false,
        why: false,
        how: false,
        motto: false,
        game: true,
      });
    }
  }

  render() {
    var { menu, who, what, why, how, motto, game } = this.state;
    const whoWeAre = (
      <div>
        PAYMYNT is a movile commerce and fintech company based in greater
        Boston.
      </div>
    );

    const whatWeDo = (
      <div className="wrappertogame">
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

    const mottoM = (
      <div>
        <div>Invest the Cash, Spend the Crypto</div>
        <div>Make Rewards Better</div>
        <div>Your Rewards, Your Choice</div>
      </div>
    );

    const gameM = (
      <div className="wrappertogame">
        <Matching sizeValue="4" />
      </div>
    );

    const menuextended = (
      <div className="header">
        <div className="left">
          <button id="1" onClick={(e) => this.togglemenu()}>
            menu
          </button>
          <button id="2" onClick={() => this.toggleContent(1)}>
            Who We Are
          </button>
          <button id="3" onClick={() => this.toggleContent(2)}>
            {" "}
            What We Do
          </button>
          <button id="4" onClick={() => this.toggleContent(3)}>
            {" "}
            Why We Do
          </button>
          <button id="5" onClick={() => this.toggleContent(4)}>
            How We Do It
          </button>
          <button id="6" onClick={() => this.toggleContent(5)}>
            Our Motto
          </button>
          <button id="6" onClick={() => this.toggleContent(6)}>
            MYNT GAME
          </button>
        </div>
        {who ? whoWeAre : null}
        {what ? whatWeDo : null}
        {why ? whyWeDo : null}
        {how ? howWeDo : null}
        {motto ? mottoM : null}
      </div>
    );

    const paybutton = (
      <button
        className="challenge"
        id="6"
        onClick={() => this.toggleContent(6)}
      >
        PAYMYNT Challenge
      </button>
    );

    const headerchange = (
      <div>
        <div className="overhead">
          <button>home</button>
          <button>PaymyntMatch</button>
        </div>
        <div className="header">
          <div className="centerthetop">Invest the Cash, Spend the Crypto</div>
          {game ? gameM : null}
          {game ? null : paybutton}

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
              <button className="menubutton" onClick={() => this.togglemenu()}>
                menu
              </button>
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
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div className="App">
        {game ? gameM : null}
        {game ? null : headerchange}
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
