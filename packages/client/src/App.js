import React, { useEffect, useState } from 'react'

function App() {
  const [received, setReceived] = useState('')
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(body => body.data)
      .then(data => setReceived(data[0].NAME))
  }, [])

  return <h1>hello there {received}</h1>
}

export default App
