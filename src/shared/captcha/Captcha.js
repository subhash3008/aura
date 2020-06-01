import React from "react";
import styles from "./Captcha.module.css";

import ReCAPTCHA from "react-google-recaptcha";
const recaptchaRef = React.createRef();

const Captcha = () => {
  return (
    <React.Fragment>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6Le05P4UAAAAALXnEUSMhqTOEdjOgqRIM3EKYguj"
      // onChange={this.handleCaptcha}
      />
    </React.Fragment>
  );



}


export default Captcha;