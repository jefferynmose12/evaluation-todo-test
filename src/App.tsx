import React from "react";
import "./App.css";
import { Form, Users } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoreManager from "./context/provider";

function App() {
  return (
    <div className="app-container">
      <div className="app-inner">
        <StoreManager>
          <BrowserRouter>
            <Routes>
              <Route index path="/" element={<Users />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </BrowserRouter>
        </StoreManager>
      </div>
    </div>
  );
}

export default App;
