
import '@/assets/css/styles.css';
import FormBkg from '@/assets/img/form-background.jpg'
import Information from './Information';
import Authors from './Authors';
import Advisers from './Advisers';
import ContactInfo from './ContactInfo';
import ProgramInfo from './ProgramInfo';
import { useRef, useState } from 'react';
import useMultiForms from '@/utils/hooks/MultiFormsHook';
import { backendUrl } from '@/utils/Constants';
import { post } from '@/utils/api';

const RegistrationForms = [
    Information,
    Authors,
    Advisers,
    ContactInfo,
    ProgramInfo
]

const initialFormState = {
    "thesis-title": null,
    "school-year": null,
    "date-of-submission": null,
    "authors": null,
    "adviser": null,
    "co-adviser": null,
    "contact-email": null,
    "contact-number": null,
    "program": null,
    "co-program": null,
    "subject-study": null
}

function Registration() {
    const [FormState, setFormState] = useState(initialFormState);
    const [btnState, setBtnState] = useState(true);
    const ref = useRef(null);
    const {
        selectedFormIndx,
        nextForm,
        prevForm
    } = useMultiForms(RegistrationForms);

    const onNextBtn = () => {
        let isValid = true;
        const formInputs = document.querySelector(".category-container.active").querySelectorAll("input")

        formInputs.forEach(input => {
            const validity = input.reportValidity();
            if (!validity) isValid = false;
        })

        if (isValid) nextForm();
    }

    const updateField = (updatedField) => setFormState(state => { return { ...state, ...updatedField } });


    const onFormSubmit = (e) => {
        e.preventDefault();
        setBtnState(false);
        post(backendUrl("registrationV2.php"), FormState)
            .then(() => {
                alert("Thesis Registration Complete")
            });
    }

    return (
        <div className="registration-container">
            <div className="forms-container">
                <h1>Thesis Registration Form</h1>
                <form onSubmit={onFormSubmit} method="post">
                    <div ref={ref} className="slider">
                        {RegistrationForms.map((RegisterForm, indx) => (
                            <RegisterForm onUpdateField={updateField} className={indx === selectedFormIndx ? "active" : ""} key={indx} />
                        ))}
                    </div>
                    <div className="form-control-container">
                        {selectedFormIndx > 0 && <button disabled={!btnState} type='button' onClick={prevForm}>PREV</button>}
                        {selectedFormIndx < RegistrationForms.length - 1 && <button disabled={!btnState} type='button' onClick={onNextBtn} className='affirm'>NEXT</button>}
                        {selectedFormIndx === RegistrationForms.length - 1 && <button disabled={!btnState} type='submit' className='affirm'>SUBMIT</button>}
                    </div>
                </form>
            </div>

            <div className="img-container">
                <img src={FormBkg} alt="" />
            </div>
        </div>
    )
}

export default Registration