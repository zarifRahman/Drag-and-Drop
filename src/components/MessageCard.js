import React from 'react';
import "./style.css";
import messengerIcon from "../asset/icons8-facebook-messenger-64.png";
import chatIcon from "../asset/chatting.png"

const MessageCard = () => {
  return (
    <div class="card" style={{ padding: '20px', marginTop: '10px' }}>
      <img src={chatIcon} alt="Crossroad" width={'100%'} height={'150px'} />
    </div>
  )
}
export default MessageCard;