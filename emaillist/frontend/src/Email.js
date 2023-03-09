import React from 'react';

const Email = ({no, name, email}) => {
    return (
        <li>
            {name}
            <br/>
            {email}
        </li>
    );
};

export default Email;