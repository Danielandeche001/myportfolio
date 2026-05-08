import { useState } from 'react'
import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import SearchBar from './components/SearchBar'
import ProjectList from './components/ProjectList'
import './App.css'

const initialProjects = [
  { id: 1, title: 'Project 1', description: 'Description of the project' },
  { id: 2, title: 'Project 2', description: 'Description of the project' },
  { id: 3, title: 'Project 3', description: 'Description of the project' },
]

function App() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchQuery, setSearchQuery] = useState('')

  function handleAddProject(newProject) {
    setProjects((prev) => [...prev, newProject])
  }

  function handleDeleteProject(id) {
    setProjects((prev) => prev.filter((p) => p.id !== id))
  }

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ProjectForm onAddProject={handleAddProject} />
        <div className="projects-section">
          <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
          <ProjectList projects={filteredProjects} onDelete={handleDeleteProject} />
        </div>
      </main>
    </div>
  )
}

export default App
