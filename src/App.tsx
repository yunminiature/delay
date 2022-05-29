import React from 'react';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from "./store";
import Home from "./components/Home";


function App() {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home/>
        </PersistGate>
    </Provider>
  );
}

export default App;
