import React, { Component } from "react";
import { NavigationBar } from '../../shared/navigation-bar/NavigationBar'
import RenderUploadedDoc from '../../components/uploaded-doc/render-uploaded-doc/RenderUploadedDoc'
import styles from "./UploadedDoc.module.css";
import commonStyles from '../../shared/Common.module.css';
import UploadedDocPreview from '../../components/uploaded-doc/render-uploaded-doc/RenderUploadedDoc'

import Select from 'react-select';

const options = [
    { value: 'public', label: 'Public' },
    { value: 'private', label: 'Private' },
    { value: 'protected', label: 'Protected' },
  ];

class UploadedDoc extends Component {
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
        console.log(`Option selected:`, selectedOption);
      };
    render() {
        return (
            <div >
                <NavigationBar></NavigationBar>

                <div className='yyy' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '74%', backgroundColor: '#F5F7FD' }}>
                        <RenderUploadedDoc></RenderUploadedDoc>
                    </div>
                    <div className={styles.doc_preview_section}>
                        <div style={{height:'80%', backgroundColor:'#ffffff', overflow: 'auto'}}>
                        <p className={styles.doc_preview_title}>Document Preview</p>


                        <div style={{ padding: '0px 20px' }}>
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

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ width: '48%' }}>
                                        <p className={commonStyles.common_form_label}>DUE DATE</p>
                                        <input
                                        style={{fontSize:'14px'}}
                                            className={commonStyles.common_form_text_field}
                                            type="date"
                                            name="time"
                                            value={this.state.time}
                                            onChange={(event) => this.handleUserInput(event)}>
                                        </input>
                                    </div>

                                    <div style={{ width: '48%' }}>
                                    <p className={commonStyles.common_form_label}>PERMISSIONS</p>
                                    <Select
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={options}
      />
                                    </div>

                                </div>






                                <p className={commonStyles.common_form_label}>DOCUMENT TYPE</p>
                                <div style={{fontSize:'13px'}}>
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
                                    className={commonStyles.common_form_text_field}
                                    style={{marginBottom:'10px'}}
                                    type="text"
                                    name="email"
                                    value={this.state.email}
                                    placeholder="Enter message here"
                                    onChange={(event) => this.handleUserInput(event)}>
                                    
                                </input>

                            </form>
                        </div>

                    </div>

                    <div style={{height:'20%', backgroundColor:'grey'}}>
hello
                    </div>
                    

                    </div>


                </div>

            </div>
        );
    }
}
export default UploadedDoc;