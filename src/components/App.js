import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import "../css/style.css";

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="this shit cool" age={200} />
        </div>
        <Inventory />
        <Order />
      </div>
    );
  }
}

export default App;
