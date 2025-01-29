import InputElement from "./InputElement";
import { isEmail, hasMinLength } from "../util/validation";
import useInput from "../hooks/useInput";

export default function Register({setForm}) {
  const {
    value: emailValue, 
    handleOnBlurForm: handleOnBlurEmail, 
    handleOnChangeForm: handleOnChangeEmail,
    hasError: emailIsValid
  } = useInput("", (value) => (isEmail(value)))

  const {
    value: passwordValue, 
    handleOnBlurForm: handleOnBlurPassword, 
    handleOnChangeForm: handleOnChangePassword,
    hasError: passwordIsValid
  } = useInput("", (value) => hasMinLength(value, 4))



  function handleSubmit(event) {
    event.preventDefault();
    setForm('topic')
    console.log("Hello world")
  }
 

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>

      <div className="control-row">
        <InputElement
          label="Email"
          id="email"
          name="email" 
          onChange={handleOnChangeEmail}
          value={emailValue}
          onBlur={handleOnBlurEmail}
          error={emailIsValid && "Please enter a valid email reused component"}
        ></InputElement>

        <InputElement
          label="Password"
          id="password"
          name="password" 
          onChange={handleOnChangePassword}
          onBlur={handleOnBlurPassword}
          value={passwordValue}
          error={passwordIsValid && "The password is not strong"}
        ></InputElement>

        <button className="button-pink">Continue</button>
      </div>
    </form>
  );
}