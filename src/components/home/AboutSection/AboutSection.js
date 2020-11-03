import React, { Component } from 'react'
import Script from "./Script"
import Commitee from "./Commitee"

class AboutUs extends Component {
    render() {
        return (
            <div className="about">
               <Script /> 
               <Commitee />
            </div>
        )
    }
}

export default AboutUs
