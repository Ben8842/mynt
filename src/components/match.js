import "../App.css";
import React, { Component } from "react";

var imageback = require("../img/matching/matching1.PNG").default;

class Matching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      who: false,
      what: false,
      why: false,
      how: false,
      motto: false,
    };

    function shuffle(arry) {
      arry.sort(() => Math.random() - 0.5);
    }
    const content00 = (
      <div>
        Paymynt Visa® Card Your Paymynt Visa® Card can be used everywhere Visa®
        cards are accepted and is equipped with EMV chip protection.
      </div>
    );

    const content01 = (
      <div>
        <div>PAYMYNT</div>
      </div>
    );

    const content02 = (
      <div>
        <div className="minibold">Anonymyzing your data</div>
        Paymynt anonymizes your data and works directly with your financial
        institution to verify cashback.
      </div>
    );

    const content03 = (
      <div>
        <div className="minibold">Bank-level Encryption</div> Paymynt uses
        bank–level 256–bit encryption meaning your information is secure every
        step of the way.
      </div>
    );

    const content04 = (
      <div>
        <div className="minibold">2-factor Authentication</div>
        Paymynt takes your privacy and security a step further by utilizing
        2–factor authentication when linking your cards.
      </div>
    );

    const content05 = (
      <div>
        <div className="minibold">Follow PAYMYNT on Twitter</div>
        Follow us @<a href="https://twitter.com/paymyntgroup/">paymyntgroup</a>
      </div>
    );

    const content06 = (
      <div>
        <div className="minibold">MICROSOFT</div>
        MICROSOFT is one of our many brand partners. Learn more here @
        <a href="https://paymynt.money/#brands">OUR BRAND PARTNERS</a>
      </div>
    );

    const content07 = (
      <div>
        <div className="minibold">TARGET</div>
        TARGET is one of our many brand partners. Learn more here @
        <a href="https://paymynt.money/#brands"> OUR BRAND PARTNERS </a>
      </div>
    );

    const content08 = (
      <div>
        <div className="minibold">No FEES on all rewards</div>
        Since we’re built on the Stellar Blockchain, transactions are only a
        fraction of a penny. Which means you keep MORE of your rewards.
      </div>
    );
    var imgArr = [
      [require("../img/matching/matching0.PNG").default, content00],
      // require("../img/matching/matching1.PNG").default,
      [require("../img/matching/matching2.PNG").default, content02],
      [require("../img/matching/matching3.PNG").default, content03],
      [require("../img/matching/matching4.PNG").default, content04],
      [require("../img/matching/matching5.PNG").default, content05],
      [require("../img/matching/matching6.PNG").default, content06],
      [require("../img/matching/matching7.PNG").default, content07],
      [require("../img/matching/matching8.PNG").default, content08],
      //  require("../img/matching/matching9.PNG").default,
      //  require("../img/matching/matching10.PNG").default,
      //  require("../img/matching/matching11.PNG").default,
      //  require("../img/matching/matching12.PNG").default,
      [require("../img/matching/matching0.PNG").default, content00],
      //  require("../img/matching/matching1.PNG").default,
      [require("../img/matching/matching2.PNG").default, content02],
      [require("../img/matching/matching3.PNG").default, content03],
      [require("../img/matching/matching4.PNG").default, content04],
      [require("../img/matching/matching5.PNG").default, content05],
      [require("../img/matching/matching6.PNG").default, content06],
      [require("../img/matching/matching7.PNG").default, content07],
      [require("../img/matching/matching8.PNG").default, content08],
      /*   require("../img/matching/matching9.PNG").default,
            require("../img/matching/matching10.PNG").default,
            require("../img/matching/matching11.PNG").default,
            require("../img/matching/matching12.PNG").default,
            require("../img/matching/matching0.PNG").default,
            require("../img/matching/matching1.PNG").default,
            require("../img/matching/matching2.PNG").default,
            require("../img/matching/matching3.PNG").default,
            require("../img/matching/matching4.PNG").default,
            require("../img/matching/matching5.PNG").default,
            require("../img/matching/matching6.PNG").default,
            require("../img/matching/matching7.PNG").default,
            require("../img/matching/matching8.PNG").default,
            require("../img/matching/matching9.PNG").default,
            require("../img/matching/matching10.PNG").default,
            require("../img/matching/matching11.PNG").default,
            require("../img/matching/matching12.PNG").default,*/
    ];

    shuffle(imgArr);
    console.log(imgArr);

    var sizing = this.props.sizeValue;

    var contentArray = [
      content01,
      content02,
      content03,
      content04,
      content05,
      content06,
      content07,
      content08,
      content01,
      content02,
      content03,
      content04,
      content05,
      content06,
      content07,
      content08,
    ];

    this.state = {
      showInfo: false,
      xCoor: null,
      yCoor: null,
      size: 0,
      choicesX: [],
      choicesY: [],
      imgArrS: imgArr,
      puzStep: 0,
      sizes: sizing,
      doubleClick: false,

      foundH: [],
      foundHV: [],
      score: 50,
      isMatch: false,
      isWin: false,
      numOfMatch: 0,
      /* contentArray: [
            { content01 },
            { content02 },
            { content03 },
            { content04 },
            { content05 },
            { content06 },
            { content07 },
            { content08 },
          ],*/
      carray: contentArray,
      content: null,
    };
  }

  resethome() {
    const content00 = (
      <div>
        Paymynt Visa® Card Your Paymynt Visa® Card can be used everywhere Visa®
        cards are accepted and is equipped with EMV chip protection.
      </div>
    );

    const content01 = (
      <div>
        <div>PAYMYNT</div>
      </div>
    );

    const content02 = (
      <div>
        <div className="minibold">Anonymyzing your data</div>
        Paymynt anonymizes your data and works directly with your financial
        institution to verify cashback.
      </div>
    );

    const content03 = (
      <div>
        <div className="minibold">Bank-level Encryption</div> Paymynt uses
        bank–level 256–bit encryption meaning your information is secure every
        step of the way.
      </div>
    );

    const content04 = (
      <div>
        <div className="minibold">2-factor Authentication</div>
        Paymynt takes your privacy and security a step further by utilizing
        2–factor authentication when linking your cards.
      </div>
    );

    const content05 = (
      <div>
        <div className="minibold">Follow PAYMYNT on Twitter</div>
        Follow us @<a href="https://twitter.com/paymyntgroup/">paymyntgroup</a>
      </div>
    );

    const content06 = (
      <div>
        <div className="minibold">MICROSOFT</div>
        MICROSOFT is one of our many brand partners. Learn more here @
        <a href="https://paymynt.money/#brands">OUR BRAND PARTNERS</a>
      </div>
    );

    const content07 = (
      <div>
        <div className="minibold">TARGET</div>
        TARGET is one of our many brand partners. Learn more here @
        <a href="https://paymynt.money/#brands"> OUR BRAND PARTNERS </a>
      </div>
    );

    const content08 = (
      <div>
        <div className="minibold">No FEES on all rewards</div>
        Since we’re built on the Stellar Blockchain, transactions are only a
        fraction of a penny. Which means you keep MORE of your rewards.
      </div>
    );
    var imgArr = [
      [require("../img/matching/matching0.PNG").default, content00],
      // require("../img/matching/matching1.PNG").default,
      [require("../img/matching/matching2.PNG").default, content02],
      [require("../img/matching/matching3.PNG").default, content03],
      [require("../img/matching/matching4.PNG").default, content04],
      [require("../img/matching/matching5.PNG").default, content05],
      [require("../img/matching/matching6.PNG").default, content06],
      [require("../img/matching/matching7.PNG").default, content07],
      [require("../img/matching/matching8.PNG").default, content08],
      //  require("../img/matching/matching9.PNG").default,
      //  require("../img/matching/matching10.PNG").default,
      //  require("../img/matching/matching11.PNG").default,
      //  require("../img/matching/matching12.PNG").default,
      [require("../img/matching/matching0.PNG").default, content00],
      //  require("../img/matching/matching1.PNG").default,
      [require("../img/matching/matching2.PNG").default, content02],
      [require("../img/matching/matching3.PNG").default, content03],
      [require("../img/matching/matching4.PNG").default, content04],
      [require("../img/matching/matching5.PNG").default, content05],
      [require("../img/matching/matching6.PNG").default, content06],
      [require("../img/matching/matching7.PNG").default, content07],
      [require("../img/matching/matching8.PNG").default, content08],
      /*   require("../img/matching/matching9.PNG").default,
            require("../img/matching/matching10.PNG").default,
            require("../img/matching/matching11.PNG").default,
            require("../img/matching/matching12.PNG").default,
            require("../img/matching/matching0.PNG").default,
            require("../img/matching/matching1.PNG").default,
            require("../img/matching/matching2.PNG").default,
            require("../img/matching/matching3.PNG").default,
            require("../img/matching/matching4.PNG").default,
            require("../img/matching/matching5.PNG").default,
            require("../img/matching/matching6.PNG").default,
            require("../img/matching/matching7.PNG").default,
            require("../img/matching/matching8.PNG").default,
            require("../img/matching/matching9.PNG").default,
            require("../img/matching/matching10.PNG").default,
            require("../img/matching/matching11.PNG").default,
            require("../img/matching/matching12.PNG").default,*/
    ];
    function shuffle(arry) {
      arry.sort(() => Math.random() - 0.5);
    }
    shuffle(imgArr);

    var sizing = this.props.sizeValue;

    this.setState((state) => {
      return {
        showInfo: false,
        xCoor: null,
        yCoor: null,
        size: 0,
        choicesX: [],
        choicesY: [],

        imgArrS: imgArr,
        puzStep: 0,

        sizes: sizing,

        foundH: [],
        foundHV: [],
        doubleClick: false,
        isMatch: false,
        score: 50,
        isWin: false,
        numOfMatch: 0,
        indexChoice: 0,
        content: null,
        contentImg: imageback,
      };
    });
  }

  clickTime(x, y, superIndex, level) {
    var {
      foundH,
      choicesX,
      choicesY,
      puzStep,
      imgArrS,
      doubleClick,
      score,
      isMatch,
      carray,
    } = this.state;
    if (level === 1) {
      console.log("whoa you clicked this already!");
      this.setState((state) => {
        return {
          doubleClick: true,
          score: this.state.score - 1,
          isMatch: false,
        };
      });
    } else {
      this.setState((state) => {
        console.log(puzStep);
        if (puzStep === 0) {
          console.log("PICK ONE MORE AND TRY TO MATCH!");
          const holderX = [...state.choicesX, x];
          const holderY = [...state.choicesY, y];
          return {
            xCoor: x,
            yCoor: y,
            puzStep: this.state.puzStep + 1,
            choicesX: holderX,
            choicesY: holderY,
            score: this.state.score - 1,
            isMatch: false,
            doubleClick: false,
            content: imgArrS[superIndex][1],
            contentImg: imgArrS[superIndex][0],
          };
        }
        if (puzStep === 1) {
          console.log(puzStep);
          if (
            imgArrS[superIndex][0] ===
            imgArrS[
              choicesY[choicesY.length - 1] * this.props.sizeValue +
                choicesX[choicesX.length - 1]
            ][0]
          ) {
            console.log("MATCH!");
            const holderX = [...state.choicesX, x];
            const holderY = [...state.choicesY, y];
            return {
              xCoor: x,
              yCoor: y,
              puzStep: 0,
              choicesX: holderX,
              choicesY: holderY,
              score: this.state.score + 10,
              isMatch: true,
              doubleClick: false,
              numOfMatch: this.state.numOfMatch + 1,
              content: imgArrS[superIndex][1],
              contentImg: imgArrS[superIndex][0],
            };
          } else {
            console.log("NO MATCH!");
            const holderX = [...state.choicesX, x];
            const holderY = [...state.choicesY, y];
            console.log(holderX);
            console.log(holderY);
            return {
              xCoor: x,
              yCoor: y,
              puzStep: 0,
              choicesX: holderX,
              choicesY: holderY,
              score: this.state.score - 1,
              doubleClick: false,
              content: imgArrS[superIndex][1],
              contentImg: imgArrS[superIndex][0],
            };
          }
        }
      });
      if (
        puzStep === 1 &&
        imgArrS[superIndex][0] !==
          imgArrS[
            choicesY[choicesY.length - 1] * this.props.sizeValue +
              choicesX[choicesX.length - 1]
          ][0]
      ) {
        setTimeout(() => this.noMatch(), 250);
      }
    }
  }
  noMatch() {
    var { foundH, choicesX, choicesY, puzStep, imgArrS } = this.state;
    console.log("before" + puzStep);

    choicesX.pop();
    choicesY.pop();
    choicesX.pop();
    choicesY.pop();
    console.log("popping one now");
  }

  renderSquare(x, y) {
    console.log(level);
    var { choicesX, choicesY, sizes, imgArrS } = this.state;
    var run = x;
    var rise = y;
    //var sizes = this.props.sizeValue;
    var level = 0;
    var superIndex = y * sizes + x;
    var z;
    for (z = 0; z < choicesX.length; z++) {
      if (choicesX[z] === x && choicesY[z] === y) {
        level = 1;
      }
    }

    if (level === 0) {
      var findex = (x * sizes + y) % 6;
      return (
        <button
          id="squareHidden"
          onClick={() => this.clickTime(x, y, superIndex, level)}
        >
          <img src={imageback} alt="mystery"></img>
        </button>
      );
    } else if (level === 1) {
      return (
        <button
          id="squareHidden"
          onClick={() => this.clickTime(x, y, superIndex, level)}
        >
          <img src={imgArrS[superIndex][0]} alt="mystery"></img>
        </button>
      );
    }
  }

  render() {
    var {
      foundH,
      doubleClick,
      score,
      isMatch,
      numOfMatch,
      indexChoice,
      carray,
      superIndex,
      content,
      imgArrS,
      contentImg,
    } = this.state;
    console.log(foundH);
    const boardA = this.props.sizeValue;

    const elementS = [];
    const elementZ = [];

    var x;
    var y;

    for (y = 0; y < boardA; y++) {
      for (x = 0; x < boardA; x++) {
        elementS.push(<span>{this.renderSquare(x, boardA - y - 1)}</span>);
      }
      elementZ.push(
        <div className="newLine">
          <span>
            {elementS.map((value, index) => {
              return <span key={index}>{value}</span>;
            })}
          </span>
        </div>
      );
      for (x = 0; x < boardA; x++) {
        elementS.pop();
      }
    }

    const gridDisplay = (
      <div>
        {elementZ.map((value, index) => {
          return <span key={index}>{value}</span>;
        })}
      </div>
    );

    const matchCelebrate = (
      <div id="instructionGreen">Great Match! + 10 points !</div>
    );

    const placeholder = (
      <div id="instructionPlace">
        <div>&nbsp;</div>
      </div>
    );

    const instructions = (
      <div id="instruction">
        PAYMYNT Challenge
        <div id="score">
          SCORE = {score} &nbsp; &nbsp; &nbsp;{" "}
          <button type="button" class="button" onClick={() => this.resethome()}>
            RESET
          </button>
          {isMatch ? matchCelebrate : placeholder}
        </div>
      </div>
    );

    const instructionsDouble = (
      <div id="instructionRed">
        Oops! try a different one!
        <div id="score">
          SCORE = {score} &nbsp; &nbsp; &nbsp;{" "}
          <button type="button" class="button" onClick={() => this.resethome()}>
            RESET
          </button>{" "}
          {isMatch ? matchCelebrate : placeholder}
        </div>
      </div>
    );

    const instructionsWin = (
      <div id="instruction">
        You matched all of the icons. Great!
        <div id="score">Your final score was {score}. </div>
      </div>
    );
    // console.log(carray[superIndex]);

    const displayCurrent = (
      <div className="icondetails">
        <button id="squareHiddenB">
          <img src={contentImg} alt="mystery"></img>
        </button>
        {content}
      </div>
    );

    const instructionTest = (
      <div>
        <div className="holdspace">Match the icons below and score points</div>
      </div>
    );

    return (
      <div>
        {doubleClick && numOfMatch !== 8 ? instructionsDouble : instructions}
        {numOfMatch === 8 ? instructionsWin : null}

        <div id="entireThing">
          {contentImg !== undefined ? displayCurrent : instructionTest}
          <div id="info">{gridDisplay}</div>
        </div>
      </div>
    );
  }
}

export default Matching;
