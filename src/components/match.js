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

    var imgArr = [
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
      require("../img/matching/matching12.PNG").default,
    ];

    shuffle(imgArr);
  }
  render() {
    return (
      <div>
        <div>Hello Matching!</div>
      </div>
    );
  }
}

export default Matching;
