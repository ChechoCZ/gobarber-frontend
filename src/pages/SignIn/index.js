import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid e-mail').required('E-mail required'),
  password: Yup.string().required('Password required')
});

export default function SignIn() {
  function handleSubmit(data) {

  }

  return (
    <>
      <img src={ logo } alt="GoBarber"/>

      <Form schema={ schema } onSubmit={ handleSubmit }>
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your secret password" />

        <button type="submit">Log in</button>

        <Link to="/register">Create account</Link>
      </Form>
    </>
  );
}