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
        const newEmails = emails.filter(function(e) {return true})
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