import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';

import './sign-in-form.styles.scss';

import {
  signInWithGooglePopup,,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firbase.utils';

const defaultFormFields = {
  email: '',
  password: '',
};

const SingInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      setFormFields(defaultFormFields);
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('incorrect password');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log(err.message);
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label='Email'
          inputOptions={{
            type: 'email',
            required: true,
            id: 'email',
            name: 'email',
            value: email,
          }}
          onChange={changeHandler}
        />
        <FormInput
          label='Password'
          inputOptions={{
            type: 'password',
            required: true,
            id: 'password',
            name: 'password',
            value: password,
          }}
          onChange={changeHandler}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign in</Button>

          <Button
            buttonType='google'
            type='button'
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SingInForm;
