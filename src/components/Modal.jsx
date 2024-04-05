import { useStore } from "../hooks/useStore"

export const ResetModal = ({setShow}) => {
    const [resetWorld] = useStore((state) => [state.resetWorld]);
    
    const onClickReset = () => {
        setShow(false)
        resetWorld()
    }

    return (
        <div className="modal">
            <p>Resetting will delete all your progress. Are you sure you want to proceed?</p>
            <div className="modal-button-container">
                <button className="save" onClick={() => setShow(false)}>Cancel</button>
                <button className="reset" onClick={onClickReset}>Reset</button>
            </div>
        </div>
    )
}