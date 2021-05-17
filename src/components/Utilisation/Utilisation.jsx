import React from 'react';
import Stepper from '../Stepper/Stepper';

const colStyle = {
  display: 'grid',
  justifyContent: 'space-evenly',
  userSelect: 'none',
};

function Utilisation({ sale, type, heading }) {
  return (
    <div className="col" style={colStyle}>
      <span>{heading}</span>
      <Stepper sale={sale} type={type} utilisation={sale.utilisations[type]} />
    </div>
  );
}

export default Utilisation;
