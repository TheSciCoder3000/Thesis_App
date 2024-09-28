
function Information({ className }) {
    return (
        <div className={`category-container ${className}`}>
            <div className="category-header">
                <h2>Identification</h2>
                <p>Please fill out the necessary details to add the thesis item into the database</p>
            </div>
            <div className="field-container">
                <label htmlFor="thesis-title">Title </label>
                <input required className="full" type="text" id="thesis-title" name="thesis-title" />
            </div>

            <div className="field-container flex">
                <div>
                    <label htmlFor="school-year">School Year</label>
                    <input required placeholder="202X-2XXX" className="full" type="text" name="school-year"
                        id="school-year" pattern="[0-9]{4}-[0-9]{4}" />
                </div>
                <div>
                    <label htmlFor="date-of-submission">Date of Submission</label>
                    <input required className="full" type="date" name="date-of-submission"
                        id="date-of-submission" min="1900-01-01" max="2024-09-20" />
                </div>
            </div>
        </div>
    )
}

export default Information