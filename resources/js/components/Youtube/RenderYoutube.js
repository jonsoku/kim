import React from 'react';

const RenderYoutube = ({ youtube }) => (
  <div>
    <div>
      <p>{youtube.category}</p>
      <p>{youtube.user && youtube.user.name}</p>
      <p>{youtube.title}</p>
      <p>{youtube.description}</p>
      <p>{youtube.view_count}</p>
      <p>{youtube.url}</p>
    </div>
  </div>
);

export default RenderYoutube;
