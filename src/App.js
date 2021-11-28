import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <LoadingBar />
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
        <Route
          path="/"
          element={<Link to="/greeting">Get random greeting</Link>}
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
