import React from 'react'

const Hero = ({ activeTab, setActiveTab }) => {
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

      <div className="header-info">
        <span>Made with ❤️ • React + Vite</span>
      </div>
    </header>
  )
}

export default Hero