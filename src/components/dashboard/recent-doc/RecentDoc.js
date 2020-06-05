import React, { Component } from "react";

import styles from "./RecentDoc.module.css";






class RecentDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
            <div className={styles.container}>
Recent Documents
            </div>
            </div>
            
        );
    }
}
export default RecentDoc;