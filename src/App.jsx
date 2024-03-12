import React from 'react'
import UpperToolbar from './components/UpperToolbar';
import MainContent from './components/MainContent'
import BottomToolbar from './components/BottomToolbar'
const App = () => {
  return (
    <>
    <UpperToolbar />
      <BottomToolbar />
      <MainContent />
    </>
  )
}

export default App
