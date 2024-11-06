import React, { useState } from 'react'

const Multiple = () => {
    const [person, setPerson] = useState({
        fullname: 'Smith',
        age: 19,
        location: 'USA'
    });

    // const changeAge = () => {
    //     setPerson({
    //         age: 30,
    //     })
    // }
    const changeAge = () => {
        setPerson((prev) => {
            // spread operator
            return {...prev, age: 20, location: 'Canada'}
        })
    }

  return (
    <div>
      <h1>Name: {person.fullname}</h1>
      <p>I am {person.age} yrs of age, living in {person.location}</p>
      <button onClick={changeAge}>Change age</button>
    </div>
  )
}

export default Multiple