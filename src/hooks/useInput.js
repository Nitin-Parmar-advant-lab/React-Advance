import { useState } from "react";

export function useInput(defaultValue, validationFn) {
    const [enteredInput, setEnteredInput] = useState(defaultValue); 
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredInput)

    function handleInputChange(event) {
        setEnteredInput(event.target.value);
        setDidEdit(false);
    }

    function handleInputBlur() {
        setDidEdit(true);
    }

    return {
        value: enteredInput,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    }
}
