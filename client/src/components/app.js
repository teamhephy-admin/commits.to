import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

const App = () => {
  return (
    <main>
      <h1>commits.to</h1>
    </main>
  )
}

export default hot(module)(App)

ReactDOM.render(<App />, document.getElementById('root'))
