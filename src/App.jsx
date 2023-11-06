import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { PointView } from './components/PointView'

function App() {

  return (
    <>
      <h1>Minecraft "cooler" Clone</h1>
      <Canvas>
          <Sky sunPosition={[100, 100, 20]} />
          <ambientLight intensity={0.5} />
          <PointView />
          <Physics>
            <Ground />
          </Physics>
      </Canvas>
    </>
  )
}

export default App
