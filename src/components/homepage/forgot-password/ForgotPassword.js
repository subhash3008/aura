import React, { Component } from "react";
import styles from "./ForgotPassword.module.css";
import commonStyles from '../../../shared/Common.module.css';


class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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
                <span className={commonStyles.home_top_text}>  Don't have an account?</span>
                <button type="button" className={`btn btn-primary-outline ${commonStyles.home_top_action_btn} ${commonStyles.btn_ripple}`}>GET STARTED</button>
              </div>
            </div>
            <div className={styles.fp_form_container}>
              <p className={styles.fp_main_text}>Forgot your password</p>
              <p>We'll send a reset link on your registered Email Id</p>
              <div className={commonStyles.home_form_section}>
                <form>
                  <p className={commonStyles.common_form_label}>REGISTERED EMAIL ADDRESS</p>
                  <input className={commonStyles.common_form_text_field} type="text" name="email" value={this.state.email} onChange={this.handleUserInput}></input>
                  <div className={commonStyles.common_submit_container}>
                    <button type="button" className={`btn btn-primary-outline ${commonStyles.common_submit_btn} ${commonStyles.btn_ripple}`}>RESET PASSWORD</button>
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
export default ForgotPassword;