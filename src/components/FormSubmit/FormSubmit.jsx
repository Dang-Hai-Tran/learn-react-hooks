import React, { useState } from 'react';
import './FormSubmit.scss';

const FormSubmit = (props) => {
  const { handleFormSubmit } = props;
  const [input, setInput] = useState('');
  const submitInput = (input, e) => {
    e.preventDefault();
    handleFormSubmit(input);
    setInput('');
  };
  return (
    <form className="container-form" onSubmit={(e) => submitInput(input, e)}>
      <input placeholder="..." type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSubmit;
