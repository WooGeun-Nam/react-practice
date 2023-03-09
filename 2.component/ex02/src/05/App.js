import React from 'react';
import styles from './assets/scss/App.scss';

function app(props) {
    return (
        <div id='App'>
            <h1 className={styles.Header}>SASS & SCSS</h1>
        </div>
    );
}

export default app;