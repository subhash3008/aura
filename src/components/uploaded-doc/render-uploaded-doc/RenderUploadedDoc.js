import React, { Component } from "react";
import FileViewer from 'react-file-viewer';
import styles from "./RenderUploadedDoc.module.css";
import commonStyles from '../../../shared/Common.module.css';

class RenderUploadedDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onError(e) {
    }
    render() {
        return (
            <div style={{marginTop:'62.5px'}} >
                <div className={styles.doc_control_section}>
                    <i className={`fas fa-arrow-left ${styles.icon_style}`}></i>IncomeTax_SCN.pdf
                </div>
                <FileViewer
                    fileType='docx'
                    filePath="https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/auradoc/vdr/windrose/1.%20Windrose_SCN_AY%2012-13.docx"
                    onError={this.onError} />

            </div>
        );
    }
}
export default RenderUploadedDoc;
