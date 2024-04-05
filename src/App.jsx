import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { useState } from 'react'

import { Cubes } from './components/Cubes'
import { Ground } from './components/Ground'
import { Menu } from './components/Menu'
import { Player } from "./components/Player";
import { PointView } from './components/PointView'
import { ResetModal } from './components/Modal'
import { TextureSelector } from './components/TextureSelector'


function App() {
    const [showResetModal, setShowResetModal] = useState(false)

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
            <Menu onClickReset={() => setShowResetModal(true)} />
            {showResetModal && <ResetModal setShow={setShowResetModal} />}
        </>
    );
}

export default App
