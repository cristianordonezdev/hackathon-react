import { useRef, useState } from "react"

export default function Login() {

  const [emailValid, setEmailValid] = useState(false)
  const email = useRef();
  const password = useRef();



  function handleSubmit(event) {
    event.preventDefault();

    if (!email.current.value.includes("@")) {
      setEmailValid(true);
      return;
    }

    console.log(email.current.value)
    console.log(password.current.value)
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Using Refs</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email}/>
          {emailValid && <span className="control-error">Please enter a valid email</span>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password}/>

        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
