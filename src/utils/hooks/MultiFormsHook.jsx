import { useState } from "react";

const useMultiForms = (Forms) => {
    const [selectedFormIndx, setSelectedFormIndx] = useState(0);

    const prevForm = () => {
        setSelectedFormIndx(indx => {
            if (indx > 0) return indx - 1;
            return indx;
        })
    }

    const nextForm = () => {
        setSelectedFormIndx(indx => {
            if (indx < Forms.length - 1) return indx + 1;
            return indx;
        })
    }

    return {
        selectedFormIndx,
        SelectedForm: Forms[selectedFormIndx],
        prevForm,
        nextForm
    }
}

export default useMultiForms;