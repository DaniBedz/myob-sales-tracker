import React from 'react';
import Stepper from '../Stepper/Stepper';

function UtilisationPanel({ sale }) {
  return (
    <div className='row' style={ divStyle }>
      <div className='col' style={ colStyle }>
        <span>Subs</span>
        <Stepper sale={ sale } type='subs' utilisation={ sale.utilisations.subs } />
      </div>
      <div className='col' style={ colStyle }>
        <span>Bank Feeds</span>
        <Stepper sale={ sale } type='bankFeed' utilisation={ sale.utilisations.bankFeed } />
      </div>
      <div className='col' style={ colStyle }>
        <span>Cloud File</span>
        <Stepper sale={ sale } type='cloudFile' utilisation={ sale.utilisations.cloudFile } />
      </div>
      <div className='col' style={ colStyle }>
        <span>PDO</span>
        <Stepper sale={ sale } type='PDO' utilisation={ sale.utilisations.PDO } />
      </div>
      <div className='col' style={ colStyle }>
        <span>OAQ</span>
        <Stepper sale={ sale } type='OAQ' utilisation={ sale.utilisations.OAQ } />
      </div>
      <div className='col' style={ colStyle }>
        <span>STP</span>
        <Stepper sale={ sale } type='STP' utilisation={ sale.utilisations.STP } />
      </div>
      <div className='col' style={ colStyle }>
        <span>Offline File</span>
        <Stepper sale={ sale } type='offlineFile' utilisation={ sale.utilisations.offlineFile } />
      </div>
    </div>
  );
}

const divStyle = {
  display: 'flex',
  textAlign: 'center',
  backgroundColor: '#565656',
  justifyContent: 'space-evenly',
  color: 'white',
  zIndex: '0',
};

const colStyle = {
  display: 'grid',
  justifyContent: 'space-evenly',
};

export default UtilisationPanel;