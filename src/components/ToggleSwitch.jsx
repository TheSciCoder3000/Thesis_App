import { useEffect, useState } from "react"

function ToggleSwitch({ value, onChange }) {
    const [on, setOn] = useState(value ?? false);

    useEffect(() => {
        if (onChange) onChange(on);
    }, [on])

    return (
        <div className={`switch-container${on ? " active" : ""}`} onClick={() => setOn(state => !state)}>
            <div className="switch-button"></div>
        </div>
    )
}

export default ToggleSwitch