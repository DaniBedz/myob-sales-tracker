import React from 'react';

const pStyles = {
  display: 'none',
  color: 'orange',
  marginTop: '0.75rem',
  textAlign: 'center',
  fontSize: '2.5rem',
  position: 'absolute',
  right: '5.5rem',
};

function ArchiveText() {
  return (
    <p className="align-self-start d-sm-flex" style={pStyles}>
      [ Archive ]
    </p>
  );
}

export default ArchiveText;
