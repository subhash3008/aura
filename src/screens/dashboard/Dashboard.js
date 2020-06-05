import React, { Component } from "react";

import styles from "./Dashboard.module.css";
import commonStyles from '../../shared/Common.module.css';
import Sidebar from '../../shared/sidebar/Sidebar';
import DocCount from '../../components/dashboard/doc-count/DocCount'
import { NavigationBar } from '../../shared/navigation-bar/NavigationBar'
import ReportsGraph from '../../components/dashboard/reports-graph/ReportsGraph'
import RecentDoc from '../../components/dashboard/recent-doc/RecentDoc'
import UploadDoc from '../../components/dashboard/upload-doc/UploadDoc'

const sample = [{ id: 1, count: 5, title: "Total Documents" }, { id: 2, count: 65, title: "Pending Docs" }, { id: 3, count: 876, title: "In-Review Docs" }, { id: 4, count: 87, title: "Completed Docs" }];
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documenUploadBtnClicked: false
    }
  }

  uploadDocument = () => {
    this.setState({
      documenUploadBtnClicked: true,
    })
  }

  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        {/* <Sidebar></Sidebar> */}
        <div className={commonStyles.commom_wrapper}>
          <div className={styles.dashboard_heading}>
            <div>
              <div className={commonStyles.commom_title}>Dashboard</div>
              <div className={commonStyles.commom_subtitle}>lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            </div>
            <div className={styles.button_container}>
              <div>
                <button
                  className={`${styles.sync_btn} ${styles.dashboard_btn} ${commonStyles.btn_ripple}`}
                  type="button"

                >
                  <i className={`fas fa-sync ${styles.btn_icon} `}></i>Synchronize Data</button>
                <button
                  className={`${styles.upload_doc_btn} ${styles.dashboard_btn} ${commonStyles.btn_ripple}`}
                  type="button"
                  onClick={this.uploadDocument}
                ><i className={`fas fa-plus-circle ${styles.btn_icon}`}></i>Upload Document</button>
              </div>
            </div>
          </div>

          {/* <div className={styles.document_count_container}>
            {
              sample.map(record => {
                return (
                  <DocCount key={record.id} docCount={record}></DocCount>
                )
              })
            }
          </div>  */}

           {/* <div className={styles.reports_recentdoc_container}>
            <div className={`card ${commonStyles.card_layout} ${styles.reports_card}`}>
              <div className={`card-body ${styles.card_body}`}>
                <ReportsGraph></ReportsGraph>
              </div>
            </div>
            <div className={`card ${commonStyles.card_layout} ${styles.recentdoc_card}`}>
              <div className={`card-body ${styles.card_body}`}>
                <RecentDoc></RecentDoc>
              </div>
            </div>
          </div> */}

          {this.state.documenUploadBtnClicked && <UploadDoc history={this.props.history}></UploadDoc>}
        </div>
      </div>
    )
  }
}
export default Dashboard;