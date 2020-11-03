import React, { Component } from "react";
import "./Script.css";

class Script extends Component {
  render() {
    return (
      <div className="pic describtion">
        {/********* Start Section Contain Image *********/}
        <div className="image"></div>
        {/********* End Section Contain Image *********/}

        {/********* Start Section Contain Public Des *********/}
        <div className="publicDescribtion space">
          <h1>MSP</h1>
          <h6>
            Technical professional Organization interested in technology and
            programming <br /> and working towards technological illiteracy And
            it has many branches in different <br /> universities Ain Shams,
            Cairo, Al-Azhar, Mansoura, Alexandria, and Kafr El-Sheikh
          </h6>
        </div>
        {/********* End Section Contain Public Des *********/}

        {/********* Start Section Contain Al-azher Des *********/}
        <div className="row responsive">
          <div className="icon space col-md-1 col-12 "></div>
          <div className="icon space col-md-4 col-12 ">
            <img src="../MSP logo.png" alt="This is Picture" />
          </div>
          <div className="script space col-md-7 col-12">
            <p>
              <span>MSP Tech Club at Al-Azher</span> is a student community
              program that promotes advanced technology through education ,
              practice and innovation . It also privides students with both
              Technical and non-technical sessions needed which is packing their
              lives with high level of skills and support things are careers
              with opportunities <span> Our Mission :</span> MSP Tech club at
              Al-Azher has a clear mission to help the students in the camps and
              to be there for any kind of support needed whether it's technical
              or non- technical and to help them find their most suitable
              career. <span>Our products :</span>
              Technical sessions , soft skills , workshops , online courses and
              Compatitions .
            </p>
          </div>
        </div>
        {/********* End Section Contain Al-azher Des *********/}
      </div>
    );
  }
}

export default Script;
