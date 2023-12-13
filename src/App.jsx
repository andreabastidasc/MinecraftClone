import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

import { Cubes } from './components/Cubes'
import { Ground } from './components/Ground'
import { Menu } from './components/Menu'
import { Player } from "./components/Player";
import { PointView } from './components/PointView'
import { TextureSelector } from './components/TextureSelector'

function App() {

    return (
        <>
            <Canvas>
                <Sky sunPosition={[100, 100, 20]} />
                <ambientLight intensity={0.5} />
                <PointView />
                <Physics>
                    <Cubes />
                    <Player />
                    <Ground />
                </Physics>
            </Canvas>
            <div className='pointer'>
                +
            </div>
            <h1>MINECRAFT BUT COOLER</h1>
            <TextureSelector />
            <Menu />
        </>
    );
}

export default App
