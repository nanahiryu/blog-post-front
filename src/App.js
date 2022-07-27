import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './App.css';
import { DiaryApiFetch } from './components/DiaryApiFetch';
import { CategoryApiFetch } from './components/CategoryApiFetch';
import { PostDiary } from './components/PostDiary';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Diary</Link>
        <br/>
        <Link to="/category">Category</Link>
        <br/>
        <Link to="/post">Post</Link>
      </div>
      <Routes>
        <Route path={`/`} element={<DiaryApiFetch />} />
        <Route path={`/category/`} element={<CategoryApiFetch />} />
        <Route path={`/post/`} element={<PostDiary />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
