import './App.css'
import { Canvas } from '@react-three/fiber'
import HeroScene from './components/HeroScene'

function App() {
  return (
    <div className="viewport">
      <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 50 }}>
        <HeroScene />
      </Canvas>

      <div className="overlay">
        <div className="brand">3D Studio</div>
        <h1 className="headline">Design in Motion</h1>
        <p className="subtitle">Interactive 3D experiences for modern web.</p>
        <div className="cta-row">
          <a className="btn primary" href="#portfolio">View Work</a>
          <a className="btn" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default App
