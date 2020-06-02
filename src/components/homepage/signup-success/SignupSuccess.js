import React from "react";
import styles from "./SignupSuccess.module.css";

const SignupSuccess = () => {
  return (
    <React.Fragment>
      <div className={styles.success_container}>
        <div className={styles.success_section} >
          <div className={styles.success_tick_container}>
            <div className={`${styles.inner_circle} ${styles.circle_container}`}>
              <div className={`${styles.inner_circle} ${styles.override_circle_container}`}>
                <i className={`fas fa-check ${styles.tick_icon}`}></i>
              </div>
            </div>
          </div>
          <p className={styles.success_text}>Thanks for Singing Up!</p>
          <p className={styles.success_subtext}>We will reach out to you in next 24-48 hours on your registered email address</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignupSuccess