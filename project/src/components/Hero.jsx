import React, { useState } from 'react'

const Hero = ({ activeTab, setActiveTab }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  
  const tabs = [
    { id: 'calculator', label: 'Calculator', icon: '🧮' },
    { id: 'todo', label: 'Todo List', icon: '✓' },
    { id: 'notes', label: 'Notes', icon: '📝' }
  ]

  return (
    <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button 
          className="sidebar-toggle"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        >
          {isSidebarCollapsed ? '→' : '←'}
        </button>
        {!isSidebarCollapsed && (
          <div className="sidebar-brand">
            <h1 className="sidebar-title">
              <span className="gradient-text">MultiTool</span>
            </h1>
            <p className="sidebar-subtitle">
              Your productivity companion
            </p>
          </div>
        )}
      </div>
      
      <nav className="sidebar-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`sidebar-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            title={tab.label}
          >
            <span className="sidebar-icon">{tab.icon}</span>
            {!isSidebarCollapsed && (
              <span className="sidebar-label">{tab.label}</span>
            )}
          </button>
        ))}
      </nav>

      {!isSidebarCollapsed && (
        <div className="sidebar-footer">
          <div className="sidebar-info">
            <p>Made with ❤️</p>
            <p>React + Vite</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero