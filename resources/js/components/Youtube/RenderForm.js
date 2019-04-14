import React from 'react';

const RenderForm = ({ handleSubmit, handleChange, form }) => (
  <form onSubmit={handleSubmit}>
    {console.log(form)}
    <div>
      <input onChange={handleChange} value={form.category} name="category" />
    </div>
    <div>
      <input onChange={handleChange} value={form.url} name="url" />
    </div>
    <div>
      <input onChange={handleChange} value={form.title} name="title" />
    </div>
    <div>
      <textarea onChange={handleChange} value={form.description} name="description" />
    </div>
    <div>
      <button type="submit">업로드</button>
    </div>
  </form>
);

export default RenderForm;
