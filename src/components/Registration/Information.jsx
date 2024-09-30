import { convertToHtmlDate } from "@/utils/date"

function Information({ className, onUpdateField }) {
    return (
        <div className={`category-container ${className}`}>
            <div className="category-header">
                <h2>Identification</h2>
                <p>Please fill out the necessary details to add the thesis item into the database</p>
            </div>
            <div className="field-container">
                <label htmlFor="thesis-title">Title </label>
                <input required onChange={e => onUpdateField({ "thesis-title": e.target.value })} className="full" type="text" id="thesis-title" name="thesis-title" />
            </div>

            <div className="field-container flex">
                <div className="flex-1">
                    <label htmlFor="school-year">School Year</label>
                    <input required placeholder="202X-2XXX" className="full" type="text" name="school-year"
                        id="school-year" pattern="[0-9]{4}-[0-9]{4}" onChange={e => onUpdateField({ "school-year": e.target.value })} />
                </div>
                <div className="flex-1">
                    <label htmlFor="date-of-submission">Date of Submission</label>
                    <input required className="full" type="date" name="date-of-submission"
                        id="date-of-submission" min="1900-01-01" max={convertToHtmlDate(new Date)} onChange={e => onUpdateField({ "date-of-submission": e.target.value })} />
                </div>
            </div>
        </div>
    )
}

export default Information