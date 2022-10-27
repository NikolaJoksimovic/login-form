import React from "react";

const CreateModal = () => {
  return (
    <div>
      <form action=''>
        <label htmlFor='username'>username</label>
        <input id='username' type='text' />

        <label htmlFor='email'>email</label>
        <input id='email' type='email' />

        <label htmlFor='password'>pasword</label>
        <input id='password' type='password' />

        <label htmlFor='confirmPassword'>confirmPassword</label>
        <input id='confirmPassword' type='password' />

        <button type='submit'>create account</button>
      </form>
    </div>
  );
};

export default CreateModal;
