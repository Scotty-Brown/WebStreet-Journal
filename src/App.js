import './App.css';
import { Routes, Route } from 'react-router-dom';
import { fetchArticles } from './apiCalls';
import { useEffect, useState } from 'react';
import { sampleData } from './sampleData';
import Header from './Components/Header/Header';
import ArticlePreview from './Components/ArticlePreview/ArticlePreview';

function App() {

  const [articles, setArticles] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    // fetchArticles()
    // .then(data => setArticles(data.articles))
    // .catch(error => setError(error.message))
    setArticles(sampleData.articles)
  }, [])

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<ArticlePreview articles={articles}/>}/>
      </Routes>
    </div>
  )
}

export default App;
