import React, {useState} from 'react';
import './assets/css/App.css';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import data from './assets/json/data.json';

function App(props) {
    const [emails, setEmails] = useState(data);

    const notifyKeyWordChanges = function(keyword) {
        // keyword가 firstName or lastName or email
        const newEmails = data.filter(email => email.firstName.includes(keyword) || email.lastName.includes(keyword) || email.email.includes(keyword) || 
                                        (email.firstName+email.lastName).includes(keyword))
        setEmails(newEmails);
    }

    return (
        <div id='App'>
            <RegisterForm />
            <Searchbar callback = {notifyKeyWordChanges}/>
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;