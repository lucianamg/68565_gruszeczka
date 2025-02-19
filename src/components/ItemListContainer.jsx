import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{
        backgroundColor: '#f2f2f2',
        padding: '1rem',
        borderRadius: '8px',
        textAlign: 'center',
        fontFamily: '"League Spartan", sans-serif',
        fontSize: '5rem',
        color: '#333',
      }}
    >
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;