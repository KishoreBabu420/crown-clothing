import { useState } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firbase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );

      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });

      setFormFields(defaultFormFields);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already exists');
      } else {
        console.log('user creation encountered an error', err);
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor='display-name'>Display Name</label>
        <input
          type='text'
          required
          id='display-name'
          name='displayName'
          onChange={changeHandler}
          value={displayName}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          required
          id='email'
          name='email'
          value={email}
          onChange={changeHandler}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          required
          id='password'
          name='password'
          value={password}
          onChange={changeHandler}
        />
        <label htmlFor='confirm-password'>Confirm Password</label>
        <input
          type='password'
          required
          id='confirm-password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={changeHandler}
        />

        <input
          type='submit'
          value='Sign Up'
        />
      </form>
    </>
  );
};

export default SignUpForm;
