import React from 'react';
import "./style.css";
import messengerIcon from "../asset/icons8-facebook-messenger-64.png";
import chatIcon from "../asset/chatting.png"

const MessageCard = () => {
  return (
    <div class="card" style={{ padding: '10px' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <img src={messengerIcon} alt="Crossroad" width={20} />
        </div>
        <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Send Message</p>
      </div>
      <div class="card" style={{ padding: '10px' }}>
        <img src={chatIcon} alt="Crossroad" width={'100%'} />
      </div>
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
    </div>
  )
}
export default MessageCard;