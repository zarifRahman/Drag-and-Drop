
import React, { useEffect, useState } from 'react';
import "./style.css";

const getLocalItem = () => {
  let titleValue = localStorage.getItem('title');
  console.log(titleValue);

  if (titleValue) {
    return localStorage.getItem('title');
  } else {
    return '';
  }
}
const InputField = () => {
  const [title, setTitle] = useState('');
  localStorage.setItem('title', title);
  useEffect(() => {
    const val = localStorage.getItem('title');
    setTitle(val);
    console.log("---", title);
  }, [title]);

  return (
    <input value={title} type="email" class="form-control" onChange={event => setTitle(event.target.value)}></input>
  );
}
export default InputField;