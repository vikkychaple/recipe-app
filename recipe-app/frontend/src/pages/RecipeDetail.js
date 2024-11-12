// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function RecipeDetail() {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes/${id}`);
//         setRecipe(response.data);
//       } catch (error) {
//         console.error('Error fetching recipe:', error);
//       }
//     };

//     fetchRecipe();
//   }, [id]);

//   if (!recipe) {
//     return <div className="container mt-4">Loading...</div>;
//   }

//   return (
//     <div className="container mt-4">
//       <div className="card">
//         <img src={recipe.image} className="card-img-top" alt={recipe.name} />
//         <div className="card-body">
//           <h3 className="card-title">{recipe.name}</h3>
//           <p className="card-text"><strong>Category:</strong> {recipe.category}</p>
//           <h5>Ingredients</h5>
//           <ul className="list-group list-group-flush">
//             {recipe.ingredients.map((ingredient, index) => (
//               <li key={index} className="list-group-item">{ingredient}</li>
//             ))}
//           </ul>
//           <h5 className="mt-3">Instructions</h5>
//           <p className="card-text">{recipe.instructions}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RecipeDetail;

// src/pages/RecipeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <img src={recipe.image} className="card-img-top" alt={recipe.name} />
        <div className="card-body">
          <h3 className="card-title">{recipe.name}</h3>
          <p className="card-text"><strong>Category:</strong> {recipe.category}</p>
          <h5>Ingredients</h5>
          <ul className="list-group list-group-flush">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">{ingredient}</li>
            ))}
          </ul>
          <h5 className="mt-3">Instructions</h5>
          <p className="card-text">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
