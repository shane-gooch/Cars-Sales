import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { useSelector, useDispatch } from "react-redux";
import { ADD_FEATURE, REMOVE_FEATURE } from "./actions";

export default function App() {
  const [car, store, additionalPrice] = useSelector(state => [
    state.car,
    state.store,
    state.additionalPrice
  ]);
  const dispatch = useDispatch();

  const addFeature = newFeature => {
    dispatch({ type: ADD_FEATURE, payload: newFeature });
  };
  const removeFeature = removedFeature => {
    dispatch({ type: REMOVE_FEATURE, payload: removedFeature });
  };
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

//Rewrote using hooks

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     additionalPrice: state.additionalPrice,
//     total: state.total,
//     car: state.car,
//     store: state.store
//   };
// };

// export default connect(
//   mapStateToProps,
//   { addFeature, removeFeature }
// )(App);
