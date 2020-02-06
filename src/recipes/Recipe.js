import React, { useState, Fragment } from 'react';
const Recipe = ({ title, calories, image, ingredients }) => {
  const [showMore, setShowMore] = useState('hide-ingredients');
  const [showMoreText, setShowMoreText] = useState(true);
  const handleClick = () => {
    setShowMore('show-ingredients');
    setShowMoreText(!showMoreText);
    if (!showMoreText) {
      setShowMore('hide-ingredients');
    }
  };

  return (
    <Fragment>
      <div
        className='card main-card'
        style={{ marginBottom: 10, borderRadius: 5 }}
      >
        <img src={image} alt='recipe' />
        <div className='card-body'>
          <h5 className='card-title title font-weight-bold'>{title}</h5>
          <p className='card-title font-weight-bold text-center'>
            Ingredients :{' '}
          </p>
          <ol
            className={ingredients.length > 3 ? showMore : 'normal-ingredients'}
          >
            {ingredients.map(ingredient => (
              <li key={Math.random() * 10000}>{ingredient.text}</li>
            ))}
          </ol>
          {ingredients.length > 3 && (
            <button
              type='button'
              className='btn btn-secondary btn-block mb-4'
              onClick={handleClick}
              style={{ boxShadow: 'none' }}
            >
              {showMoreText ? 'Show More' : 'Show Less'}
            </button>
          )}
          <p style={{ fontWeight: 'bold' }} className='card-text text-center'>
            Calories : {Math.ceil(calories)} Calorie 🔥
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Recipe;
