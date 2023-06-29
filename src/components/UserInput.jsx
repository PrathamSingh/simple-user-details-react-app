import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInput = ({ data, setData }) => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { name, place }]);
    navigate("/list");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="user-form">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="user-form">
        <label htmlFor="place">Place:</label>
        <input
          id="place"
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </div>
      <button id="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UserInput;
