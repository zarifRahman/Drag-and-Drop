import React from 'react';
import "./style.css";
import messengerIcon from "../asset/icons8-facebook-messenger-64.png";

const ButtonComponent = () => {
  return (
    <div class="card" style={{ padding: '10px' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <img src={messengerIcon} alt="Crossroad" width={20} />
        </div>
        <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Send Message</p>
      </div>
      <input type="email" class="form-control"></input>
      <button
        style={{
          backgroundColor: '#007bff', marginTop: '10px',
          borderStyle: 'solid', borderWidth: '1px'
        }}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => alert('clicked')}
      >
        <span style={{ fontSize: '16px' }}>+ Add Content</span>
      </button>
    </div >
  );
}

export default ButtonComponent;