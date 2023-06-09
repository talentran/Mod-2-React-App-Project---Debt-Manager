import React from 'react';

function Folder({ name, color, receipts, onClick }) {
  return (
    <div style={{backgroundColor: color}} onClick={onClick}>
      <h2>{name}</h2>
      <p>{receipts.length} receipt(s)</p>
    </div>
  );
}

export default Folder;
