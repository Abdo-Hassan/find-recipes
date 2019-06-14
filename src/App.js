import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const APP_ID = 'dca65dd5';
  const APP_KEY = '0a17b9d0cf77d604e20cc7f13111909a';

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
      ))}
    </div>
  );
}

export default App;
