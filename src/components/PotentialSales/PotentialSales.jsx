import React from 'react';

const inputStyles = {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    margin: '2px',
};

const colStyles = {
    zIndex: '1',
};

function PotentialSales({ sale }) {
    return (
        <div className="col" style={colStyles}>
            <div id={`potentialSales_${sale.saleId}`} style={inputStyles} type="text">
                {sale.potentialSales}
            </div>
        </div>
    );
}

export default PotentialSales;
