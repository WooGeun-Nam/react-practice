import React from 'react';
import styles from './assets/scss/Email.scss';

const Email = ({no, firstName, lastName, email, callbackDeleteEmail}) => {
    return (
        <li className={styles.Email}>
            <h4>{`${firstName} ${lastName}`}</h4>
            <span>{email}</span>
            <a href='' onClick={e=>callbackDeleteEmail(e, no)}></a>
        </li>
    );
};

export default Email;