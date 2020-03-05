import React, { useEffect, useState } from 'react'

function App() {
  const [received, setReceived] = useState('world')
  // useEffect(() => {
  //   fetch('/api/products')
  //     .then(res => res.json())
  //     .then(body => body.data)
  //     .then(data => setReceived(data[0].NAME))
  // }, [])

  return <h1>second deploy, hey {received}</h1>
}

export default App
