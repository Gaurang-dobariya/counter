import React, { useState } from 'react'

const App = () => {

  let [count, setcount] = useState(0)

  return (
    <>
      <div class="d-flex mx-auto col-3">
        <button onClick={() => setcount(count - 1)}>-</button>
        <h1>{count}</h1>
        <button onClick={() => setcount(count + 1)}>+</button>
      </div>
    </>
  )
}

export default App