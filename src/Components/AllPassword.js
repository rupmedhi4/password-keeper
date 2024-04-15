import React, { useContext, useEffect } from 'react'
import PasswordContext from '../Context/PasswordContext'

export default function AllPassword() {

  const { data, setShowModal, setTitle, setPassword, setData,searchQuery,setSearchQuery } = useContext(PasswordContext)
  console.log(data);

  const editHandler = (id) => {
    setShowModal(true);
    const filteredTitle = data.filter((item) => item.id === id);
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    console.log(filteredTitle[0].title);
    setTitle(filteredTitle[0].title);
    setPassword(filteredTitle[0].password);

  };
  const deleteHandler = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };


  const filterData = searchQuery ? data.filter((data) =>
  data.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) : data
 

 


  return (
    <div>
      <h3>All Password</h3>
      {
        filterData.map((d) => (
          <div key={d.id}>
            <span>{d.title}</span>
            <span>{d.password}</span>
            <div>
              <button onClick={() => editHandler(d.id)}>Edit</button>
              <button onClick={() => deleteHandler(d.id)}>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

