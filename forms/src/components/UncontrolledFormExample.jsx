import React from 'react';

const UncontrolledFormExample = () => {

    //using standard JS formData:
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        console.log(formData.get('username'));  //name="username"
        console.log(formData.get('password')); //name="password"
        console.log(formData.get('age')); // name="age"
    }

  return (
    <div>
        <h1> Uncontrolled Form Example</h1>

        <form  onSubmit={submitHandler}>

            <div className="username"  >
               <label htmlFor='username'>Username: </label>
               <input type="text" name="username" id='username' placeholder='username'/>
            </div>

            <div className="password">
               <label htmlFor='password'>Password: </label>
               <input type="text" name="password" id='password' placeholder='password'/>
            </div>

            <div className="age">
               <label htmlFor='age'>age: </label>
               <input type="number" name="age" id='age' placeholder='age'/>
            </div>

            <div>
                <button>Register</button>
                <button type="button">Reset</button>
            </div>

        </form>
    </div>
  )
}

export default UncontrolledFormExample