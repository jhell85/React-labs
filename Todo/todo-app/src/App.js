import React, { useState } from 'react';
const List = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
  }

  const addItem = (event) => {
    event.preventDefault();
    if(text.length === 0) return;
    setItems([...items, text]);
    setText("");
  }
  const removeItem = (index) => {
    setItems(index)
    items.filter()
  }

  return (
    <div>
    <form onSubmit= { addItem }>
      <input
        type="text"
        placeholder= "enter your task"
        onChange={handleChange}
        value= {text}
      />
    </form>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => removeItem(index)}>Delete</button>
        </li>     
      ))}
    </ul>
  </div>
  )
}
export default List
