import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import NavBar from "./NavBar";
import RingLoader from "react-spinners/RingLoader";
import "./App.css";

const App = () => {
  //loading not working
  const [loading, setloading] = useState(false);
  useEffect(() => {
    //loading working
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <BrowserRouter>
        {loading ? (
          <div className="preloaderr">
            <RingLoader
              color={"#36d7b7"}
              loading={loading}
              height={100}
              margin={10}
            />
          </div>
        ) : (
          <>
            <NavBar />

            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
