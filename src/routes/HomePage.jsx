import React from 'react';
import { Link } from 'dva/router';
import styles from './HomePage.less';

function HomePage() {
    return (
        <div className={styles.normal}>
            <h1>dva.js sample</h1>
            <hr />
            <ul className={styles.list}>
                <li><Link to="/users">Users Management</Link></li>
            </ul>
        </div>
    );
}

HomePage.propTypes = {};

export default HomePage;
