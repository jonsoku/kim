import React from 'react';

const RenderPost = props => (
  <div>
    <div>id : {props.post.id}</div>
    <div>name : {props.post.user && props.post.user.name}</div>
    <div>title : {props.post.title}</div>
    <div>description : {props.post.description}</div>
    <div>view_count : {props.post.view_count + 1}</div>
    <div>
      {props.post.created_at === props.post.updated_at
        ? `작성일 : ${props.post.created_at}`
        : `작성일 : ${props.post.created_at}수정일 : ${props.post.updated_at}`}
    </div>
    <button onClick={() => props.handleBack()}>뒤로가기</button>
    <button onClick={() => props.handleDelete()}>삭제하기</button>
    <button onClick={() => props.handleEdit()}>수정하기</button>
  </div>
);

export default RenderPost;
