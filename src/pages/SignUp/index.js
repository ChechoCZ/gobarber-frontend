import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name required'),
  email: Yup.string().email('Invalid e-mail').required('E-mail required'),
  password: Yup.string().min(6, 'Password should have at least 6 characters').required('Password required')
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={ logo } alt="GoBarber"/>

      <Form schema={ schema } onSubmit={ handleSubmit }>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your secret password" />

        <button type="submit">Create account</button>

        <Link to="/">I'm already registered!</Link>
      </Form>
    </>
  );
}
