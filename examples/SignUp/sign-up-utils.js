import React, { useState, useEffect } from 'react';

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const useValidatedPassword = () => {
  const [password, setPassword] = useState('');
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);

  useEffect(() => {
    if (password && password.length < 8) {
      setIsInvalidPassword(true);
    } else {
      setIsInvalidPassword(false);
    }
  }, [password]);

  return [password, setPassword, isInvalidPassword];
}

export const useValidatedEmail = () => {
  const [email, setEmail] = useState('');
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  useEffect(() => {
    if (!email.match(emailRegex) && email !== '') {
      setIsInvalidEmail(true);
    } else {
      setIsInvalidEmail(false);
    }
  }, [email]);

  return [email, setEmail, isInvalidEmail];
}
