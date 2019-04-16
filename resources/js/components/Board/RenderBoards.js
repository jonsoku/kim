import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
`;

const RenderBoards = ({ boards, handleLinkForm, handleLinkShow }) => (
  <div>
    <Table>
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>조회수</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {boards.map(board => (
          <tr key={board.id}>
            <td>{board.id}</td>
            <td onClick={() => handleLinkShow(board.id)}>{board.title}</td>
            <td>{board.user.name}</td>
            <td>{board.view_count}</td>
            <td>{board.created_at}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <div>
      <button onClick={() => handleLinkForm()}>작성</button>
    </div>
  </div>
);

export default RenderBoards;
