import React from "react";
import styles from "./DocCount.module.css";
import commonStyles from '../../../shared/Common.module.css';

const DocCount = (props) => {
    return (
        <React.Fragment>
            <div className={styles.doc_count_card_container}>
                <div className={`card ${commonStyles.card_layout}`}>
                    <div className={`card-body ${styles.doc_count_card_body}`}>
                        <div className={styles.circle}><i className="fas fa-folder"></i></div>
                        <div className={styles.doc_count}>{props.docCount.count}</div>
                        <div className={styles.doc_title}>{props.docCount.title}</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default DocCount;