import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticleDetail from './pages/ArticleDetail';
import { Provider } from 'react-redux';
import store from './redux/store';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:title" element={<ArticleDetail />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
