import React from "react";
import { useState } from "react";
import CreateModal from "./createModal";

const UserForm = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateAccount = () => {
    setShowCreateModal(!showCreateModal);
  };

  return (
    <div>
      <form action=''>
        <label htmlFor='username'>username</label>
        <input id='username' type='text' />
        <label htmlFor='password'>pasword</label>
        <input id='password' type='password' />
        <button type='submit'>login</button>
      </form>
      <h3>dont have an account?</h3>
      <button onClick={handleCreateAccount}>create account</button>
      {showCreateModal && <CreateModal></CreateModal>}
    </div>
  );
};

export default UserForm;
