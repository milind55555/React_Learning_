import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
const Profile = () => {
    const {user} =useContext(UserContext)
  return (
    <div>
      Welcome {user.username} <br />
      Your password is {user.password} <br />
    </div>
  )
}

export default Profile
