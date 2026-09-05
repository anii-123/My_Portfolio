import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import CommandPalette from './components/layout/CommandPalette';
import ProjectModal from './components/ui/ProjectModal';
import Home from './pages/Home';

function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Router>
      <div className="bg-[#0a0d14] text-slate-100 min-h-screen flex flex-col font-sans relative selection:bg-purple-500/30">
        <CustomCursor />
        <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onSelectProject={(project) => setSelectedProject(project)} />} />
            <Route path="*" element={<Home onSelectProject={(project) => setSelectedProject(project)} />} />
          </Routes>
        </main>

        <Footer />

        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </Router>
  );
}

export default App;
