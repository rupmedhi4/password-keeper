import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import PasswordContext from '../Context/PasswordContext';
import { useNavigate } from "react-router-dom";

export default function Modal() {

    

    const navigate = useNavigate()

    const {data,setData,setShowModal,title,setTitle,password,setPassword} = useContext(PasswordContext)


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title') {
            setTitle(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const id = Math.random()
        setData([...data, { title: title, password: password,id:id }]);
        setTitle("");
        setPassword("");
        setShowModal(false);
    };
    

    const modalCloseHandler = (e) => {
        setShowModal(false)
    };
    


    return ReactDOM.createPortal(
        <div className="modal-container">
            <form onSubmit={submitHandler}>
                <div className='form-title'>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-password'>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                         value={password}
                         onChange={handleChange}
                    />
                </div>
                <div className='button-div'>
                        <button type="submit">Add</button>
                        <button onClick={modalCloseHandler}>X</button>
                </div>
             
            </form>
        </div>,
        document.getElementById('modal')
    );
}
