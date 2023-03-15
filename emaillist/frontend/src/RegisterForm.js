import React, { useState } from 'react';
import styles from './assets/css/RegisterForm.css';

const RegisterForm = ({callbackAddEmail}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState("");

    const fNameChange = ({ target: { value } }) => setFirstName(value);
    const lNameChange = ({ target: { value } }) => setLastName(value);
    const emailChange = ({ target: { value } }) => setEmail(value);

    return (
        <div>
            <form className={styles.RegisterForm} onSubmit={e=>callbackAddEmail(e, firstName, lastName, email)}>
                <input type='text' name='firstName' placeholder='성' onChange={fNameChange} className={styles.InputFirstName}/>
                <input type='text' name='lastName' placeholder='이름' onChange={lNameChange} className={styles.InputLastName}/>
                <input type='text' name='email' placeholder='이메일' onChange={emailChange} className={styles.InputEmail}/>
                <input type='submit' value='등록'/>
            </form>
        </div>
    );
};

export default RegisterForm;