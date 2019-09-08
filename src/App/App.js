import React, { Component } from 'react';
import './App.css';
import Cart from '../Cart/Cart'
import FeaturesList from '../FeaturesList/FeaturesList'
import FEATURES from '../STORE'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: FEATURES.Processor[0],
        Operating_System: FEATURES.Operating_System[0],
        Video_Card: FEATURES.Video_Card[0],
        Display: FEATURES.Display[0],
      }
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    return (
        <div className="App">
          <header>
            <h1>ELF Computing | Laptops</h1>
          </header>
          <main>
            <FeaturesList
                features={this.props.features}
                selected={this.state.selected}
                onSelect={this.updateFeature}
            />
            <Cart selected={this.state.selected} />
          </main>
        </div>
    );
  }
}

export default App;
