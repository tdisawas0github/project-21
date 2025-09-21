import React from 'react'

const Hero = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'calculator', label: 'Calculator', icon: '🧮' },
    { id: 'todo', label: 'Todo List', icon: '✓' },
    { id: 'notes', label: 'Notes', icon: '📝' }
  ]

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">MultiTool</span>
        </h1>
        <p className="hero-subtitle">
          Your all-in-one productivity companion
        </p>
        
        <nav className="tab-navigation">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Hero