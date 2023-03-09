import React from 'react';
import styles from './assets/css/Emaillist.css';
import emails from './assets/json/data.json';
import Email from './Email';

const Emaillist = () => {
    return (
        <ul className={styles.Emaillist}>
            {
                emails.map(email => <Email 
                                        key={email.no}
                                        no={email.no}
                                        name={email.firstName + email.lastName}
                                        email={email.email}/>) 
            }
        </ul>
    );
};

export default Emaillist;