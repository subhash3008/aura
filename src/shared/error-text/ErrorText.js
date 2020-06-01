import React from 'react';
import styles from "./ErrorText.module.css";

const ErrorText = (props) => {
    console.log("kk", props)
  const component = props.text ? (
    <span className={styles.error_text}>{props.text}</span>
  ) : null;
  return component;
};



export default ErrorText;