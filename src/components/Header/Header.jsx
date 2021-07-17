import React, { useContext } from 'react';

import AddSaleInput from '../AddSaleInput/AddSaleInput';
import ColumnHeaders from '../ColumnHeaders/ColumnHeaders';
import ArchiveButton from '../ArchiveButton/ArchiveButton';
import ArchiveText from '../ArchiveIcon/ArchiveIcon';
import LogoutButton from '../LogoutButton/LogoutButton';
import { SalesListContext } from '../Contexts/SalesListContext';
import Logo from '../Logo/Logo';

const containerStyle = {
    borderTop: '2px solid gray',
    borderRight: '2px solid grey',
    borderBottom: '3px solid #343a40',
    borderLeft: '3px solid #343a40',
    borderRadius: '3px',
};

const titleStyle = {
    position: 'absolute',
    display: 'inline-flex',
    fontSize: '3rem',
    top: '0.7rem',
    left: '11rem',
    fontFamily: 'NeutroMYOB-Medium',
    color: 'dimgrey',
    userSelect: 'none',
    whiteSpace: 'nowrap',
};

const rightSide = {
    display: 'contents',
    justifyContent: 'end',
    alignItems: 'start',
};

function Header() {
    const { toggleShowArchivedSales } = useContext(SalesListContext);

    return (
        <div style={containerStyle}>
            <div className="row" style={{ marginBottom: '-1rem' }}>
                <div className="col">
                    <Logo />
                    <span id="title" style={titleStyle} className="d-none d-lg-inline">
                        Sale Tracker
                        <LogoutButton />
                    </span>
                </div>
                <div style={rightSide}>
                    <ArchiveButton />
                    <AddSaleInput
                        visibility={toggleShowArchivedSales ? 'hidden' : 'visible'}
                    />
                    {toggleShowArchivedSales ? <ArchiveText /> : ''}
                </div>
            </div>
            <ColumnHeaders />
        </div>
    );
}

export default Header;
