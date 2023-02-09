import React from 'react';

import { auth } from '../firebase'


const profile = ({ user }) => {
  return (
    <div >
      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default profile;
