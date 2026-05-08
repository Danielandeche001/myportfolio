import { useState } from 'react'

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return
    onAddProject({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    })
    setTitle('')
    setDescription('')
  }

  return (
    <div className="form-container">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter project title"
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter project description"
          rows={4}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ProjectForm
