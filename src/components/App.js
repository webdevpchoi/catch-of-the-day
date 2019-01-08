import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import '../css/style.css';

class App extends React.Component {
  state = {
    fishes: {}
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish-${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="this shit cool" age={200} />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
