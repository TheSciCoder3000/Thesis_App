import { useEffect, useState } from "react"
import ToggleSwitch from "../ToggleSwitch";

const initialNameValue = {
    "last": null,
    "first": null,
    "middle": null
}

function Advisers({ className, onUpdateField }) {
    const [adviser, setAdviser] = useState(initialNameValue);
    const [coAdviser, setCoAdviser] = useState(initialNameValue);
    const [showCoAdviser, setShowCoAdviser] = useState(false);

    const updateState = (field, e, setState) => {
        setState(state => { return { ...state, [field]: e.target.value } })
    }

    useEffect(() => {
        onUpdateField({
            "adviser": adviser,
            "co-adviser": coAdviser
        })
    }, [adviser, coAdviser])

    const displayCoAdviser = (state) => {
        setShowCoAdviser(state);

        if (!state) {
            setCoAdviser(null);
        }
    }

    return (
        <div className={`category-container ${className}`}>
            <div className="category-header">
                <h2>Advisers</h2>
                <p>Enter the advisers, and Co-Advisers if applicable, for the given thesis</p>
            </div>

            <div className="field-container">
                <label htmlFor="adviser">Adviser</label>
                <div className="flex">
                    <input required className="full" type="text" id="adviser-last" name="adviser-last"
                        placeholder="Last Name" onChange={e => updateState("last", e, setAdviser)} />
                    <input required className="full" type="text" id="adviser-first" name="adviser-first"
                        placeholder="First Name" onChange={e => updateState("first", e, setAdviser)} />
                    <input required className="full" type="text" id="adviser-middle" name="adviser-middle"
                        placeholder="Middle Name" onChange={e => updateState("middle", e, setAdviser)} />
                </div>
            </div>
            <div className="field-container">
                <div className="label-container flex">
                    <label htmlFor="co-adviser">Co-Adviser</label>
                    <ToggleSwitch onChange={displayCoAdviser} />
                </div>
                {showCoAdviser && <div className="flex">
                    <input required className="full" type="text" id="co-adviser-last" name="co-adviser-last"
                        placeholder="Last Name" onChange={e => updateState("last", e, setCoAdviser)} />
                    <input required className="full" type="text" id="co-adviser-first" name="co-adviser-first"
                        placeholder="First Name" onChange={e => updateState("first", e, setCoAdviser)} />
                    <input required className="full" type="text" id="co-adviser-middle" name="co-adviser-middle"
                        placeholder="Middle Name" onChange={e => updateState("middle", e, setCoAdviser)} />
                </div>}
            </div>
        </div>
    )
}


export default Advisers