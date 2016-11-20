import React from 'react';
import { Button } from 'antd';
import styles from './NotFound.less';

const NotFound = () =>
  <div className={styles.normal}>
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.desc}>Page not found</p>
      <a href="/"><Button type="primary" style={{ marginTop: 5 }}>Back to home</Button></a>
    </div>
  </div>;

export default NotFound;
