import { useState } from "react";


function ControlledFormRow() {

  const [usernameValue, setUserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [ageValue, setAgeValue] = useState('');


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
            />
        </div>
        <div>
          <label htmlFor="password">password: </label>
          <input 
            type="password" 
            name="password" 
            id="password" 
          />
        </div>
        <div>
          <label htmlFor="age">age: </label>
          <input 
            type="number" 
            name="age" 
            id="age" 
          />
        </div>
        <div>
          <button type="button" id="button">Register</button>
          <button type="button" id="button">Reset</button>
        </div>  
      </form>
      </div>
    </div>
  );
}

export default ControlledFormRow;
