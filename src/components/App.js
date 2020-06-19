import React from 'react';
// import SideBar from './SideBar';
import SearchBar from './SearchBar';
import Recipe from './Recipe';
import RecipeList from './RecipeList';

class App extends React.Component {
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
                <em>Just the Recipe</em>
              </a>
            </div>
            <div className="ui basic padded segment">
              <SearchBar />
            </div>
            <div className="ui padded segment">
              <Recipe />
            </div>
          </div>
          <div className="ui basic stackable padded grid">
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
            <RecipeList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
