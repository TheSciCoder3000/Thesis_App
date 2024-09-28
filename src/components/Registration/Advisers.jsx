
function Advisers({ className }) {


    return (
        <div className={`category-container ${className}`}>
            <div className="category-header">
                <h2>Advisers</h2>
                <p>Enter the advisers, and Co-Advisers if applicable, htmlFor the given thesis</p>
            </div>

            <div className="field-container">
                <label htmlFor="adviser">Adviser</label>
                <div className="flex">
                    <input className="full" type="text" id="adviser-last" name="adviser-last"
                        placeholder="Last Name" />
                    <input className="full" type="text" id="adviser-first" name="adviser-first"
                        placeholder="First Name" />
                    <input className="full" type="text" id="adviser-middle" name="adviser-middle"
                        placeholder="Middle Name" />
                </div>
            </div>
            <div className="field-container">
                <label htmlFor="co-adviser">Co-Adviser</label>
                <div className="flex">
                    <input className="full" type="text" id="co-adviser-last" name="co-adviser-last"
                        placeholder="Last Name" />
                    <input className="full" type="text" id="co-adviser-first" name="co-adviser-first"
                        placeholder="First Name" />
                    <input className="full" type="text" id="co-adviser-middle" name="co-adviser-middle"
                        placeholder="Middle Name" />
                </div>
            </div>
        </div>
    )
}


export default Advisers