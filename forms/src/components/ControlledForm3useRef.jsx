import React, { useEffect, useRef, useState } from 'react';
import style from './ControlledForm2.module.css';


const formInitialState = {//  const [formValues, setFormValues] = useState({
    username: '',         //     username: '',
    password: '',         //     password: '',
    age: '',              //     age: '',
    gender: 'm',          //     gender: 'm',
    swimming: false,      //     swimming: false,
    shopping: false,      //     shopping: false,
    running: false,       //     running: false,
};                        //   });

const ControlledForm3useRef = ({formRef}) => {
    
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});
    
//**************************************************************************************** */
    const isMountedRef = useRef(false);
    const usernameInputRef = useRef();


    useEffect(() => {
        // usernameInputRef.current.focus();
    }, []);


     // Executes only on update
    useEffect(() => {
        if(!isMountedRef.current){
            isMountedRef.current = true;
            return;
        }

        console.log('Form is updated!');
    },[formValues]);

//**************************************************************************************** */
    const changeHandler = (e) => {
        let value = '';

        // console.log(e.target.type);
        switch (e.target.type){
            case 'number': 
                value = Number(e.target.value);
             break;
            case 'checkbox': 
                value = e.target.checked;
             break;
            default: 
                value = e.target.value;
             break;
        }


        setFormValues (state => ({
            ...state,
            [e.target.name]: value
        }));
    };



    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValues);
        resetFormHandler();
    }

    const ageValidator = () => { //disable "Register" button if age is not correct!
        if( formValues.age < 0 || formValues.age > 120){
            setErrors( state => ({
                ...state,
                age: 'Age should be between 0 and 120 !',
            }));
        } else {
            if(errors.age){
                setErrors(state => ({...state, age: ''}));
            }
        }
    }

  return (
    <div className='App'>
        <h1>Controlled Form 2</h1>

        <form  ref={formRef} onSubmit={submitHandler}>
            <div>
                <label>Username: </label>
                <input 
                    type='text'
                    id='username'
                    name='username'
                    value={formValues.username}
                    onChange={changeHandler} 
                    onBlur={() => console.log('onBlur')} //! do logic after click & unclick on field (used to validation messenge)
                />
            </div>
            <div>
                <label>Password: </label>
                <input  
                    type='password'
                    id='password'
                    name='password'
                    value={formValues.password}
                    onChange={changeHandler} 
                />
            </div>
            <div>
                <label>Age: </label>
                <input  
                    type='number'
                    id='age'
                    name='age'
                    value={formValues.age}
                    onChange={changeHandler}
                    onBlur={ageValidator}
                    className={errors.age && style.inputError}
                />
                {errors.ago && (<p className={style.errorsMessage}>{errors.age}</p>)}
            </div>

            <div>
                <label htmlFor='gender'>Gender</label>
                <select name='gender' id='gender' onChange={changeHandler} value={formValues.gender}>
                    <option value='F'>F</option>
                    <option value='M'>M</option>
                    <option value='X'>F</option>
                </select>
            </div>

            <div>
                <h3>Hobbies</h3>
                <label htmlFor='swimming'>Swimming</label>
                <input type='checkbox' name='swimming' id='swimming' checked={formValues.swimming} onChange={changeHandler} />
                <label htmlFor='shopping'>Shopping</label>
                <input type='checkbox' name='shopping' id='shopping' checked={formValues.shopping} onChange={changeHandler} />
                <label htmlFor='running'>Running</label>
                <input type='checkbox' name='running' id='running' checked={formValues.running} onChange={changeHandler} />
            </div>

            <div>
                <button type='submit' disabled={Object.values(errors).some(x => x)}>Register</button>
                <button type='button' onClick={resetFormHandler}>Reset</button>
            </div>
        </form>
    </div>
  )
}

export default ControlledForm3useRef;
