import React from 'react';

// const doToggle = $('.ui.sidebar').sidebar('toggle');

class SideBar extends React.Component {
  state = { name: '' };
  render() {
    return (
      <div>
        <div className={`ui sidebar ${this.state.name} vertical menu`}>
          <a className="item">Chicken Korma</a>
          <a className="item">Barbeque Chicken Pizza</a>
          <a className="item">Apple Pie</a>
        </div>
        <div class="pusher">
          <div class="ui basic segment">
            <h3 class="ui header">
              <button
                // className={this.state.name && 'visible'}
                onMouseDown={() => this.setState({ name: 'visible' })}
                onMouseUp={() => this.setState({ name: '' })}
              >
                Menu
              </button>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
