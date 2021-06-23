import React from 'react';
import "./style.css";

const ButtonComponent = () => {
  return (
    <button
      style={{
        backgroundColor: '#007bff', marginTop: '10px',
        borderStyle: 'solid', borderWidth: '1px',
        color: '#fff'
      }}
      // value={inputValue}
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      // onClick={() => alert('clicked')}
      contentEditable="true"
    // onChange={(e) => {
    //   console.log("hiii", e.target.value);
    //   setInputValue(e.target.value);
    // }}
    >
      <span style={{ fontSize: '16px' }}>+ Add Content</span>
    </button>
  );
}

export default ButtonComponent;