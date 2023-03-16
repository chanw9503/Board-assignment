import React, { useState } from 'react';

const useForm = () => {
  const [form, setForm] = useState({
    title: '',
    body: '',
    author: '',
    isTitleError: false,
    isBodyError: false,
    isAuthorError: false,
  });

  const handler = (type, event) => {
    const value = event.target.value;
    let isValidation = false;

    switch (type) {
      case 'title': {
        if (value.length > 50) {
          isValidation = true;
        }
        return setForm({
          ...form,
          title: event.target.value,
          isTitleError: isValidation,
        });
      }
      case 'body': {
        if (value.length > 200) {
          isValidation = true;
        }
        return setForm({
          ...form,
          body: event.target.value,
          isBodyError: isValidation,
        });
      }
      case 'author': {
        if (value.length > 10) {
          console.log('isValidation');
          isValidation = true;
        }
        return setForm({
          ...form,
          author: event.target.value,
          isAuthorError: isValidation,
        });
      }

      default:
        return;
    }
  };
  console.log('form', form);
  return [form, handler];
};

export default useForm;
