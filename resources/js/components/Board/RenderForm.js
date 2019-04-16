import React from 'react';

const RenderForm = ({
  handleChange, handleSubmit, handleHome, create,
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="category"
          placeholder="category"
          onChange={handleChange}
          value={create.category}
        />
      </div>
      <div>
        <input name="title" placeholder="title" onChange={handleChange} value={create.title} />
      </div>
      <div>
        <input
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={create.description}
        />
      </div>
      <div>
        <input type="file" />
      </div>
      <div>
        <button type="submit">작성완료</button>
        <button onClick={() => handleHome()}>목록으로</button>
      </div>
    </form>
  </div>
);

export default RenderForm;
