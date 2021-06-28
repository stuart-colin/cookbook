import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import RecipeDetail from './RecipeDetail';
import RecipeList from './RecipeList';
// import Filters from './Filters';
// import SideBar from './SideBar';

class App extends React.Component {
  state = { recipes: [], selectedRecipe: null };

  async componentDidMount() {
    const response = await axios.get('http://localhost:5001/_api/recipes');

    this.setState({
      recipes: response.data,
      // selectedRecipe: response.data[1],
    });
  }

  onRecipeSelect = (recipe) => {
    this.setState({ selectedRecipe: recipe });
  };

  render() {
    return (
      <div className="ui basic segment">
        {/* <div>
          <SideBar />
        </div> */}
        <div className="ui basic segment">
          <div>
            <div
              className="ui huge header"
              style={{
                paddingTop: '30px',
              }}
            >
              <a
                href="localhost:3000"
                style={{
                  paddingTop: '50px',
                  color: '#49d0ae',
                  fontFamily: 'Pacifico',
                  fontSize: '50px',
                }}
              >
                <em>Just the Recipe.</em>
              </a>
            </div>
            <div
              style={{ marginLeft: '25px', marginTop: '-10px', color: 'gray' }}
            >
              <em>All of the marshmallow, none of the fluff.</em>
            </div>
            <div className="ui basic padded segment">
              <SearchBar />
            </div>
            <div className="ui padded segment">
              <RecipeDetail recipe={this.state.selectedRecipe} />
            </div>
          </div>
          <div className="ui basic segment">{/* <Filters /> */}</div>
          <div>
            <RecipeList
              onRecipeSelect={this.onRecipeSelect}
              recipes={this.state.recipes}
              key={this.state.recipes.id}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
