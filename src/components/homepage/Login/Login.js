import React, { Component } from "react";
import styles from "./Login.module.css";
import commonStyles from '../../../shared/Common.module.css';
import Captcha from '../../../shared/captcha/Captcha';
import history from '../../../history.js'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ''
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name)
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <div className={`row ${commonStyles.no_gutter}`}>
          <div className="col-md-12">
            <div className={commonStyles.home_top_container}>
              <div className={commonStyles.home_top_section}>
                <span className={commonStyles.home_top_text}>Don't have an account?</span>
                <button type="button" className={`btn btn-primary-outline ${commonStyles.home_top_action_btn} ${commonStyles.btn_ripple}`}>
                  GET STARTED
                </button>
              </div>
            </div>
            <div className={styles.login_form_container}>
              <p className={styles.login_main_text}>Sign in to Precily_AI</p>
              <p>Enter your details below</p>
              <div className={commonStyles.home_form_section}>
                <form>
                  <p className={commonStyles.common_form_label}>EMAIL ADDRESS</p>
                  <input className={commonStyles.common_form_text_field} type="text" name="email" value={this.state.email} onChange={this.handleUserInput}></input>
                  <div className={styles.login_form_password_section}>
                    <p className={commonStyles.common_form_label}>PASSWORD</p>
                    <p className={styles.login_form_password_text}>Forgot your password?</p>
                  </div>
                  <input className={commonStyles.common_form_text_field} type="password" name="password" value={this.state.password} onChange={this.handleUserInput}></input>
                  <div className={styles.login_form_captcha_container}>
                    <Captcha></Captcha>
                  </div>
                  <div className={styles.login_form_submit_container}>
                    <button type="button" className={`btn btn-primary-outline ${commonStyles.common_submit_btn} ${commonStyles.btn_ripple}`}>
                      SIGN IN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;