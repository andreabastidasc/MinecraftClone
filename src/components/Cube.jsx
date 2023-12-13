import { useBox } from "@react-three/cannon";
import * as textures from '../images/textures';
import { useState } from "react";
import { useStore } from "../hooks/useStore";

export const Cube = ({id, position, texture}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))

    const [addCube, removeCube] = useStore(state => [state.addCube, state.removeCube])
    const activeTexture = textures[texture + 'Texture']

    return (
        <mesh
            ref={ref}
            onPointerMove={e => {
                e.stopPropagation();
                setIsHovered(true);
            }}
            onPointerOut={e => {
                e.stopPropagation();
                setIsHovered(false);
            }}
            onClick={e => {
                e.stopPropagation();
                const clickedFace = Math.floor(e.faceIndex /2);
                const {x, y, z} = ref.current.position;

                if (e.altKey) {
                    removeCube(id)
                } else {
                    switch (clickedFace) {
                    case 0:
                        addCube(x + 1, y, z);
                        break;
                    case 1:
                        addCube(x - 1, y, z);
                        break;
                    case 2:
                        addCube(x, y + 1, z);
                        break;
                    case 3:
                        addCube(x, y - 1, z);
                        break;
                    case 4:
                        addCube(x, y, z + 1);
                        break;
                    case 5:
                        addCube(x, y, z - 1);
                        break;
                            
                    default:
                        break;
                    }
                }
            }}
        >
            <boxGeometry attach='geometry' />
            <meshStandardMaterial
                color={isHovered ? 'grey' : 'white'}
                transparent
                attach='material'
                map={activeTexture}
            />
        </mesh>
    )
}
