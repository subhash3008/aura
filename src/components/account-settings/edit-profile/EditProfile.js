import React, { Component } from "react";
import styles from "./EditProfile.module.css";
import commonStyles from '../../../shared/Common.module.css';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            company: "",
            designation: "",
            profileImage: 'https://www.w3schools.com/howto/img_avatar.png',
        }
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (event) => { // called once readAsDataURL is completed
                this.setState({
                    profileImage: event.target.result
                })
            }
        }
    }

    render() {
        return (
            <div className={`row ${commonStyles.no_gutter}`}>
                <div className={`col-md-3 ${styles.profile_pic_section}`}>
                    <div>
                        <label className={styles.profile_pic} >
                            <img style={{ height: "100%", width: "100%", borderRadius: "50%" }} src={this.state.profileImage} alt=""></img>
                        </label>
                        <br />
                        <input className={styles.file_input} id="fileInput" type='file' onChange={(e) => this.onSelectFile(e)}></input>
                        <div>
                            <label htmlFor="fileInput">
                                <div className={styles.picture_change_text}>Change Picture</div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className={styles.edit_profile_form_section}>
                        <form>
                            <p className={commonStyles.common_form_label}>NAME</p>
                            <input className={commonStyles.common_form_text_field} type="text" name="name" value={this.state.name} onChange={this.handleUserInput}></input>
                            <p className={commonStyles.common_form_label}>EMAIL ADDRESS</p>
                            <input className={commonStyles.common_form_text_field} type="text" name="email" value={this.state.email} onChange={this.handleUserInput}></input>
                            <p className={commonStyles.common_form_label}>COMPANY</p>
                            <input className={commonStyles.common_form_text_field} type="text" name="company" value={this.state.company} onChange={this.handleUserInput}></input>
                            <p className={commonStyles.common_form_label}>YOUR DESIGNATION</p>
                            <input className={commonStyles.common_form_text_field} type="text" name="designation" value={this.state.designation} onChange={this.handleUserInput}></input>
                            <div className={styles.edit_profile_submit_container}>
                                <button type="button" className={`btn btn-primary-outline ${commonStyles.common_submit_btn} ${commonStyles.btn_ripple}`}>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default EditProfile;