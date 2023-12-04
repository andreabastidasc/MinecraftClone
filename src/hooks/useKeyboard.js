import { useEffect, useState } from "react";

const ACTIONS_KEYBOARD_MAP = {
    KeyW: "moveForward",
    KeyS: "moveBackward",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
    KeyE: "interact",
    Digit1: "dirt",
    Digit2: "grass",
    Digit3: "glass",
    Digit4: "wood",
    Digit5: "log",
};

export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRigth: false,
        jump: false,
        dirt: false,
        grass: false,
        glass: false,
        wood: false,
        log: false,
    });

    useEffect(() => {
        const handleKeydown = (event) => {
            const { code } = event;
            const action = ACTIONS_KEYBOARD_MAP[code];

            if (action) {
                setActions((prevActions) => ({
                    ...prevActions,
                    [action]: true,
                }));
            }
        };

        const handleKeyup = (event) => {
            const { code } = event;
            const action = ACTIONS_KEYBOARD_MAP[code];

            if (action) {
                setActions((prevActions) => ({
                    ...prevActions,
                    [action]: false,
                }));
            }
        };

        document.addEventListener("keydown", handleKeydown);
        document.addEventListener("keyup", handleKeyup);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
            document.addEventListener("keyup", handleKeyup);
        };
    }, []);

    return actions;
};
