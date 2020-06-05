import React, { Component } from "react";
import styles from "./Signup.module.css";
import commonStyles from '../../../shared/Common.module.css';
import ErrorText from '../../../shared/error-text/ErrorText';
import Captcha from '../../../shared/captcha/Captcha'
import SignupSuccess from '../signup-success/SignupSuccess'

const validEmailRegex = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      company: "",
      designation: "",
      password: '',
      formsInvalid: true,
      showError: false,
      isSignupSuccess:false,
      errors: {
        name: 'Name is Required!',
        email: 'Email is not valid!',
        mobile: 'Mobile must be 10 digit long!',
        company: 'Company Name is Required!',
        designation: 'Designation is Required!',
        password: 'Password must be 8 characters long!',
        emailExist: 'Email already exists',
        showEmailExistError: false,
      },
    }
  }
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let errors = this.state.errors;
    let formsInvalid = false
    switch (name) {
      case 'name':
        errors.name =
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        formsInvalid = errors.name.length > 0 ? true : false
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        formsInvalid = validEmailRegex.test(value) ? false : true
        break;
      case 'password':
        errors.password =
          value.length < 5
            ? 'Password must be 5 characters long!'
            : '';
        formsInvalid = errors.password.length > 0 ? true : false
        break;
      case 'company':
        errors.company =
          value.length < 3
            ? 'Company Name is Required!'
            : '';
        formsInvalid = errors.company.length > 0 ? true : false
        break;
      case 'designation':
        errors.designation =
          value.length < 3
            ? 'Designation is Required!'
            : '';
        formsInvalid = errors.designation.length > 0 ? true : false
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
    this.setState({ formsInvalid: formsInvalid })
  }
  handleFormSubmit = () => {
    if (!this.state.formsInvalid) {
      const paramsObj = {
        name: this.state.name,
        email: this.state.email,
        company: this.state.company,
        designation: this.state.designation,
        password: this.state.password
      };
      this.props.onSignup(paramsObj);
    }
    this.setState({isSignupSuccess:true})
  }
  goToLogin = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <div className={`row ${commonStyles.no_gutter}`}>
          <div className="col-md-12">
            <div className={commonStyles.home_top_container}>
              <div className={commonStyles.home_top_section}>
                <span className={commonStyles.home_top_text}> Already have an account?</span>
                <button
                  type="button"
                  className={`btn btn-primary-outline ${commonStyles.home_top_action_btn} ${commonStyles.btn_ripple}`}
                  onClick={this.goToLogin}
                >SIGN IN</button>
              </div>
            </div>
            {!this.state.isSignupSuccess && <div className={styles.signup_form_container}>
              <p className={styles.signup_main_text}>Welcome to Precily_AI</p>
              <p className={styles.signup_sub_text}>Enter details to create your account</p>
              <div className={commonStyles.home_form_section}>
                <form>
                  <p className={commonStyles.common_form_label}>NAME</p>
                  <input
                    className={`form-control ${commonStyles.common_form_text_field}`}
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={(event) => this.handleUserInput(event)}>
                  </input>
                  {this.state.showError && this.state.errors.name && <ErrorText text={this.state.errors.name} />}
                  <p className={commonStyles.common_form_label}>EMAIL ADDRESS</p>
                  <input
                    className={commonStyles.common_form_text_field}
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={(event) => this.handleUserInput(event)}>
                  </input>
                  <p className={commonStyles.common_form_label}>COMPANY</p>
                  <input
                    className={commonStyles.common_form_text_field}
                    type="text"
                    name="company"
                    value={this.state.company}
                    onChange={(event) => this.handleUserInput(event)}>
                  </input>
                  <p className={commonStyles.common_form_label}>DESIGNATION</p>
                  <input
                    className={commonStyles.common_form_text_field}
                    type="text"
                    name="designation"
                    value={this.state.designation}
                    onChange={(event) => this.handleUserInput(event)}>
                  </input>
                  <p className={commonStyles.common_form_label}>PASSWORD</p>
                  <input
                    className={commonStyles.common_form_text_field}
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={(event) => this.handleUserInput(event)}>
                  </input>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className={`form-check-input ${styles.signup_checkbox}`}
                      id="tnc">
                    </input>
                    <label
                      className={styles.singup_tnc}
                      htmlFor="tnc">I agree to Precily's Terms of Service and Privacy Policy</label>
                  </div>
                  <div className={styles.signup_form_captcha_container}>
                    <Captcha></Captcha>
                  </div>
                  <div className={styles.signup_form_submit_container}>
                    <button
                      type="button"
                      className={`btn btn-primary-outline ${commonStyles.common_submit_btn} ${commonStyles.btn_ripple}`}
                      onClick={this.handleFormSubmit}>
                      SIGN UP
                      </button>
                  </div>
                </form>
              </div>
            </div>}
          </div>
        </div>
        {this.state.isSignupSuccess && <SignupSuccess></SignupSuccess>}

      </div>
    )
    
  }


}
export default Signup;