
function ContactInfo({ className }) {
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
                    id="contact-email" />
            </div>
            <div className="field-container">
                <label htmlFor="contact-number">Contact Number: </label>
                <input required type="tel" name="contact-number" id="contact-number" />
            </div>
        </div>
    )
}

export default ContactInfo