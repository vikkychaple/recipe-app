// src/components/RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div className="card h-100">
      <img src={recipe.image} className="card-img-top" alt={recipe.name} />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text">Category: {recipe.category}</p>
        
        <Link to={`/recipe/${recipe._id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
