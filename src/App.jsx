import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Demo from './components/Demo'
import  Update  from './components/UpdateNotes'
const App = () => {
  return (
   <Routes>
      <Route path='/' element={<Demo/>}/>
      <Route path='update' element={<Update/>}/>
   </Routes>
  )
}

export default App