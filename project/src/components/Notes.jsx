import React, { useState, useEffect } from 'react'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes')
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes)
      setNotes(parsedNotes)
      if (parsedNotes.length > 0) {
        setSelectedNote(parsedNotes[0])
        setTitle(parsedNotes[0].title)
        setContent(parsedNotes[0].content)
      }
    }
  }, [])

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const createNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: 'New Note',
      content: '',
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString()
    }
    setNotes([newNote, ...notes])
    setSelectedNote(newNote)
    setTitle(newNote.title)
    setContent(newNote.content)
    setIsEditing(true)
  }

  const selectNote = (note) => {
    if (isEditing) {
      saveNote()
    }
    setSelectedNote(note)
    setTitle(note.title)
    setContent(note.content)
    setIsEditing(false)
  }

  const saveNote = () => {
    if (selectedNote) {
      const updatedNotes = notes.map(note =>
        note.id === selectedNote.id
          ? {
              ...note,
              title: title || 'Untitled',
              content: content,
              updatedAt: new Date().toLocaleDateString()
            }
          : note
      )
      setNotes(updatedNotes)
      setSelectedNote({
        ...selectedNote,
        title: title || 'Untitled',
        content: content,
        updatedAt: new Date().toLocaleDateString()
      })
      setIsEditing(false)
    }
  }

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter(note => note.id !== noteId)
    setNotes(updatedNotes)
    
    if (selectedNote && selectedNote.id === noteId) {
      if (updatedNotes.length > 0) {
        setSelectedNote(updatedNotes[0])
        setTitle(updatedNotes[0].title)
        setContent(updatedNotes[0].content)
      } else {
        setSelectedNote(null)
        setTitle('')
        setContent('')
      }
    }
    setIsEditing(false)
  }

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    setIsEditing(true)
  }

  const handleContentChange = (e) => {
    setContent(e.target.value)
    setIsEditing(true)
  }

  return (
    <div className="notes-app">
      <div className="notes-sidebar">
        <div className="notes-header">
          <h2>Notes</h2>
          <button onClick={createNewNote} className="new-note-btn">
            + New Note
          </button>
        </div>
        
        <div className="search-section">
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="notes-list">
          {filteredNotes.length === 0 ? (
            <div className="empty-notes">
              {searchTerm ? 'No notes match your search.' : 'No notes yet. Create your first note!'}
            </div>
          ) : (
            filteredNotes.map(note => (
              <div
                key={note.id}
                className={`note-item ${selectedNote?.id === note.id ? 'selected' : ''}`}
                onClick={() => selectNote(note)}
              >
                <div className="note-preview">
                  <h4 className="note-title-preview">{note.title}</h4>
                  <p className="note-content-preview">
                    {note.content.slice(0, 100)}
                    {note.content.length > 100 ? '...' : ''}
                  </p>
                  <span className="note-date">{note.updatedAt}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteNote(note.id)
                  }}
                  className="delete-note-btn"
                  title="Delete note"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="notes-editor">
        {selectedNote ? (
          <>
            <div className="editor-header">
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className="note-title-input"
                placeholder="Note title..."
              />
              <div className="editor-actions">
                {isEditing && (
                  <button onClick={saveNote} className="save-btn">
                    Save
                  </button>
                )}
                <span className="last-updated">
                  Last updated: {selectedNote.updatedAt}
                </span>
              </div>
            </div>
            <textarea
              value={content}
              onChange={handleContentChange}
              className="note-content-input"
              placeholder="Start writing your note..."
            />
          </>
        ) : (
          <div className="no-note-selected">
            <h3>Select a note to start editing</h3>
            <p>Choose a note from the sidebar or create a new one.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Notes