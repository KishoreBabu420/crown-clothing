import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';

import { SignUpContainer, Title } from './sign-up-form.styles';

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

      await createUserDocumentFromAuth(user, {
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
    <SignUpContainer>
      <Title>Don't have an account?</Title>
      <span>Sign Up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label='Display Name'
          inputOptions={{
            type: 'text',
            required: true,
            id: 'display-name',
            name: 'displayName',

            value: displayName,
          }}
          onChange={changeHandler}
        />

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
        <FormInput
          label='Confirm Password'
          inputOptions={{
            type: 'password',
            required: true,
            id: 'confirm-password',
            name: 'confirmPassword',
            value: confirmPassword,
          }}
          onChange={changeHandler}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
