import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer row">
        {/*** Start Icons For Connection ****/}
        <div className="space icons col-md-4 col-12">
          <a
            className="instagram fab fa-instagram"
            href="https://instagram.com/mspalazhar?igshid=1w50f2fdbs8in"
            target="_blank"
          ></a>

          <a
            className="facebook fab fa-facebook-f"
            href="https://www.facebook.com/AlAzharTC/"
            target="_blank"
          ></a>

          <a
            className="youtube fab fa-youtube"
            href="https://www.youtube.com/channel/UCiit2m7skf-rTBNVJEnHWoQ"
            target="_blank"
          ></a>

          <a
            className="linkedin fab fa-linkedin-in"
            href="https://www.linkedin.com/company/msp-tech-club-al-azhar-university"
            target="_blank"
          ></a>
        </div>
        {/*** End Icons For Connection ****/}

        {/*** Start Form For Search ****/}
        <div className="space form col-md-4 col-12">
          <input type="email" placeholder="Enter Your e-mail" />
          <input className="but" type="submit" value="send" />
        </div>
        {/*** End Form For Search ****/}

        {/*** Start copyRight ****/}
        <div className="space copyRight col-md-4 col-12">
          &copy;2011-2020 MSP.All right recived
        </div>
        {/*** End copyRight ****/}
      </div>
    );
  }
}