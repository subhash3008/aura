import React, { Component } from "react";
import styles from "./UploadedDocPreview.module.css";
import commonStyles from '../../../shared/Common.module.css';
import Select from 'react-select';

const options = [
    { value: 'public', label: 'Public' },
    { value: 'private', label: 'Private' },
    { value: 'protected', label: 'Protected' },
];

class UploadedDocPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            time: '',
            drop: '',
            selectedOption: null,
        }
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };

    render() {
        return (
            <div className='thin_custom_scrollbar'>
                <div className={styles.doc_preview_container}>
                    <p className={styles.doc_preview_title}>Document Preview</p>


                    <div className={styles.doc_preview_form_container} >
                        <form>
                            <p className={commonStyles.common_form_label}>DOCUMENT NAME</p>
                            <input
                                className={`form-control ${commonStyles.common_form_text_field}`}
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={(event) => this.handleUserInput(event)}>
                            </input>
                            <p className={commonStyles.common_form_label}>CLIENT NAME</p>
                            <input
                                className={commonStyles.common_form_text_field}
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={(event) => this.handleUserInput(event)}>
                            </input>

                            <div className={styles.doc_preview_two_column_fields} >
                                <div className={styles.doc_preview_two_column_fields_width} >
                                    <p className={commonStyles.common_form_label}>DUE DATE</p>
                                    <input
                                        style={{ fontSize: '14px' }}
                                        className={commonStyles.common_form_text_field}
                                        type="date"
                                        name="time"
                                        value={this.state.time}
                                        onChange={(event) => this.handleUserInput(event)}>
                                    </input>
                                </div>

                                <div className={styles.doc_preview_two_column_fields_width} >
                                    <p className={commonStyles.common_form_label}>PERMISSIONS</p>
                                    <Select
                                        value={this.state.selectedOption}
                                        onChange={this.handleChange}
                                        options={options}
                                    />
                                </div>
                            </div>
                            <p className={commonStyles.common_form_label}>DOCUMENT TYPE</p>
                            <div className={"document_type_radio_group"}>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
                                    <label class="form-check-label" for="gridRadios1">
                                        Show Cause Notice
          </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                                    <label class="form-check-label" for="gridRadios2">
                                        Case Law Summary
          </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"></input>
                                    <label class="form-check-label" for="gridRadios3">
                                        Others
          </label>
                                </div>
                            </div>
                            <p className={commonStyles.common_form_label}>ASSIGNED TO</p>
                            <Select
                                value={this.state.selectedOption}
                                onChange={this.handleChange}
                                options={options}
                                placeholder="Select Team Member"

                            />
                            <p className={commonStyles.common_form_label}>ADD TAGS (OPTIONAL)</p>
                            <input
                                className={`form-control ${commonStyles.common_form_text_field}`}
                                type="text"
                                name="name"
                                value={this.state.name}
                                placeholder="Enter tags here"
                                onChange={(event) => this.handleUserInput(event)}>
                            </input>
                            <p className={commonStyles.common_form_label}>MESSAGE (OPTIONAL)</p>
                            <input
                                className={`${commonStyles.common_form_text_field} ${styles.doc_preview_last_field_bottom_spacing}`}
                                type="text"
                                name="email"
                                value={this.state.email}
                                placeholder="Enter message here"
                                onChange={(event) => this.handleUserInput(event)}>
                            </input>
                        </form>
                    </div>
                </div>
                <div style={{ height: '11vh', backgroundColor: '#ffffff' }} >
                    <div className={styles.doc_prevew_form_submit_container}>
                        <button
                            style={{ marginRight: '8px' }}
                            type="button"
                            className={`btn btn-primary-outline ${commonStyles.common_light_btn} ${commonStyles.btn_ripple}`}>
                            CANCEL
                      </button>
                        <button
                            type="button"
                            className={`btn btn-primary-outline ${commonStyles.common_submit_btn} ${commonStyles.btn_ripple}`}>
                            CLUSTER
                      </button>
                    </div>

                </div>
            </div>
        );
    }
}
export default UploadedDocPreview;