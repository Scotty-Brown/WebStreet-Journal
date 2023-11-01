import './App.css';
import { Router } from 'react-router-dom';
import { fetchArticles } from './apiCalls';
import { useEffect, useState } from 'react';
import { sampleData } from './sampleData';

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
      {/* <Router>

      </Router> */}
    </div>
  )
}

export default App;
