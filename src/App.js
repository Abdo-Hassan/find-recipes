import React, { useEffect, useState, Fragment } from 'react';
import Recipe from './recipes/Recipe';
import Form from './recipes/Form';
import Loading from './loading/Loading';
import './App.css';

function App() {
  const APP_ID = 'dca65dd5';
  const APP_KEY = '0a17b9d0cf77d604e20cc7f13111909a';

  const [recipes, setRecipes] = useState(null);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('apple');

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className='App'>
      {!recipes ? (
        <Loading />
      ) : (
        <Fragment>
          <h1 className='display-4 font-weight-bold text-center p-3 main-title'>
            Find Recipes
          </h1>
          <Form
            search={search}
            getSearch={getSearch}
            updateSearch={updateSearch}
          />
          <div className='container'>
            <div className='row'>
              {recipes.map(recipe => (
                <div
                  className='col-lg-4 col-md-6 col-xs-12 main-recipe'
                  key={Math.random() * 1000}
                >
                  <Recipe
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                  />
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
