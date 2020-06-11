import React from 'react';

let year = new Date().getFullYear();

function Footer() {
    return (
        <footer className='footer'>
            <p>&copy; Copyright {year}</p>
        </footer>
    );

}

export default Footer;