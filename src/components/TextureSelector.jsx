import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import * as images from '../images/images';
import { useKeyboard } from "../hooks/useKeyboard";

const textureImages = {
    dirt: images.dirtImg,
    grass: images.grassImg,
    glass: images.glassImg,
    wood: images.woodImg,
    log: images.logImg
}

export const TextureSelector = () => {
    const [visible, setVisible] = useState(true);
    const [texture, setTexture] = useStore(state => [state.texture, state.setTexture]);

    const {
        dirt,
        grass,
        glass,
        wood,
        log
    } = useKeyboard();

    const textures = {
        dirt,
        grass,
        glass,
        wood,
        log
    }

    useEffect(() => {
        const selectedTexture = Object.entries(textures).find(([texture, isEnabled]) => isEnabled);
        
        if (selectedTexture) {
            const [textureName] = selectedTexture;
            setTexture(textureName);
        }
        
    }, [dirt, glass, grass, wood, log])

    if (!visible) return null;

    return (
        <div className="texture-selector">
            {
                Object
                    .entries(textureImages)
                    .map(([imgKey, img]) => {
                        return (
                            <img
                                className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
                                key={imgKey}
                                src={img}
                                alt={imgKey}
                                onClick={() => setTexture(imgKey.replace('Img', ''))}
                            />
                        )
                    })
            }
        </div>
    );
}
