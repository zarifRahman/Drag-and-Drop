import React from 'react';
import "./style.css";
import messengerIcon from "../asset/icons8-facebook-messenger-64.png";
import chatIcon from "../asset/chatting.png"

const MessageTitleAndIcon = () => {
  return (
    <div class="card" style={{ paddingTop: '10px', paddingLeft: '20px', paddingRight: '20px', marginTop: '5px' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <img src={messengerIcon} alt="Crossroad" width={20} />
        </div>
        <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Send Message</p>
      </div>
    </div>
  )
}
export default MessageTitleAndIcon;