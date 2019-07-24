import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions";

class App extends React.Component {
  render() {
    const {
      car,
      store,
      addFeature,
      removeFeature,
      additionalPrice
    } = this.props;
    return (
      <div className="boxes">
        <div className="box">
          <Header car={car} />
          <AddedFeatures car={car} removeFeature={removeFeature} />
        </div>
        <div className="box">
          <AdditionalFeatures store={store} addFeature={addFeature} />
          <Total car={car} additionalPrice={additionalPrice} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  { addFeature, removeFeature }
)(App);
