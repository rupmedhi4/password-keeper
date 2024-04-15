import React, { useContext } from 'react'
import PasswordContext from '../Context/PasswordContext';

export default function AddPassword() {
  

const {showModal,setShowModal} = useContext(PasswordContext);

const modalHandler =()=>{
  setShowModal(true)
}
  return (
    <div>
      <button onClick={modalHandler}>Add New Password</button>
    </div>
  )
}
