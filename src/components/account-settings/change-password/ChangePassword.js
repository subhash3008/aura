import React, { Component } from "react";
import styles from "./ChangePassword.module.css";
import commonStyles from '../../../shared/Common.module.css';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            reEnterPassword: "",
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <div className={styles.change_password_container}>
                    <div className={styles.change_password_form_section}>
                        <form>
                            <p className={commonStyles.common_form_label}>ENTER OLD PASSWORD</p>
                            <input className={commonStyles.common_form_text_field} type="text" name="oldPassword" value={this.state.oldPassword} onChange={this.handleUserInput}></input>
                            <p className={commonStyles.common_form_label}>ENTER NEW PASSWORD</p>
                            <input className={commonStyles.common_form_text_field} type="text" name="newPassword" value={this.state.newPassword} onChange={this.handleUserInput}></input>
                            <p className={commonStyles.common_form_label}>RE-ENTER PASSWORD</p>
                            <input className={commonStyles.common_form_text_field} type="text" name="reEnterPassword" value={this.state.reEnterPassword} onChange={this.handleUserInput}></input>
                            <div className={styles.edit_profile_submit_container}>
                                <button type="button" className={`btn btn-primary-outline ${commonStyles.common_submit_btn} ${commonStyles.btn_ripple}`}>Save Changes</button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.password_rule_container}>
                    </div>

                </div>
            </div>
        )
    }
}
export default ChangePassword;