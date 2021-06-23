import React from 'react';

const Card = (props) => {

  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  }
  const dragOver = e => {
    e.stopPropagation();
  }
  return (
    <div
      id={props.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
      draggable={props.draggable}
      className={props.className}
    >
      {props.children}
    </div>
  );
}

export default Card;