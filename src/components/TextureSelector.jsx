import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import * as images from '../images/images';
import { useKeyboard } from "../hooks/useKeyboard";

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false);
    const [texture, setTexture] = useStore(state => [state.texture, state.setTexture]);

    const {
        dirt,
        grass,
        glass,
        wood,
        log
    } = useKeyboard();

    useEffect(() => {
        const options = {
            dirt,
            grass,
            glass,
            wood,
            log
        }

        const selectedTexture = Object.entries(options).find(([texture, isEnabled]) => isEnabled);
        
        if (selectedTexture) {
            const [textureName] = selectedTexture;
            setTexture(textureName);
        }
        
    }, [dirt, glass, grass, wood, log])

    return null;
}
