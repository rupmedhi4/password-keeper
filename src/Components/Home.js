import React, { useContext, useEffect } from 'react'
import './Home.css'
import AddPassword from './AddPassword'
import AllPassword from './AllPassword'
import Modal from './Modal'
import PasswordContext from '../Context/PasswordContext'

export default function Home() {
    const {showModal,data,setSearchQuery} = useContext(PasswordContext)
    useEffect(() => {
        if (showModal) {
            document.body.classList.add("overlay"); 
        } else {
            document.body.classList.remove("overlay"); 
        }
    }, [showModal]);
    
    return (
        <div className= 'container'>
            <div className='main-div'>
                <h1>Password Keeper</h1>
                <span className='total-password'>Total Passwords:{data.length}</span>
                <AddPassword />
                <div className='input-div'>
                    <span>Search</span>
                    <input type="text"  onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
            </div>
            {showModal ?<Modal/> : null }
          
            <AllPassword />
        </div>

    )
}
