import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ListBS from './ListBS'
import AddBS from './AddBS'
import GraphBS from './GraphBS'
import Nav from './Nav'

function App() {
  return (
    <div>
      <h1>Welcome to My Sugar App!</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<GraphBS />} />
        <Route path="list-BS" element={<ListBS />} />
        <Route path="add-BS" element={<AddBS />} />
      </Routes>
    </div>
  )
}

export default App
