import React from 'react';

const RecipeList = (props) => {
  const recipes = props.recipes.map((recipe) => {
    return (
      <div className="eight wide column" key={recipe.id}>
        <div
          className="ui unstackable link items"
          onClick={() => props.onRecipeSelect(recipe)}
        >
          <div className="item">
            <div className="ui tiny image">
              <img alt={recipe.recipe.name} src={recipe.recipe.details.image} />
            </div>
            <div className="middle aligned content">
              <div className="header">{recipe.recipe.name}</div>
              <div className="meta">
                <span>{recipe.recipe.details.author.name}</span>
              </div>
              <div className="description">
                <span>{recipe.recipe.details.description}</span>
              </div>
              <div className="extra">
                <span>
                  {recipe.recipe.details.prepTime} |{' '}
                  {recipe.recipe.details.cookTime} |{' '}
                  {recipe.recipe.details.totalTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="ui basic stackable padded grid">{recipes}</div>;
};

export default RecipeList;
