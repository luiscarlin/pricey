import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './styles/GlobalStyle'

function Root() {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  )
}

ReactDOM.render(<Root />, document.getElementById('app'))
