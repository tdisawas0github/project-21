import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Calc from './components/Calc'
import Todo from './components/Todo'
import Notes from './components/Notes'

const themes = {
  default: {
    name: 'Ocean Blue',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    primary: '#3498db',
    secondary: '#2980b9',
    accent: '#e74c3c'
  },
  sunset: {
    name: 'Sunset Orange',
    background: 'linear-gradient(135deg, #ff9a56 0%, #f857a6 100%)',
    primary: '#ff6b35',
    secondary: '#f7931e',
    accent: '#c44569'
  },
  forest: {
    name: 'Forest Green',
    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    primary: '#27ae60',
    secondary: '#16a085',
    accent: '#e67e22'
  },
  purple: {
    name: 'Purple Dream',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    primary: '#9b59b6',
    secondary: '#8e44ad',
    accent: '#e91e63'
  },
  dark: {
    name: 'Dark Mode',
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    primary: '#3498db',
    secondary: '#2980b9',
    accent: '#e74c3c'
  },
  rainbow: {
    name: 'Rainbow',
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 25%, #fecfef 50%, #a8edea 75%, #fed6e3 100%)',
    primary: '#ff6b6b',
    secondary: '#4ecdc4',
    accent: '#45b7d1'
  }
}

function App() {
  const [activeTab, setActiveTab] = useState('calculator')
  const [currentTheme, setCurrentTheme] = useState('default')

  useEffect(() => {
    const savedTheme = localStorage.getItem('multiToolTheme')
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('multiToolTheme', currentTheme)
    const theme = themes[currentTheme]
    document.documentElement.style.setProperty('--theme-background', theme.background)
    document.documentElement.style.setProperty('--theme-primary', theme.primary)
    document.documentElement.style.setProperty('--theme-secondary', theme.secondary)
    document.documentElement.style.setProperty('--theme-accent', theme.accent)
  }, [currentTheme])

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
      <Hero 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        themes={themes}
      />
      <main className="main-content">
        <div className="content-wrapper">
          {renderActiveComponent()}
        </div>
      </main>
    </div>
  )
}

export default App
