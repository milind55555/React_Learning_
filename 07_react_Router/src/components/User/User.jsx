import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid } =useParams() // useParams is a hook that returns an object of key-value pairs of the dynamic segments of the URL
  return (
    <div>
      <h1>User : {userid}</h1>
    </div>
  )
}

export default User
