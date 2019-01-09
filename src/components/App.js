import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import '../css/style.css';
import fishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish-${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes });
  };

  addToOrder = key => {
    console.log('adding fish');
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="this shit cool" age={200} />
          <ul>
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                details={this.state.fishes[key]}
                key={key}
                identifier={key}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
