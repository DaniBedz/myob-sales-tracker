import React, { useContext } from 'react';
import { SalesListContext } from '../Contexts/SalesListContext';

const deleteIconStyles = {
  textAlign: 'center',
  color: '#565656',
  cursor: 'pointer',
};
const iconStyles = {
  width: '2rem',
  color: 'silver',
};

const buttonStyles = {
  background: 'none',
  border: 'none',
  marginTop: '1.4rem',
  marginLeft: '0.5rem',
};

function DeleteIcon({ sale }) {
  const { manageSale, toggleShowArchivedSales, manageArchivedSale } =
    useContext(SalesListContext);

  return (
    <div className="col-2" style={deleteIconStyles}>
      <button
        type="button"
        className="deleteBtn"
        style={buttonStyles}
        onClick={() => {
          if (toggleShowArchivedSales === false) {
            manageSale(sale);
          } else {
            manageArchivedSale(sale);
          }
        }}
        onKeyUp={(e) => {
          if (e.code === 'Enter' || e.code === 'Space') {
            if (toggleShowArchivedSales === false) {
              manageSale(sale);
            } else {
              manageArchivedSale(sale);
            }
          }
        }}
      >
        <svg
          style={iconStyles}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="trash-alt"
          className="delete"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
          />
        </svg>
      </button>
    </div>
  );
}

export default DeleteIcon;
