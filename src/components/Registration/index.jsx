
import '@/assets/css/styles.css';
import FormBkg from '@/assets/img/form-background.jpg'
import Information from './Information';
import Authors from './Authors';
import Advisers from './Advisers';
import ContactInfo from './ContactInfo';
import ProgramInfo from './ProgramInfo';
import { useRef } from 'react';
import useMultiForms from '@/utils/hooks/MultiFormsHook';
import { backendUrl } from '@/utils/Constants';

const RegistrationForms = [
    Information,
    Authors,
    Advisers,
    ContactInfo,
    ProgramInfo
]


function Registration() {
    const ref = useRef(null);
    const {
        selectedFormIndx,
        // SelectedForm,
        nextForm,
        prevForm
    } = useMultiForms(RegistrationForms);

    // const onFormSubmit = (e) => {
    //     e.preventDefault();
    // }

    const onNextBtn = () => {
        let isValid = true;
        const formInputs = document.querySelector(".category-container.active").querySelectorAll("input")

        formInputs.forEach(input => {
            const validity = input.reportValidity();
            if (!validity) isValid = false;
        })

        if (isValid) nextForm();
    }

    return (
        <div className="registration-container">
            <div className="forms-container">
                <h1>Thesis Registration Form</h1>
                <form action={backendUrl("registration.php")} method="post">
                    <div ref={ref} className="slider">
                        {RegistrationForms.map((RegisterForm, indx) => (
                            <RegisterForm className={indx === selectedFormIndx ? "active" : ""} key={indx} />
                        ))}
                    </div>
                    <div className="form-control-container">
                        {selectedFormIndx > 0 && <button type='button' onClick={prevForm}>PREV</button>}
                        {selectedFormIndx < RegistrationForms.length - 1 && <button type='button' onClick={onNextBtn} className='affirm'>NEXT</button>}
                        {selectedFormIndx === RegistrationForms.length - 1 && <button type='submit' className='affirm'>SUBMIT</button>}
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