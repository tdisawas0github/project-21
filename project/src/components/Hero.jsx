import React, { useState } from 'react'

const Hero = ({ activeTab, setActiveTab, currentTheme, setCurrentTheme, themes }) => {
  const [showThemeSelector, setShowThemeSelector] = useState(false)
  
  const tabs = [
    { id: 'calculator', label: 'Calculator', icon: '🧮' },
    { id: 'todo', label: 'Todo List', icon: '✓' },
    { id: 'notes', label: 'Notes', icon: '📝' }
  ]

  return (
    <header className="header-bar">
      <div className="header-brand">
        <h1 className="header-title">
          <span className="gradient-text">MultiTool</span>
        </h1>
        <p className="header-subtitle">Your productivity companion</p>
      </div>
      
      <nav className="header-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`header-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            title={tab.label}
          >
            <span className="header-icon">{tab.icon}</span>
            <span className="header-label">{tab.label}</span>
          </button>
        ))}
      </nav>

      <div className="header-actions">
        <div className="theme-selector">
          <button 
            className="theme-button"
            onClick={() => setShowThemeSelector(!showThemeSelector)}
            title="Change Theme"
          >
            🎨
          </button>
          
          {showThemeSelector && (
            <div className="theme-dropdown">
              {Object.entries(themes).map(([key, theme]) => (
                <button
                  key={key}
                  className={`theme-option ${currentTheme === key ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentTheme(key)
                    setShowThemeSelector(false)
                  }}
                >
                  <span className="theme-preview" style={{background: theme.background}}></span>
                  <span className="theme-name">{theme.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="header-info">
          <span>Made with ❤️ • React + Vite</span>
        </div>
      </div>
    </header>
  )
}

export default Hero