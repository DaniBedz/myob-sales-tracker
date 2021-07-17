import React, { forwardRef } from 'react';

import UtilisationPanel from '../UtilisationPanel/UtilisationPanel';
import FieldInput from '../FieldInput/FieldInput';
import CalendarInput from '../CalendarInput/CalendarInput';
import TypeDropdown from '../TypeDropdown/TypeDropdown';
import NotesInput from '../NotesInput/NotesInput';
import PotentialSales from '../PotentialSales/PotentialSales';

const divStyles = {
    backgroundColor: '#565656',
    justifyContent: 'space-evenly',
    display: 'flex',
    padding: '0.5rem 0rem',
    borderTop: '2px solid gray',
    borderRight: '2px solid grey',
    borderBottom: '3px solid #343a40',
    borderLeft: '3px solid #343a40',
    borderRadius: '3px',
    height: '8rem',
};

const Sale = forwardRef(({ sale }, ref) => (
    <article
        id={`item_${sale.saleId}`}
        style={divStyles}
        className="row"
        ref={ref}
    >
        <TypeDropdown sale={sale} />
        <FieldInput sale={sale} propName="company" placeholder="Company" />
        <FieldInput sale={sale} propName="quoteId" placeholder="Quote ID" />
        <FieldInput sale={sale} propName="email" placeholder="Email" />
        <FieldInput sale={sale} propName="clientId" placeholder="Client ID" />
        <CalendarInput
            sale={sale}
            propName="quoteExpiry"
            placeholder="Quote Expiry"
        />
        <CalendarInput sale={sale} propName="saleDate" placeholder="Sale Date" />
        <PotentialSales sale={sale} />
        <NotesInput sale={sale} />
        <UtilisationPanel sale={sale} />
    </article>
));

export default Sale;
