import React from 'react';
import Stepper from '../Stepper/Stepper';

function Utilisations(props) {
  return (
    <div className='row' style={ divStyle }>
      <div className='col' style={ colStyle }>
        <span>Subs</span>
        <Stepper value={props.saleInfo.subs} />
      </div>
      <div className='col' style={ colStyle }>
        <span>Bank Feeds</span>
        <Stepper value={ props.saleInfo.bankFeed } />
      </div>
      <div className='col' style={ colStyle }>
        <span>Cloud File</span>
        <Stepper value={ props.saleInfo.cloudFile } />
      </div>
      <div className='col' style={ colStyle }>
        <span>PDO</span>
        <Stepper value={ props.saleInfo.PDO } />
      </div>
      <div className='col' style={ colStyle }>
        <span>OAQ</span>
        <Stepper value={ props.saleInfo.OAQ } />
      </div>
      <div className='col' style={ colStyle }>
        <span>STP</span>
        <Stepper value={ props.saleInfo.STP } />
      </div>
      <div className='col' style={ colStyle }>
        <span>Offline File</span>
        <Stepper value={ props.saleInfo.offlineFile } />
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
};

const colStyle = {
  display: 'grid',
  justifyContent: 'space-evenly',
};

export default Utilisations;