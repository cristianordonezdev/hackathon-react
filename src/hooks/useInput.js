import { useState } from "react";

export default function useInput(defaultValue, validFn) {
  const [value, setValue] = useState(defaultValue);
  const [stateValue, setStateValue] = useState(false)
  const isValid = validFn(value);

  function handleOnChangeForm(event) {
    setValue(event.target.value)
    setStateValue(false)
  }

  function handleOnBlurForm() {
    setStateValue(true)
  }

  return {
    value,
    stateValue,
    handleOnBlurForm,
    handleOnChangeForm,
    hasError: stateValue && !isValid
  }
}

