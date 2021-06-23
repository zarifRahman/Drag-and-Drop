import React from 'react';

const Board = (props) => {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');
    const card = document.getElementById(card_id);
    const boardContent = document.getElementById("board-2");

    card.style.display = 'block';
    e.target.appendChild(card);
    localStorage.setItem('prev_content', boardContent.innerHTML);
  }

  const dragOver = e => {
    e.preventDefault();
  }
  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className={props.className}
    >
      {
        props.children
      }
    </div>
  );
}

export default Board;