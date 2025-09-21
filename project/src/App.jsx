import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Calc from './components/Calc'
import Todo from './components/Todo'
import Notes from './components/Notes'

function App() {
  const [activeTab, setActiveTab] = useState('calculator')

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'calculator':
        return <Calc />
      case 'todo':
        return <Todo />
      case 'notes':
        return <Notes />
      default:
        return <Calc />
    }
  }

  return (
    <div className="app">
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        <div className="content-wrapper">
          {renderActiveComponent()}
        </div>
      </main>
    </div>
  )
}

export default App
