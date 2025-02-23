import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <marquee>Welcome to Chef's Palette where you can see new recipes</marquee>
      <img src="/ban.jpg" className="img-fluid w-100 pt-1" alt="Banner" />

      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
        {/* Veg Recipes */}
        <div className="col">
          <div className="card" onClick={() => handleCardClick('/veg-recipes')} style={{ cursor: 'pointer' }}>
            <img src="/veg.jpg" className="card-img-top" alt="Veg Recipes" />
            <div className="card-body">
              <h5 className="card-title">View Card</h5>
              <p className="card-text">Click to explore all Veg Recipes</p>
            </div>
          </div>
        </div>

        {/* Non-Veg Recipes */}
        <div className="col">
          <div className="card" onClick={() => handleCardClick('/non-veg-recipes')} style={{ cursor: 'pointer' }}>
            <img src="/non-veg.jpg" className="card-img-top" alt="Non-Veg Recipes" />
            <div className="card-body">
              <h5 className="card-title">View Card</h5>
              <p className="card-text">Click to explore all Non-Veg Recipes</p>
            </div>
          </div>
        </div>

        {/* Veg Starter */}
        <div className="col">
          <div className="card" onClick={() => handleCardClick('/veg-starter')} style={{ cursor: 'pointer' }}>
            <img src="/veg-starter.jpg" className="card-img-top" alt="Veg Starter" />
            <div className="card-body">
              <h5 className="card-title">View Card</h5>
              <p className="card-text">Click to explore all Veg Starter Recipes</p>
            </div>
          </div>
        </div>

        {/* Non-Veg Starter */}
        <div className="col">
          <div className="card" onClick={() => handleCardClick('/non-veg-starter')} style={{ cursor: 'pointer' }}>
            <img src="/non-veg-starter.jpg" className="card-img-top" alt="Non-Veg Starter" />
            <div className="card-body">
              <h5 className="card-title">View Card</h5>
              <p className="card-text">Click to explore all Non-Veg Starter Recipes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
