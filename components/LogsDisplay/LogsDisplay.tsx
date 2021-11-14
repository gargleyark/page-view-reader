import React from "react";
import useLogs from '../../context/LogsContext/useLogs';
import AllPageViews from '../AllPageViews';
import UniquePageViews from '../UniquePageViews';
import styles from '../../styles/LogsDisplay.module.css';

const LogsDisplay = (): JSX.Element =>  {
  const { logs } = useLogs();

  return (
    <div className={styles.pageDataWrapper}>
      <div className={styles.pageDataColumns}>
      {
        logs.length ? 
          (<>
            <AllPageViews />
            <UniquePageViews />
          </>) :
          'Please upload your logs to see data breakdown'
      }
      </div>
    </div>
  );
}

export default LogsDisplay;