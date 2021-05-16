import React from 'react';
import Stepper from '../Stepper/Stepper';

function Utilisation({ sale, type, heading }) {
  return (
    <div className='col' style={ colStyle }>
        <span>{ heading }</span>
        <Stepper sale={ sale } type={ type } utilisation={ sale.utilisations[type] } />
    </div>
  );
}

const colStyle = {
  display: 'grid',
  justifyContent: 'space-evenly',
  userSelect: 'none',
};

export default Utilisation;
