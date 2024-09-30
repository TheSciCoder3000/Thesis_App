
function ContactInfo({ className, onUpdateField }) {
    return (
        <div className={`category-container ${className}`}>
            <div className="category-header">
                <h2>Contact Information</h2>
                <p>
                    Please enter the contact information of your contact person
                    to answer any additional inquiries in the future
                </p>
            </div>
            <div className="field-container">
                <label htmlFor="contact-email">Email: </label>
                <input required placeholder="email@mail.com" type="email" name="contact-email"
                    id="contact-email" onChange={e => onUpdateField({ "contact-email": e.target.value })} />
            </div>
            <div className="field-container">
                <label htmlFor="contact-number">Contact Number: </label>
                <input required placeholder="09XXXXXXXXX" type="tel" name="contact-number" id="contact-number" pattern="[0-9]{11}" onChange={e => onUpdateField({ "contact-number": e.target.value })} />
            </div>
        </div>
    )
}

export default ContactInfo