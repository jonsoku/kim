import React from 'react';

const RenderYoutubes = ({ youtubes, handleLink }) => (
  <div>
    {youtubes.map(youtube => (
      <div key={youtube.id} onClick={() => handleLink(youtube.id)}>
        <p>ID : {youtube.id}</p>
        <p>글쓴이 : {youtube.user.name}</p>
        <p>카테고리 : {youtube.category}</p>
        <p>타이틀 : {youtube.title}</p>
        <p>주소 : {youtube.url}</p>
        <p>본문 : {youtube.description}</p>
        <p>조회수 : {youtube.view_count}</p>
      </div>
    ))}
  </div>
);

export default RenderYoutubes;
