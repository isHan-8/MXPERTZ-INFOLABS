// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoryList from './components/StoryList';
import StoryDetail from './components/StoryDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StoryList />} />
        <Route path="/story/:id" element={<StoryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
