import { useStore } from "../hooks/useStore"

export const Menu = ({onClickReset}) => {
    const [saveWorld] = useStore((state) => [state.saveWorld]);

    return (
        <div className="menu">
            <button className="save" onClick={() => saveWorld()}>Save</button>
            <button className="reset" onClick={onClickReset}>Reset</button>
        </div>
    )
}