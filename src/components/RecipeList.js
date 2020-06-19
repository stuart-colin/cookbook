import React from 'react';
import recipe from '../recipes/Recipe1.json';

class RecipeList extends React.Component {
  render() {
    return (
      <div className="eight wide column">
        <div className="ui unstackable link items">
          <div className="item">
            <div className="ui tiny image">
              <img alt={recipe.name} src={recipe.image[3]} />
            </div>
            <div className="middle aligned content">
              <div className="header">{recipe.name}</div>
              <div className="meta">
                <span>{recipe.author.name}</span>
              </div>
              <div className="description">
                <span>{recipe.description}</span>
              </div>
              <div className="extra">
                <span>
                  {recipe.prepTime} | {recipe.cookTime} | {recipe.totalTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeList;
