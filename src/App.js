import './App.css';
import { Router } from 'react-router-dom';
import { fetchArticles } from './apiCalls';
import { useEffect, useState } from 'react';
import { sampleData } from './sampleData';
import Header from './Components/Header/Header';

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
      {/* <Router>

      </Router> */}
    </div>
  )
}

export default App;
