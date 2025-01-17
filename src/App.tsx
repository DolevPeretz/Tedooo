import React from "react";
import "./App.css";
import Feed from "./components/Component";
import FilterMenu from "./components/FilterMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <div className="new-component">
          <FilterMenu />
          <div className="sticky-header">Product Catalog</div> 
          <div className="secondary-header"></div> 
          <Routes>
            <Route path="/" element={<Feed />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
