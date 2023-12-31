import { useStore } from "../hooks/useStore"

export const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld]);

    return (
        <div className="menu">
            <button className="save" onClick={() => saveWorld()}>Save</button>
            <button className="reset" onClick={() => resetWorld()}>Reset</button>
        </div>
    )
}