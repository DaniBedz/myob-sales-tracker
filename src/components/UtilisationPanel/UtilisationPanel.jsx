import React from 'react';
import Utilisation from '../Utilisation/Utilisation';
import DeleteIcon from '../DeleteIcon/DeleteIcon';

const divStyle = {
  display: 'flex',
  textAlign: 'center',
  backgroundColor: '#565656',
  justifyContent: 'space-evenly',
  color: 'white',
  zIndex: '0',
  position: 'relative',
};

function UtilisationPanel({ sale }) {
  return (
    <>
      <div id={`util_${sale.saleId}`} className="row" style={divStyle}>
        <Utilisation sale={sale} type="subs" heading="Subs" />
        <Utilisation sale={sale} type="bankFeed" heading="Bank Feed" />
        <Utilisation sale={sale} type="cloudFile" heading="Cloud File" />
        <Utilisation sale={sale} type="PDO" heading="PDO" />
        <Utilisation sale={sale} type="OAQ" heading="OAQ" />
        <Utilisation sale={sale} type="STP" heading="STP" />
        <Utilisation sale={sale} type="offlineFile" heading="Offline File" />
        <DeleteIcon sale={sale} />
      </div>
    </>
  );
}

export default UtilisationPanel;
