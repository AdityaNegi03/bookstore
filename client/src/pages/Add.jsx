import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export const Add = () => {

    const [book,setBook] =useState({
        title:"",
        desc:"",
        price:null,
        cover:"",

    })
    const [error,setError] = useState(false)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

      const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:8800/books", book);
          navigate("/");
        } catch (err) {
          console.log(err);
          setError(true)
        }
      };
      console.log(book);
  return (
    <div className='form'>
       <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <input
        rows={5}
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book cover"
        name="cover"
        onChange={handleChange}
      />
       <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add;