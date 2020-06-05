import React, { Component } from "react";

import styles from "./UploadDoc.module.css";
import commonStyles from '../../../shared/Common.module.css';
import CommonModal from '../../../shared/common-modal/CommonModal'
import Dropzone from 'react-dropzone'

class UploadDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    uploadDocument = () => {
    }

    onfileFound = (file) => {
        this.setState({ showResults: false })
        file.forEach((file) => {
            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                console.log("reader", reader)
                this.setState({
                    filedata: reader.result,

                }, function () {
                    // this.onUpload()
                    this.props.history.push('uploaded-doc')
                })
            }
            reader.readAsDataURL(file)
        })
    }

    render() {
        return (
            <div>
                <CommonModal>
                    <div className={styles.upload_document_container}>
                        <img src={require('../../../assets/upload_file.png')} alt="" />
                        <p className={styles.upload_document_text}>Choose File to Upload</p>
                        <p className={styles.upload_document_format_text}>or Drag and Drop (Acceptable Formats: .doc, .docx, .pdf)</p>
                    </div>
                    <div className={styles.upload_document_submit_section}>
                        <Dropzone onDrop={acceptedFiles => this.onfileFound(acceptedFiles)}>
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()} style={{ alignItems: 'center', justifyContent: 'center', }}>
                                    <input {...getInputProps()} />

                                    <button type="button" className={`btn btn-primary-outline ${commonStyles.home_top_action_btn} ${commonStyles.btn_ripple}`}
                                        onClick={this.uploadDocument}>
                                        UPLOAD
                </button>
                                </div>
                            )}
                        </Dropzone>
                    </div>
                </CommonModal>
            </div>
        );
    }
}
export default UploadDoc;