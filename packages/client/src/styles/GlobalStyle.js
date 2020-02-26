import { createGlobalStyle } from 'styled-components'
import { darken, normalize } from 'polished'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: white;
    overflow-x: hidden;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html,
  body,
  #app {
    height: 100%;
  }
  body {
    color: black;
    h1 {
      margin: 0;
      font-size: 5rem;
    }
    h2 {
      margin: 0;
      font-size: 2rem;
      }
    p {
      margin: 0;
      font-size: 1.25rem;
    }
    a {
      text-decoration: none;
      cursor: pointer;
      transition: all .2s ease-in-out;
      color: white;
      &:active, &:hover, &:focus {
        outline: none;
        color: ${darken(0.2, 'white')};
      }
    }
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style-type: none;
    }
    button {
      &:focus {
        outline: none;
      }
    }
  }
`

export default GlobalStyle
