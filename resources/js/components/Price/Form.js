import React from 'react';
import styled from 'styled-components';

const FormBox = styled.form`
  display: grid;
  grid-gap: 1rem;
  width: 40%;
  margin: 0 auto;
  background-color: var(--gray);
  padding: 3rem;
  border-radius: 30px;
`;

const Select = styled.div`
  width: 100%;
`;
const Category = styled.select`
  width: 50%;
`;
const Level = styled.select`
  width: 50%;
`;
const Title = styled.div`
  input {
    width: 100%;
    border: 0;
    height: 2.6rem;
  }
`;
const Description = styled.div`
  textarea {
    width: 100%;
    border: 0;
    height: 5rem;
  }
`;
const Portfolio = styled.div`
  input {
    width: 100%;
    border: 0;
    height: 2.6rem;
  }
`;
const Price = styled.div`
  input {
    width: 100%;
    border: 0;
    height: 2.6rem;
  }
`;
const Times = styled.div`
  input {
    width: 100%;
    border: 0;
    height: 2.6rem;
  }
`;

const Form = ({ form, handleSubmit, handleChange }) => (
  <div>
    {console.log(form)}
    <FormBox onSubmit={handleSubmit}>
      <Select>
        <Category value={form.category} onChange={handleChange} name="category">
          <option value="0">과목을선택하세요</option>
          <option value="1">JAVA</option>
          <option value="2">WEB</option>
          <option value="3">ANDROID</option>
        </Category>
        <Level value={form.level} onChange={handleChange} name="level">
          <option value="0">난이도를선택하세요</option>
          <option value="1">초급</option>
          <option value="2">중급</option>
          <option value="3">고급</option>
        </Level>
      </Select>

      <Title>
        <input placeholder="title" name="title" onChange={handleChange} value={form.title} />
      </Title>
      <Description>
        <textarea
          placeholder="description"
          name="description"
          onChange={handleChange}
          value={form.description}
        />
      </Description>
      <Portfolio>
        <input
          placeholder="portfolio"
          name="portfolio"
          onChange={handleChange}
          value={form.portfolio}
        />
      </Portfolio>
      <Price>
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={handleChange}
          value={form.price}
        />
      </Price>
      <Times>
        <input placeholder="times" name="times" onChange={handleChange} value={form.times} />
      </Times>

      <button type="submit">제출</button>
    </FormBox>
  </div>
);

export default Form;
