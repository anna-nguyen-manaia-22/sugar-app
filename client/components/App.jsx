import React from 'react'
// import { useDispatch } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'

// import { listBSRequest } from '../actions'
import ListBS from './ListBS'
import AddBS from './AddBS'

function App() {
  // const BS = useSelector((state) => state.BS)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(listBSRequest())
  // }, [])

  return (
    <div>
      <h1>Welcome to My Sugar App!</h1>
      <Routes>
        <Route path="/list-BS" element={<ListBS />} />
        <Route path="/add-BS" element={<AddBS />} />
      </Routes>

      <Link to="list-bs">My sugar list</Link>
      <br />
      <Link to="/add-BS">Add Blood Sugar Record</Link>
    </div>
  )
}

export default App
