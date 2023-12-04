import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../images/textures';
import { useStore } from "../hooks/useStore";

export function Ground() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0.5, 0],
    }));

    const [addCube] = useStore(state => [state.addCube]);

    const handleClickGround = e => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map(n => Math.ceil(n));
        addCube(x, y, z);
    }

    groundTexture.repeat.set(100, 100)

    return (
        <mesh 
            ref={ref}
            onClick={ handleClickGround }
        >
            <planeGeometry attach="geometry" args={[100, 100]}/>
            <meshStandardMaterial attach="material" map={groundTexture} />
        </mesh>
    )

}
