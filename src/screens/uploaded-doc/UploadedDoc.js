import React, { Component } from "react";
import { NavigationBar } from '../../shared/navigation-bar/NavigationBar'
import RenderUploadedDoc from '../../components/uploaded-doc/render-uploaded-doc/RenderUploadedDoc'
import styles from "./UploadedDoc.module.css";
import commonStyles from '../../shared/Common.module.css';
import UploadedDocPreview from '../../components/uploaded-doc/uploaded-doc-preview/UploadedDocPreview'



class UploadedDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

   
    render() {
        return (
            <div >
                <NavigationBar></NavigationBar>

                <div  style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '74%', backgroundColor: '#F5F7FD' }}>
                        <RenderUploadedDoc></RenderUploadedDoc>
                    </div>
                    <div className={styles.doc_preview_section}>
                        <UploadedDocPreview></UploadedDocPreview>
                    </div>
                </div>
            </div>
        );
    }
}
export default UploadedDoc;