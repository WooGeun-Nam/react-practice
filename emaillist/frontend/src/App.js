import React, { useState, useEffect } from 'react';
import './assets/css/App.css';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

function App(props) {
    const [emails, setEmails] = useState([]);

    const fetchEmails = async() => {
        try {
            const response = await fetch('/api/email', {
                method: 'get',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.response} ${json.message}`)
            };

            setEmails(json.data);

        } catch(err) {
            console.error(err.message);
        }
    }

    const addEmail = async (firstName, lastName, email) => {
        const newEmail = {
            no: null,
            firstName: firstName,
            lastName: lastName,
            email: email
        };
        try {
            const response = await fetch('/api/email', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEmail)
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.response} ${json.message}`)
            };

            setEmails([json.data, ...emails]);

        } catch(err) {
            console.error(err.message);
        }
    }

    const deleteEmail = async(no) => {
        try {
            const response = await fetch(`/api/email/${no}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.response} ${json.message}`)
            };

            const newEmails = emails.filter((email) => email.no !== no);
            setEmails(newEmails);

        } catch(err) {
            console.error(err.message);
        }
    }
    
    const searchEmail = async(keyword) => {
        try {
            const response = await fetch(`/api/email/${keyword}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.response} ${json.message}`)
            };

            setEmails(json.data);

        } catch(err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        fetchEmails();
    }, []);

    const callbackAddEmail = function(e, firstName, lastName, email) {
        e.preventDefault();
        e.target.reset();
        addEmail(firstName, lastName, email);
    }

    const callbackDeleteEmail = function(e, no) {
        e.preventDefault();
        deleteEmail(no);
    }

    const notifyKeyWordChanges = function(keyword) {
        // keyword가 firstName or lastName or email
        //const emails = data.filter(email => email.email.includes(keyword) || (email.firstName+email.lastName).includes(keyword))
        searchEmail(keyword);
    }
    
    return (
        <div id='App'>
            <RegisterForm callbackAddEmail={callbackAddEmail}/>
            <Searchbar callbackKeyword={notifyKeyWordChanges}/>
            <Emaillist 
                emails={emails}
                callbackDeleteEmail={callbackDeleteEmail} />
        </div>
    );
}

export default App;