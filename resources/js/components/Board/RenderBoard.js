import React from 'react';

const RenderBoard = ({ board, handleBack, handleEdit }) => (
  <div>
    <p>ID : {board.id}</p>
    <p>USERNAME : {board.user && board.user.name}</p>
    <p>TITLE : {board.title}</p>
    <p>DESCRIPTION : {board.description}</p>
    <p>VIEW_COUNT : {board.view_count}</p>
    <div>
      <button onClick={() => handleBack()}>뒤로가기</button>
      <button onClick={() => handleEdit(board.id)}>수정하기</button>
    </div>
  </div>
);

export default RenderBoard;
