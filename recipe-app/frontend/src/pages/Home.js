

import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeCard from '../components/RecipeCard';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes`);
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase()) ||
    recipe.category.toLowerCase().includes(search.toLowerCase()) ||
    recipe.ingredients.some(ingredient =>
      ingredient.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Recipe List</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by name, category, or ingredient"
        value={search}
        onChange={handleSearch}
      />
      <div className="row">
        {filteredRecipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe._id}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
