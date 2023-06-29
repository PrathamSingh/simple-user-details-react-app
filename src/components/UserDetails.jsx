import React from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = ({ data, setData }) => {
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <>
      <button className="back-button" onClick={() => navigate("/")}>&larr;</button>
      <div className="list-container">
        {data.map((item, index) => (
          <div className="list-item" key={index}>
            <h2>{`Name: ${item.name}`}</h2>
            <p>{`Place: ${item.place}`}</p>
            <span className="delete-button" onClick={() => handleDelete(index)}>
              &#10005;
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserDetails;
