import React, { useState, useEffect } from 'react'
import Article from './components/Article'

function App() {
  const [articles, setArticles] = useState([])
  const [subreddit, setSubreddit] = useState('webdev')

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`).then((res) => {
      if (res.status != 200) {
        console.log('error')
        return
      }
      res.json().then((data) => {
        if (data != null) {
          setArticles(data.data.children)
        }
      })
    })
  }, [subreddit])

  return (
    <div className='App'>
      <header className='App-header'>
        <input type='text' className='input' value={subreddit} onChange={(e => setSubreddit(e.target.value))} />
      </header>
      <div className='articles'>
        {articles != null &&
          articles.map((article, index) => {
            let title = article.data.title;
            let link = article.data.permalink;
             return <Article key={index} title={title} link={link} />
          })}
      </div>
    </div>
  ) 
}

export default App
