
function Authors({ className }) {
    return (
        <div className={`category-container ${className}`}>
            <div className="category-header">
                <h2>Authors</h2>
                <p>Enter the owners/authors of the thesis</p>
            </div>
            <div className="field-container">
                <label htmlFor="author-1">Author 1</label>
                <div className="flex">
                    <input className="full" type="text" name="author-1-last" id="author-1-last"
                        placeholder="Last Name" />
                    <input className="full" type="text" name="author-1-first" id="author-1-first"
                        placeholder="First Name" />
                    <input className="full" type="text" name="author-1-middle" id="author-1-middle"
                        placeholder="Middle Name" />
                </div>
            </div>
            <div className="field-container">
                <label htmlFor="author-2">Author 2</label>
                <div className="flex">
                    <input className="full" type="text" id="author-2-last" name="author-2-last"
                        placeholder="Last Name" />
                    <input className="full" type="text" id="author-2-first" name="author-2-first"
                        placeholder="First Name" />
                    <input className="full" type="text" id="author-2-middle" name="author-2-middle"
                        placeholder="Middle Name" />
                </div>
            </div>
            <div className="field-container">
                <label htmlFor="author-3">Author 3</label>
                <div className="flex">
                    <input className="full" type="text" id="author-3-last" name="author-3-last"
                        placeholder="Last Name" />
                    <input className="full" type="text" id="author-3-first" name="author-3-first"
                        placeholder="First Name" />
                    <input className="full" type="text" id="author-3-middle" name="author-3-middle"
                        placeholder="Middle Name" />
                </div>
            </div>
        </div>

    )
}

export default Authors