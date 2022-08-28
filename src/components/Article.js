import React from 'react'

function Article(props) {
  return (
    <article>
      <a href={`https://www.reddit.com/${props.link}`} target="_blank" rel="noreferrer" >
        <h3>{props.title}</h3>
      </a>
    </article>
  )
}

export default Article
