import { Programs, SubjectStudies } from "@/utils/Constants"

function ProgramInfo({ className, onUpdateField }) {
    return (
        <div className={`category-container ${className}`}>
            <div className="category-header">
                <h2>Program Information</h2>
                <p>Enter the program information of the given thesis</p>
            </div>
            <div className="field-container">
                <label htmlFor="program">Program</label>
                <select name="program" id="program" defaultValue={null} onChange={e => onUpdateField({ "program": e.target.value })}>
                    <option value={null} disabled>---</option>
                    {Object.entries(Programs).map(([prog, value]) =>
                        <option key={prog} value={value}>{prog}</option>
                    )}
                </select>
            </div>
            <div className="field-container">
                <label htmlFor="co-program">Co-Program</label>
                <select name="co-program" id="co-program" defaultValue={null} onChange={e => onUpdateField({ "co-program": e.target.value })}>
                    <option value={null} disabled>---</option>
                    {Object.entries(Programs).map(([prog, value]) =>
                        <option key={prog} value={value}>{prog}</option>
                    )}
                </select>
            </div>
            <div className="field-container">
                <label htmlFor="subject-study">Subject of Study</label>
                <select name="subject-study" id="subject-study" defaultValue={null} onChange={e => onUpdateField({ "subject-study": e.target.value })}>
                    <option value={null} disabled>---</option>
                    {Object.entries(SubjectStudies).map(([key, value]) =>
                        <option key={key} value={value}>{value}</option>
                    )}
                </select>
            </div>
        </div>
    )
}

export default ProgramInfo