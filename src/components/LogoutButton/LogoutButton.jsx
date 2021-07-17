import React, { useState } from 'react';
import { navigate } from 'raviger';

function logOut() {
    window.localStorage.clear();
    navigate('/login');
}

function LogoutButton() {
    const [logoutColor, setLogoutColor] = useState('cadetblue');
    const buttonStyles = {
        color: logoutColor,
        borderColor: 'dimgrey',
        backgroundColor: 'transparent',
        borderRadius: '10px',
        fontSize: '1rem',
        padding: '5px',
    };

    const divStyles = {
        display: 'inline-block',
        paddingLeft: '1rem',
        position: 'absolute',
        top: '-0.25rem',
    };
    return (
        <div style={divStyles}>
            <button
                type="button"
                variant="outline-danger"
                style={buttonStyles}
                onClick={() => logOut()}
                onMouseEnter={() => setLogoutColor('white')}
                onMouseLeave={() => setLogoutColor('cadetblue')}
            >
                Log Out
            </button>
        </div>
    );
}

export default LogoutButton;
