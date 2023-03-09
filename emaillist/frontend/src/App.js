import React from 'react';
import styles from './assets/css/App.css';
import Emaillist from './Emaillist';

function App(props) {
    return (
        <div id='App'>
            <div className={styles.Searchbar}>
                찾기: <input type='text' placeholder='search'/>
            </div>
            <Emaillist />
        </div>
    );
}

export default App;