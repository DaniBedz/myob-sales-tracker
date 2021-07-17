import React from 'react';

import ArchiveImg from './archive.svg';

const imgStyles = {
    display: 'none',
    marginTop: '1.2rem',
    position: 'absolute',
    right: '1.5rem',
    width: '3.5rem',
    filter:
    'invert(97%) sepia(22%) saturate(4016%) hue-rotate(0deg) brightness(103%) contrast(101%)',
};

function ArchiveIcon() {
    return (
        <img
            src={ArchiveImg}
            alt="archive"
            className="align-self-start d-sm-flex"
            style={imgStyles}
        />
    );
}

export default ArchiveIcon;
