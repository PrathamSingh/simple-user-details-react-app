import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import UserInput from "./components/UserInput";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<UserInput setData={setData} data={data} />}
        />
        <Route
          path="/list"
          element={<UserDetails setData={setData} data={data} />}
        />
      </Routes>
    </Router>
  );
};

export default App;