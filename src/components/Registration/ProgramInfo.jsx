
function ProgramInfo({ className }) {
    return (
        <div className={`category-container ${className}`}>
            <div className="category-header">
                <h2>Program Information</h2>
                <p>Enter the program information of the given thesis</p>
            </div>
            <div className="field-container">
                <label htmlFor="program">Program</label>
                <select name="program" id="program">
                    <option value disabled selected>---</option>
                    <option value="MMA">Multimedia Arts</option>
                    <option value="MEE">Mechanical Engineering</option>
                    <option value="Computer Engineering">Computer Engineering</option>
                </select>
            </div>
            <div className="field-container">
                <label htmlFor="co-program">Co-Program</label>
                <select name="co-program" id="co-program">
                    <option value disabled selected>---</option>
                    <option value="MMA">Multimedia Arts</option>
                    <option value="MEE">Mechanical Engineering</option>
                    <option value="Computer Engineering">Computer Engineering</option>
                </select>
            </div>
            <div className="field-container">
                <label htmlFor="subject-study">Subject of Study</label>
                <select name="subject-study" id="subject-study">
                    <option value="none">None of the above</option>
                </select>
            </div>
        </div>
    )
}

export default ProgramInfo