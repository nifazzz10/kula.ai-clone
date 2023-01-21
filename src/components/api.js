import React, { useState, useEffect } from 'react'

export default function UsersData() {
  const [Users, fetchUsers] = useState([])
 
  const getData = () => {
    fetch('https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <>
     <h2>    

     ff
    </h2>
 
    </>
  )
}