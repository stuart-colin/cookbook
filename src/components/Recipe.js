import React from 'react';
import recipe from '../recipes/Recipe1.json';

const Recipe = () => {
  const ingredients = recipe.recipeIngredient.map((ingredient) => {
    return (
      <li key={ingredient} className="item">
        {ingredient}
      </li>
    );
  });

  const preparation = recipe.recipeInstructions.map((instruction) => {
    return (
      <li key={instruction.name} className="item">
        {instruction.text}
      </li>
    );
  });

  return (
    <div>
      <div className="ui stackable vertical segment">
        <h2>{recipe.name}</h2>
        <h3>{recipe.author.name}</h3>
      </div>
      <div className="ui stackable divided grid vertical padded segment">
        <div className="row">
          <div className="four wide column">
            <img alt={recipe.name} src={recipe.image[3]} width="relative" />
          </div>
          <div className="four wide column">
            <h3 className="ui header">Ingredients</h3>
            <ul>{ingredients}</ul>
          </div>
          <div className="eight wide column">
            <h3 className="ui header">Preparation</h3>
            <div className="ui ordered list">{preparation}</div>
          </div>
        </div>
      </div>
      <div className="ui vertical right aligned segment">
        This recipe was originally found{' '}
        <a href="localhost:3000" style={{ color: '#49d0ae' }}>
          here
        </a>
        .
      </div>
    </div>
  );
};

export default Recipe;
