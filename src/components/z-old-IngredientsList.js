import React from 'react';
import recipe from '../recipes/Recipe1.json';

class IngredientsList extends React.Component {
  render() {
    console.log(recipe.name);
    return (
      <div>
        <h3 className="ui header">Ingredients</h3>
        <ul>
          <li className="item">An item</li>
          <li className="item">An item</li>
          <li className="item">An item</li>
          <li className="item">An item</li>
        </ul>
      </div>
    );
  }
}

export default IngredientsList;
