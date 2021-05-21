import React from 'react';

const pStyles = {
  color: 'orange',
  margin: '1.5rem 1.5rem 1rem 1rem',
  textAlign: 'center',
  fontSize: '1.5rem',
  position: 'absolute',
  right: '6rem',
  top: '0.3rem',
};

function ArchiveText() {
  return (
    <p className="align-self-start" style={pStyles}>
      [ Archive ]
    </p>
  );
}

export default ArchiveText;
