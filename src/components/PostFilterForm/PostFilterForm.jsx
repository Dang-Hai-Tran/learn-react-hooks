import React, { useRef } from 'react';
import './PostFilterForm.scss';
import { useState } from 'react';

const PostFilterForm = (props) => {
  const { onSubmit } = props;
  const [input, setInput] = useState('');
  const typingTimeoutRef = useRef(null);
  // Search apter 500ms stop typing
  const handleChangeSearchForm = (e) => {
    const value = e.target.value;
    setInput(value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      onSubmit(value);
    }, 500);
  };

  return (
    <form className="container-postFilterForm">
      <input
        placeholder="...some things you want to search..."
        type="text"
        value={input}
        onChange={handleChangeSearchForm}
      />
    </form>
  );
};

export default PostFilterForm;
