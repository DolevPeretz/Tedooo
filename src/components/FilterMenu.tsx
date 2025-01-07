import React, { useState } from 'react';
import './FilterMenu.css';

const FilterMenu: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('New');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="filter-menu">
      <input type="text" className="search-bar" placeholder="Search" />
      <button
        className={`filter-button ${activeButton === 'New' ? 'active' : ''}`}
        onClick={() => handleButtonClick('New')}
      >
        New
      </button>
      <button
        className={`filter-button ${activeButton === 'Price ascending' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Price ascending')}
      >
        Price ascending
      </button>
      <button
        className={`filter-button ${activeButton === 'Price descending' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Price descending')}
      >
        Price descending
      </button>
      <button
        className={`filter-button ${activeButton === 'Rating' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Rating')}
      >
        Rating
      </button>
    </div>
  );
};

export default FilterMenu;
