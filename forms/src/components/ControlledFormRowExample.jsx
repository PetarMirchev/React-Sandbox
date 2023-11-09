import { useState } from "react";


function ControlledFormRowExample() {

  const [usernameValue, setUserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [ageValue, setAgeValue] = useState('');


  const usernameChangeHandler = (e) => {
    setUserNameValue(e.target.value);
  }

  const passwordChangeHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAgeValue(Number(e.target.value));
  }


  const resetFormHandler = () => {
    setUserNameValue('');
    setPasswordValue('');
    setAgeValue('');
  }

  // send data & reset the form
  const submitHandler = () => {
      console.log(usernameValue);
      console.log(passwordValue);
      console.log(ageValue);
      resetFormHandler();
  };


  return (
    <div className="wrapper1">
      <h1>Controlled Form</h1>
      <div className="App">
      <form>
        <div>
            <label htmlFor="username">Username: </label>
            <input 
              type="text" 
              name="username" 
              id="username"
              value={usernameValue}
              onChange={usernameChangeHandler}
            />
        </div>
        <div>
          <label htmlFor="password">password: </label>
          <input 
            type="password1" 
            name="password" 
            id="password1"
            value={passwordValue}
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="age">age: </label>
          <input 
            type="number" 
            name="age" 
            id="age" 
            value={ageValue}
            onChange={ageChangeHandler}
          />
        </div>
        <div>
          <button type="button" id="button1" onClick={submitHandler}>Register</button>
          <button type="button" id="button2" onClick={resetFormHandler}>Reset</button>
        </div>  
      </form>
      </div>
    </div>
  );
}

export default ControlledFormRowExample;
